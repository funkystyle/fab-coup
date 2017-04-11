angular.module("dashboardModule", ["headerModule"])
    .controller("dashboardCtrl", ["$scope", function ($scope) {
        console.log("dashboard controller!");
    }]);