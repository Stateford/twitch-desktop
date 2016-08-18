app.controller('streamCtrl', function($scope, $http, $location, $sce) {

    let channel = $location.url();
    $scope.currentStream = [];

    $scope.background = {};
    $scope.audioStream = '';

    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    };

    $http.get(`https://api.twitch.tv/kraken/streams${channel.toLowerCase()}`)
        .success(function(data) {
            $scope.currentStream[0] = data;

            let backgroundImg = data.stream.preview.template;
            let convert = function(link) {
                let final = link.split('{');
                let template = "1920x1080.jpg";
                return (`${final[0]}${template}`);
            };

            $scope.background = { "background" : `url(${convert(backgroundImg)})`};
        })
        .error(function(data) {
            console.error('got nothing');
        });

        $http.get(`http://localhost:30002/api${channel.toLowerCase()}`)
            .success(function(data) {
                $scope.audioStream = data.url;
                console.log(data.url);
            })
            .error(function(data) {
                console.error('got nothing');
            });


});
