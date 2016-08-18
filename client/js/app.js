var app = angular.module('twitch', ['ngRoute']);
app.config(['$routeProvider', '$locationProvider', '$compileProvider',
           function($routeProvider, $locationProvider, $compileProvider) {
               $compileProvider.debugInfoEnabled(false);
               $locationProvider.html5Mode({enabled: true, requireBase: false}).hashPrefix('*');
               $routeProvider
                .when('/index', {
                   controller: 'twitchCtrl',
                   templateUrl: 'public/views/default.html'
               })
               .when('/:channel', {
                   controller: 'streamCtrl',
                   templateUrl: 'public/views/channel.html'
               })
               .otherwise({
                   redirectTo: "/index"
               });
           }]);
