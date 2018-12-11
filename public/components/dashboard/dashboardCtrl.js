app.controller('dashboardCtrl', ['$scope', 'product', function($scope, product) {

    product.getList(function(resp) {
        log(resp);
        $scope.productList = resp;
    }, function(err) {
        error(err);
    });

}]);