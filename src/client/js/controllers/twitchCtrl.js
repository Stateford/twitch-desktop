app.controller('twitchCtrl', ($scope, $http, $route) => {
//    let serverTest = "http://localhost:30002/api/streams";
   let localTest = "../../data/streams.json";

        $.getJSON(localTest, function(data) {
            var usernames = [];
            for(let i in data.streams) {
                usernames.push(data.streams[i]);
            }

            $scope.streams = [];

            $scope.reloadRoute = function() {
                $route.reload();
            };

            for(var i in usernames) {
                let current = usernames[i];

                $http.get(`https://api.twitch.tv/kraken/streams/${current}`)
                    .success(function(data) {
                        if(data.streams !== null) {
                            $scope.streams.push(data);
                        }
                    })
                    .error(function(data) {
                        console.log('got nothing');
                });
            }

        });
});
