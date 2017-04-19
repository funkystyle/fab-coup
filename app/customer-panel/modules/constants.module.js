angular.module("constantModule", [])
    .constant("mainURL", "http://54.213.22.144")
    .constant('URL', {
        login: "/api/1.0/auth/login",
        register: "/api/1.0/auth/signup",
        logout: "/api/1.0/auth/logout",
        currentUser: "/api/1.0/auth/me",
        sendForgetPasswordLink: "/api/1.0/auth/send-forgot-password-link",
        changePassword: "/api/1.0/auth/change-password",
        emailActivation: "/api/1.0/auth/email-activation",

        store: "modules/JSON/store.json"
    })
    .directive('onlyDigits', function() {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function(scope, element, attrs, modelCtrl) {
                modelCtrl.$parsers.push(function(inputValue) {
                    if (inputValue == undefined) return '';
                    var transformedInput = inputValue.replace(/[^0-9]/g, '');
                    if (transformedInput !== inputValue) {
                        modelCtrl.$setViewValue(transformedInput);
                        modelCtrl.$render();
                    }
                    return transformedInput;
                });
            }
        };
    });