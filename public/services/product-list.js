app.service('product', ['$http', function($http) {
    var tempProductList;
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
            }
    }

}]);