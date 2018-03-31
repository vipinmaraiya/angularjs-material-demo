import angular from "angular";
import { RootController } from "./controllers/root.controller";
import { AppService } from "./services/app.service";
import { AuthService } from "./services/auth.service";
import { UserController } from "./controllers/user.controller";
import  uiRouter from "@uirouter/angularjs";
import "ui-select";
import 'angular-animate';
import 'angular-aria';
import 'angular-material';

const app = angular
.module("app",[uiRouter, "ngMaterial","ui.select", 
require("angular-sanitize"), 
require("angular-messages"),
require('angular-material-data-table')])
.service("appService", AppService)
.service("authService", AuthService)
.controller("rootController", RootController)
.controller("userController", UserController)

app.config(function ($stateProvider, $urlRouterProvider,$locationProvider) {
    $stateProvider
         .state('login', {
            url: '/',
            templateUrl: "views/login.html", 
            controller: 'rootController',
            controllerAs: 'root' 
        }).state('user', {
            url: '/user',
            templateUrl: "views/user.html", 
            controller: 'userController',
            resolve: {
                authorize: ['authService',
                  function(authService) {
                    return authService.isAuthenticated();
                  }
                ]
              },
            controllerAs: 'user' 
        })
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
}).run(['$rootScope', '$state', '$stateParams', 'authService',
"$location",
function($rootScope, $state, $stateParams, authService, location) {
  $rootScope.$on('$stateChangeStart', function(event, toState, toStateParams) {
    $rootScope.toState = toState;
    $rootScope.toStateParams = toStateParams;

    if (!authService.isAuthenticated()){
        location.path("/")
    }
  });
}
]);

app.config(function($mdThemingProvider) {

    // Configure a dark theme with primary foreground yellow

    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();

  });

