app.controller('dashboardCtrl', ['$scope', 'productService', '$location', '$uibModal', function($scope, productService, $location, $uibModal) {

    var index = 0;
    productService.getList(function(resp) {
        $scope.productList = resp;

    }, function(err) {
        error(err);
    });

    $scope.gotoProductDetails = function(index, product) {

        productService.setProductId(product);
        $uibModal.open({
                templateUrl: "components/dashboard/templates/product-detail.html",
                controller: ['productService', '$scope', function(productService, $scope) {

                    $scope.rate = 2;
                    $scope.max = 5;

                    $scope.myInterval = 3000;
                    $scope.noWrapSlides = false;
                    $scope.activeSlide = 0;
                    $scope.productDetail = productService.getProductId(product);
                    log($scope.productDetail);
                }]
            })
            .closed.then(function() {

            });
    }

}]);

// $scope.productId = productService.getProductId();

//     if (!$scope.productId) {
//         $uibModal.open({
//                 template: "<div><h1 class='text-center'>You Have Not Selected Any Product</h1><h5 class='text-center'><a href>Redirecting To Dashboard</a></h5></div>",
//             })
//             .closed.then(function() {
//                 $location.path('dashboard');
//             });

//     } else {
//         log($scope.productId)


//     }