app.controller('gamesCtrl', function($scope, $http, $route) {
    let channels = 'http://idietmoran.com/twitch/api/top/games';

    $scope.streams = {};

    // $scope.reloadRoute = () => {
    //     $route.reload();
    // };

    $http.get(channels)
        .then(data => {
            // NOTE: dev purposes
            // test purposes
            console.log(data);
            $scope.streams = data.data.streams;
        }, err => {
            console.log(err);
        });

});
