var app = angular.module("Alarmee", ['ui.bootstrap']);
 
app.controller("AlarmsCtrl", ['$scope', function($scope) {
    $scope.alarms = [];
    $scope.alerts = [];
    $scope.isCollapsed = true;
    
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
}]);