app.controller('dashboardCtrl', ['$scope', 'productService', '$location', function($scope, productService, $location) {

    var index = 0;
    productService.getList(function(resp) {
        $scope.productList = resp;
       
    }, function(err) {
        error(err);
    });

    $scope.gotoProductDetails = function(index, product) {
        log(index);
        log(product);

        productService.setProductId(product);
        $location.path("product-detail");
    }

}]);