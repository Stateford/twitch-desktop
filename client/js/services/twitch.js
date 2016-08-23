app.factory('twitch', [$http, function($http) {
    return function(stream) {
        $http.get(`https://api.twitch.tv/kraken/streams/${stream}`)
            .success(function(data) {
                return data;
            })
            .error(function(err) {
                return err;
            });
    };
}]);
