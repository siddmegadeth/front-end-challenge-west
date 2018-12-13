app.controller('productDetailCtrl', ['$scope', '$routeParams', 'productService', '$uibModal', '$location', function($scope, $routeParams, productService, $uibModal, $location) {


    $scope.productId = productService.getProductId();
    
    if (!$scope.productId) {
        $uibModal.open({
                template: "<div><h1 class='text-center'>You Have Not Selected Any Product</h1><h5 class='text-center'><a href>Redirecting To Dashboard</a></h5></div>",
            })
            .closed.then(function() {
                $location.path('dashboard');
            });

    } else {
        log($scope.productId)
        
        
    }

}]);