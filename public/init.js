    "use strict";

    var DI = [
        "ngRoute",
        "ngAnimate",
        "ui.bootstrap",
        "ngTouch"
    ];

    var win = new winDevice("myApp", DI); //Bootstrap Cordova Or Browser Based App .no ng-app Required
    var app = win.device(); // init App
    win.enable(true);
    win.info();

    app.config(['$routeProvider', '$httpProvider','$locationProvider', function($routeProvider, $httpProvider,$locationProvider) {

        $routeProvider
            .when('/dashboard', {
                templateUrl: 'components/dashboard/dashboard.html',
                controller: 'dashboardCtrl',
                showNav: true
            })
            .when('/login', {
                templateUrl: 'components/login/login.html',
                controller: 'loginCtrl',
                showNav: true
            })
            .when('/product-detail', {
                templateUrl: 'components/product-detail/product-detail.html',
                controller: 'productDetailCtrl',
                showNav: true
            })
            .otherwise({
                redirectTo: '/login'
            });
    }]);

    app.run(['$rootScope', '$location', function($rootScope, $location) {

        $rootScope.$on('$routeChangeStart', function(event, current, next) {
            $rootScope.showNav = current.showNav;
        });

        $rootScope.$on('$routeChangeSuccess', function() {});

    }]);