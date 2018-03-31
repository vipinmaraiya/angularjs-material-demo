import angular from "angular";
import { RootController } from "./controllers/root.controller";
import { AppService } from "./services/app.service";
import { UserController } from "./controllers/user.controller";
import routing from "./app.route";
import "@uirouter/angularjs";
import "ui-select";
import 'angular-animate';
import 'angular-aria';
import 'angular-material';

const app = angular
.module("app",["ui.router", "ngMaterial","ui.select", 
require("angular-sanitize"), 
require("angular-messages")])
.service("appService", AppService)
.controller("rootController", RootController)
.controller("userController", UserController)

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
         .state('login', {
            url: '/',
            templateUrl: "index.html", 
            controller: 'rootController',
            controllerAs: 'root' 
        }).state('user', {
            url: '/user',
            templateUrl: "user.html", 
            controller: 'userController',
            controllerAs: 'user' 
        });
});

app.config(function($mdThemingProvider) {

    // Configure a dark theme with primary foreground yellow

    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();

  });

