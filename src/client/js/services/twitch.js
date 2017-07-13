app.factory('twitch', [$http, function($http) {
    return function(stream) {
        $http.get(`https://api.twitch.tv/kraken/streams/${stream}`)
            .then(data => {
                return data;
            }, err => {
                return err;
            })
    };
}]);
