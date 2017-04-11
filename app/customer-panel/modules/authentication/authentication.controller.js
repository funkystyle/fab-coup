angular.module("authenticationModule", ["satellizer", "constantModule"])
    .controller("authenticationCtrl", ["$scope", "$http", "$auth", "URL", function ($scope, $http, $auth, URL) {
        console.log("loginCtrl");

        $scope.login = {};
        // authentication functionality
        $scope.loginNow = function (user) {
            $http({
                url: URL.login,
                data: user,
                method: "POST"
            }).then(function (data) {

            }, function (error) {
                console.log(error);
            });
        }
    }]);