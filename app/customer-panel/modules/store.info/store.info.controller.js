angular
    .module("storeinfoModule", ["footerModule", "storeServiceModule"])
    .controller("storeinfoController", ["$scope", "$stateParams", "storeService", function ($scope, $stateParams, storeService) {
        $scope.favorite = {
            favorite: false
        };
        $scope.store = undefined;
        // manageFavorite function
        $scope.manageFavorite = function () {
            $scope.favorite.favorite = !$scope.favorite.favorite;
        }

        // get Particular
        storeService.getStore().then(function (data) {
            console.log(data);
            $scope.store = data;
        }, function (error) {
            console.log("error", error);
        });
    }]);