routing.$inject = ['$routeProvider', '$locationProvider'];

export default function routing($urlRouterProvider, $locationProvider) {

  
  $urlRouterProvider.when('/', {
    templateUrl: '/index.html',
    controller: 'rootController'
}).when('/user', {
    templateUrl: '/user.html',
    controller: 'userController'
}).otherwise({
    redirectTo: "/"
});
$locationProvider.html5Mode(true);
}