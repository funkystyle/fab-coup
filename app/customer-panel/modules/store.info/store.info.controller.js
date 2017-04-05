angular
    .module("storeinfoModule", ["headerModule", "footerModule"])
    .controller("storeinfoController", ["$scope", function ($scope) {
         $scope.favorite = {
            favorite: false
        };
        // manageFavorite function
        $scope.manageFavorite = function () {
            $scope.favorite.favorite = !$scope.favorite.favorite;
        }
    }]);