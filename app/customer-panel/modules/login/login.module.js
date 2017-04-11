angular.module("loginModule", ["constantModule"])
    .controller("loginCtrl", ["$scope", "$http", "URL", function ($scope, $http, URL) {
        console.log("login controller");
        // Declaring variables
        $scope.login = {};

        // login click
        $scope.loginNow = function (login) {
            $http({
                url: URL.login,
                method: "POST",
                data: login
            }).then(function (data) {
                console.log(data.data);
            }, function (error) {
               console.log("error")
            });
        }
    }]);