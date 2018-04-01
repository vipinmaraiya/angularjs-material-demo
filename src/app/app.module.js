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
            controllerAs: 'root', 
            authenticate: false
        }).state('user', {
            url: '/user/{id}',
            templateUrl: "views/user.html", 
            controller: 'userController',
            // resolve: {
            //     authorize: ['authService',
            //       function(authService) {
            //         return authService.isAuthenticated();
            //       }
            //     ],
            //     users:["appService", function(appService){
            //       return appService.getUsers();
            //     }]
            //   },

            controllerAs: 'user' 
        }).state("accessdenied", {
          url:"/denied",
          templateUrl:"views/accessdenied.html"
        })
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
})

// Migrate to: UI-Router 1.0 Transition Hook
app.run(["$transitions",function($transitions) {

  $transitions.onStart({ to: 'auth.**' }, function(trans) {
    console.log("state")
    // var auth = trans.injector().get('AuthService');
    if (true) {
      // User isn't authenticated. Redirect to a new Target State
      return trans.router.stateService.target('login');
    }
  });
}])

app.config(function($mdThemingProvider) {

    // Configure a dark theme with primary foreground yellow

    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();

  });

