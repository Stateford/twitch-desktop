app.controller('gamesCtrl', ($scope, $http, $route) => {
    let channels = 'http://idietmoran.com/twitch/api/top/games';

    $scope.streams = {};

    // $scope.reloadRoute = () => {
    //     $route.reload();
    // };

    $http.get(channels)
        .success((data) => {
            $scope.streams = data.streams;
        })
        .error((data) => {
            console.log('got nothing');
        });

});
