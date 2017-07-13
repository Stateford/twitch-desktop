app.controller('featuredCtrl', function($scope, $http, $location, $sce) {
    let channel = $location.url();


    // $scope.reloadRoute = () => {
    //     $route.reload();
    // };

    $scope.streams = {};

    // $scope.trustSrc = function(src) {
    //     return $sce.trustAsResourceUrl(src);
    // };

    $http.get(`http://idietmoran.com/twitch/api/featured`)
        .then(data => {
            $scope.streams = data.data.featured;
        }, err => {
            console.log('got nothing');
        });



});
