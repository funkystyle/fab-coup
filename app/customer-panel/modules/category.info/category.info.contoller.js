angular
    .module("categoryinfoModule", ["storeServiceModule"])
    .controller("categoryinfoCtrl", ["$scope", "$stateParams", "storeService", function ($scope, $stateParams, storeService) {
        console.log("categoryinfoCtrl")
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