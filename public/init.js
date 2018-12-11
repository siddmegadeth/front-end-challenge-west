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

    app.config(['$routeProvider', '$httpProvider',function($routeProvider, $httpProvider) {

            $routeProvider
                .when('/dashboard', {
                    templateUrl: 'components/dashboard/dashboard.html',
                    controller: 'dashboardCtrl',
                    showNav: false                    
                })
                .otherwise({
                    redirectTo: '/dashboard'
                });
        }
    ]);

    app.run(['$rootScope', '$location', function($rootScope, $location) {

        $rootScope.$on('$routeChangeStart', function(event, current, next) {
            $rootScope.showNav = current.showNav;
        });

        $rootScope.$on('$routeChangeSuccess', function() {
        });

    }]);

