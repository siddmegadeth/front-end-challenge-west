app.directive('typeahead', function($timeout) {
    return {
        restrict: 'AEC',
        scope: {
            items: '=',
            prompt: '@',
            title: '@',
            subtitle: '@',
            model: '=',
            onSelect: '&',
            footer: '@',
            fareEconomy: '@',
            fareLuxury: '@'

        },
        link: function(scope, elem, attrs) {
            scope.handleSelection = function(selectedItem) {
                scope.model = selectedItem;
                scope.current = 0;
                scope.selected = true;
                $timeout(function() {
                    scope.onSelect();
                }, 200);
            };
            scope.current = 0;
            scope.selected = true;
            scope.isCurrent = function(index) {
                return scope.current == index;
            };
            scope.setCurrent = function(index) {
                scope.current = index;
            };
        },
        templateUrl: 'components/global/templates/type-ahead.html'
    }
});


app.directive("routeLoader", ['$rootScope', function($rootScope) {
    return {
        restrict: 'AE',
        scope: {
            value: '='
        },
        template: " <div class='route-loader' ng-if='value' ><i class='fa fa-circle-o-notch fa-spin fa-5x fa-fw spinner-rotate blue'></i><span class='sr-only'>Loading...</span> </div>",
        link: function(elem, scope, attr) {
            log("Executing Route Load");
        }

    };
}]);




app.directive("backButton", ['$window', function($window) {
    return {
        scope: {
            display: '='
        },
        restrict: "A",
        link: function(scope, elem, attrs) {
            elem.bind("click", function() {
                $window.history.back();
            });
        }
    };
}]);
