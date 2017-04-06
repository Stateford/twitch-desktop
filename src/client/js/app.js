var app = angular.module('twitch', ['ngRoute']);
app.config(['$routeProvider', '$locationProvider', '$compileProvider',
           function($routeProvider, $locationProvider, $compileProvider) {
               $compileProvider.debugInfoEnabled(false);
               $locationProvider.html5Mode({enabled: true, requireBase: false}).hashPrefix('*');
               $routeProvider
                .when('/', {
                   controller: 'twitchCtrl',
                   templateUrl: 'src/client/views/default.html'
               })
               .when('/featured', {
                   controller: 'featuredCtrl',
                   templateUrl: 'src/client/views/featured.html'
               })
               .when('channel/:channel', {
                   controller: 'streamCtrl',
                   templateUrl: 'src/client/views/stream.html'
               })
               .when('/options', {
                   templateUrl: 'src/client/views/options.html'
               })
               .when('/games', {
                   controller: 'gamesCtrl',
                   templateUrl: 'src/client/views/games.html'
               })
               .when('/games/:game', {
                   templateUrl: 'src/client/views/streamsGame.html'
               })
               .when('/channels', {
                   controller: 'channelsCtrl',
                   templateUrl: 'src/client/views/channels.html'
               })
               .when('/following', {
                   templateUrl: 'src/client/views/following.html'
               })
               .when('/dashboard', {
                   templateUrl: 'src/client/views/dashboard.html'
               })
               .otherwise({
                   redirectTo: "/"
               });
           }]);
