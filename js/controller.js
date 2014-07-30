var app = angular.module("Alarmee", ['ui.bootstrap']);
 
app.controller("AlarmsCtrl", ['$scope', function($scope) {
    $scope.alarms = [];
    $scope.alerts = [];
    $scope.geocoder = new google.maps.Geocoder();
    $scope.currentPosition = "";
    $scope.targetLatitude = "";
    $scope.targetLongitude = "";
    $scope.targetAddress = "";
    
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
   	 	   	 	//watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000 });
   	        } else {
           	   alert('Geocode was not successful for the following reason: ' + status);
   	        }
        });
    }
    
    $scope.getCurrentPosition = function() {
    }
}]);