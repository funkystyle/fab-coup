angular.module('homeModule', [
    {
        name: "headerModule",
        files: ['modules/header/header.controller.js']
    },
    {
        name: "footerModule",
        files: ['modules/footer/footer.controller.js']
    },
    {
        name: "storeServiceModule",
        files: ['modules/store/store.service.js']
    }
]).controller('homeCtrl', ['$scope', '$ocLazyLoad', 'storeService',
    function ($scope, $ocLazyLoad, storeService) {
    $('.carousel').carousel({
        interval: 4000,
        pause: true
    });
    // get the list of stores from the storeService.get() method
    $scope.stores = [];
    storeService.get().then(function (data) {
        $scope.stores = data;
    }, function (error) {
        console.log(error.data);
    });
}])
