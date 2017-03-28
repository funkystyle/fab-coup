angular.module("headerModule", [])
    .directive("headerComponent", [function () {
        return {
            restrict: 'E',
            templateUrl: 'modules/header/header.template.html',
            controller: "headerCtrl"
        }
    }])
    .controller("headerCtrl", ['$scope', function ($scope) {
        
    }]);
