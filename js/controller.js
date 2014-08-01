var app = angular.module("Alarmee", ['ui.bootstrap']);
 
app.controller("AlarmsCtrl", ['$scope', function($scope) {
    $scope.alarms = [];
    $scope.alerts = [];
    $scope.geocoder = new google.maps.Geocoder();
    $scope.currentLatitude = "";
    $scope.currentLongitude = "";
    $scope.targetLatitude = "";
    $scope.targetLongitude = "";
    $scope.targetAddress = "";
    $scope.watchID = "";
    
    Number.prototype.toRad = function() { return this * (Math.PI / 180); };
    
    $scope.addAlarm = function()
	{
	    var size = _.size($scope.alarms);
	    if(size == 0)
	        $scope.alarms.push(new Alarm(0));
	    else
	        $scope.alarms.push(new Alarm(parseInt($scope.alarms[size-1].id) + 1));
	};
	
	$scope.removeAlarm = function(id)
	{
	    $scope.alarms = _.reject($scope.alarms, function(alarm){ return alarm.id == id; });
	    //$scope.$emit('actualizarTotal');
	};
	
	$scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };

    $scope.getTargetPosition = function() {
        $scope.geocoder.geocode( {'address': $scope.targetAddress}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {	
   	 	        $scope.targetLatitude = results[0].geometry.location.lat();        
   	 	        $scope.targetLongitude = results[0].geometry.location.lng();
   	        } else {
           	   alert('Geocode was not successful for the following reason: ' + status);
   	        }
        });
    }
    
    $scope.onSuccess = function(position) {
       $scope.currentLatitude = position.coords.latitude;
       $scope.currentLongitude = position.coords.longitude;
       
       $scope.getDistance();
   }
    
    $scope.getCurrentPosition = function() {
        $scope.watchID = navigator.geolocation.watchPosition($scope.onSuccess, $scope.onError, { timeout: 30000 });
    }
    
    $scope.getDistance = function()
    {        
        var lat1 = $scope.currentLatitude;
       	var lat2 = $scope.targetLatitude;
       	var lon1 = $scope.currentLongitude;
       	var lon2 = $scope.targetLongitude;
   	
        var R = 6371; // km
        var dLat = (lat2-lat1).toRad();
        var dLon = (lon2-lon1).toRad();
        lat1 = lat1.toRad();
        lat2 = lat2.toRad();
       
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
               Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var distance = R * c;
       
        window.plugin.backgroundMode.enable();
        alert(distance + "km");
   }
}]);