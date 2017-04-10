angular.module('homeModule', ["headerModule", "storeServiceModule", "footerModule"])
    .controller('homeCtrl', ['$scope', '$ocLazyLoad', 'storeService',
        function ($scope, $ocLazyLoad, storeService) {
        $('.carousel').carousel({
            interval: 4000,
            pause: true
        });
        // get the list of stores from the storeService.get() method
        $scope.stores = [];
        storeService.get().then(function (data) {
            $scope.stores = data;
        }, function (error) {
            console.log(error.data);
        });
    }]);
