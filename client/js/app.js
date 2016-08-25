var app = angular.module('twitch', ['ngRoute']);
app.config(['$routeProvider', '$locationProvider', '$compileProvider',
           function($routeProvider, $locationProvider, $compileProvider) {
               $compileProvider.debugInfoEnabled(false);
               $locationProvider.html5Mode({enabled: true, requireBase: false}).hashPrefix('*');
               $routeProvider
                .when('/', {
                   controller: 'twitchCtrl',
                   templateUrl: 'client/views/default.html'
               })
               .when('channel/:channel', {
                   controller: 'streamCtrl',
                   templateUrl: 'client/views/channel.html'
               })
               .when('/options', {
                   templateUrl: 'client/views/options.html'
               })
               .when('/games', {
                   templateUrl: 'client/views/game.html'
               })
               .otherwise({
                   redirectTo: "/"
               });
           }]);
