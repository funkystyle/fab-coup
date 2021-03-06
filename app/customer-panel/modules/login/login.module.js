angular.module("loginModule", ["constantModule"])
    .controller("loginCtrl", function($scope, $http, URL, mainURL, $state, $stateParams) {
        // Declaring variables
        $scope.login = {};
        $scope.show = {
            login: false,
            register: false
        };
        $scope.text = {
            register: "SIGN UP NOW",
            login: "LOGIN",
            error: undefined
        }
        $scope.register = {
            user_level: ['user'],
            status: "inactive"
        };
        // login click
        $scope.loginNow = function(login) {
            $scope.text.login = "Please wait..!";
            $http({
                url: mainURL + URL.login,
                method: "POST",
                data: login
            }).then(function(data) {
                if(data.data) {
                    localStorage.setItem('token', data.data.data.login_token);
                    $state.go("main.dashboard", $stateParams, {reload: true});
                }
            }, function(error) {
                console.log("error", error);
                $scope.show.login = true;
                $scope.text.login = "LOG IN";
                setTimeout(function () {
                    $scope.show = {};
                }, 2000);
                $scope.login = {};
                $scope.text.error = error.data.error;
            });
        }

        $scope.registerNow = function(register) {
            register.city = "s";
            register.age = 45;
            register.gender = "male";
            $scope.text.register = "Please wait..!";
            console.log(register);
            $http({
                url: mainURL + URL.register,
                method: "POST",
                data: [register]
            }).then(function(data) {
                console.log("asdasdasdass", data);
                $scope.show.success = "ddd";
                setTimeout(function () {
                    $state.go('main.home')
                }, 2000)
            }, function(error) {
                console.log("error", error);
                $scope.text.register = "SIGN UP NOW";
                $scope.show.register = true;
                $scope.register = {};
                setTimeout(function () {
                    $scope.show = {};
                }, 2000);
                $scope.text.error = error.data.error;
            });
        }
    });