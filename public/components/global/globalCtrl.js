app.controller('globalCtrl', ['$scope', '$rootScope', 'product','$location', function($scope, $rootScope, product,$location) {

    $rootScope.isActive = function(loc)
    {
    	return $location.path() === loc;
    }

}]);