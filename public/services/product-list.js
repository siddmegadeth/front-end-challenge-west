app.service('productService', ['$http', function($http) {
    var tempProductList;
    var productId;
    return {

        getList: function(cb, err) {

            $http({
                    method: 'GET',
                    url: 'services/index.json'
                })
                .success(function(resp) {
                    tempProductList = resp;
                    cb(tempProductList);
                })
                .error(err);
        },
        getProductId: function() {
            return productId;
        },

        setProductId: function(p) {
            productId = p;
        }

    }

}]);