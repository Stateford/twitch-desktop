app.controller('channelsCtrl', function($scope, $http, $route) {
    let channels = 'http://idietmoran.com/twitch/api/top/streams';

    $scope.streams = {};

    // $scope.reloadRoute = () => {
    //     $route.reload();
    // };

    // $http.get(channels)
    //     .success((data) => {
    //         if(data.streams !== null) {
    //             $scope.streams = data.streams;
    //         }
    //     })
    //     .error((data) => {
    //         console.log('got nothing');
    //     });


    $http.get(channels)
        .then(data => {
            if(data.streams !== null) {
                $scope.streams = data.data.streams;
            }
        }, err => {
            console.log('got nothing');
        })
    
});
