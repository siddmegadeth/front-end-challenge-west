app.controller('dashboardCtrl', ['$scope', 'productService', '$location', '$uibModal', function($scope, productService, $location, $uibModal) {

    var index = 0;
    $scope.productList = [];

    productService.getList(function(resp) {


        // Filter out Special Charecters From Name
        var i = 0;
        resp.groups.forEach(function(tuple) {
            log(tuple);
            tuple.name = tuple.name.slice(tuple.name.indexOf("#") + 7);
            $scope.productList.push(tuple);
            log($scope.productList);

        });


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