angular
    .module("storeinfoModule", [
        {
            name: "headerModule",
            files: ['modules/header/header.controller.js']
        }
    ])
    // controller
    .controller("storeinfoController", storeinfoController);

// storeinfoController
function storeinfoController ($scope) {
    $scope.favorite = {
        favorite: false
    };
    // manageFavorite function
    $scope.manageFavorite = function () {
        $scope.favorite.favorite = !$scope.favorite.favorite;
    }
}