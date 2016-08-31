app.controller('channelsCtrl', function($scope, $http, $route) {
    let channels = 'https://api.twitch.tv/kraken/streams/';

    $scope.streams = {};

    $scope.reloadRoute = function() {
        $route.reload();
    };

    $http.get(channels)
        .success(function(data) {
            if(data.streams !== null) {
                $scope.streams = data.streams;
            }
        })
        .error(function(data) {
            console.log('got nothing');
        });

});
