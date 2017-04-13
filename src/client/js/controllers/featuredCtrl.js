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
        .success((data) => {
            $scope.streams = data.featured;
        })
        .error((data) => {
            console.log('got nothing');
        });


});
