app.controller('globalCtrl', ['$scope', '$rootScope', 'productService','$location', function($scope, $rootScope, productService,$location) {

    $rootScope.isActive = function(loc)
    {
    	return $location.path() === loc;
    }

}]);