angular.module("footerModule", [])
    .directive("footerComponent", [function () {
        return {
            restrict: 'E',
            templateUrl: 'modules/footer/footer.template.html',
            controller: "footerCtrl"
        }
    }])
    .controller("footerCtrl", ['$scope', function ($scope) {

    }]);
