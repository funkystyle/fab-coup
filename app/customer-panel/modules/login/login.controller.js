angular
    .module("loginModule", [])
        .controller("loginCtrl", loginController);

// login controller function
function loginController ($scope) {
    console.log("login controller");
}