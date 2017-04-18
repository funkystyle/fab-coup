angular.module("loginModule", ["constantModule"])
    .controller("loginCtrl", function($scope, $http, URL, mainURL) {
        // Declaring variables
        $scope.login = {};
        $scope.register = {
            user_level: ['user'],
            status: "inactive"
        };
        // login click
        $scope.loginNow = function(login) {
            $http({
                url: mainURL + URL.login,
                method: "POST",
                data: login
            }).then(function(data) {
                console.log(data.data);
            }, function(error) {
                console.log("error")
            });
        }

        $scope.registerNow = function(register) {
            register.city = "s";
            register.age = 45;
            register.gender = "male";
            
            console.log(register);
            $http({
                url: mainURL + URL.register,
                method: "POST",
                data: register
            }).then(function(data) {
                console.log("asdasdasdass", data);
            }, function(error) {
                console.log("error", error)
            });
        }
    });