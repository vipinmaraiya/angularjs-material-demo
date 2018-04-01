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
            url: '/user',
            templateUrl: "views/users.html", 
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

            // resolve:{
            //   users:["appService", function(appService){
            //     return appService.getUsers();
            //   }]
            // },
            controllerAs: 'user' 
        }).state("userById", {
          url:"/user/{id}",
          templateUrl:"views/user.html"
        })
        .state("admin", {
          url:"/admin",
          templateUrl:"views/admin.html"
        })
        .state("accessdenied", {
          url:"/denied",
          templateUrl:"views/accessdenied.html"
        })
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
})

app.run(["$transitions", "$state",function($transitions, state) {
  console.log($transitions)
  $transitions.onStart({ to: 'user.**' }, async function(trans) {
    var auth = trans.injector().get('authService');
    console.log("User");
    var result = await auth.isAuthenticated();
    console.log(result)
    if(!result){
      return trans.router.stateService.target('accessdenied');
    }

  });

  $transitions.onStart({ to: 'admin.**' },  async function(trans) {
    var auth = trans.injector().get('authService');
    console.log("Admin")
    var result = await auth.isAdminAuthenticated();
    console.log(result)
    if(!result){
      return trans.router.stateService.target('accessdenied');
    }
  });

}])

app.config(function($mdThemingProvider) {

    // Configure a dark theme with primary foreground yellow

    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();

  });

