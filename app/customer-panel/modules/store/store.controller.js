angular
    .module("storeModule", [
        {
            name: "headerModule",
            files: ['modules/header/header.controller.js']
        },
        {
            name: "storeServiceModule",
            files: ['modules/store/store.service.js']
        }
    ])
    // controller
    .controller("storeCtrl", storeController);

// store controller
function storeController ($scope) {
    $scope.storeAlphabet = {
        "#": {enable: false, array: []}, "A": {enable: false, array: []}, "B": {enable: false, array: []}, "C":{enable: false, array: []},
        "D": {enable: false, array: []}, "E": {enable: false, array: []}, "F": {enable: false, array: []}, "G": {enable: false, array: []},
        "H": {enable: false, array: []}, "I": {enable: false, array: []}, "J": {enable: false, array: []}, "K": {enable: false, array: []},
        "L": {enable: false, array: []}, "M": {enable: false, array: []}, "N": {enable: false, array: []}, "O": {enable: false, array: []},
        "P": {enable: false, array: []}, "Q": {enable: false, array: []}, "R": {enable: false, array: []}, "S": {enable: false, array: []},
        "T": {enable: false, array: []}, "U": {enable: false, array: []}, "V": {enable: false, array: []}, "W": {enable: false, array: []},
        "X": {enable: false, array: []}, "Y": {enable: false, array: []}, "Z": {enable: false, array: []}
    }
    $scope.stores = [
        {
            name: "Flipkart",
            url: "/flipkart-coupons"
        },
        {
            name: "Amazon",
            url: "/amazon-coupons"
        },
        {
            name: "99Stores",
            url: "/99store-coupons"
        }
    ];

    angular.forEach($scope.stores, function (item) {
        if(parseInt(item.name.charAt(0))) {
            if($scope.storeAlphabet['#'].array.indexOf(item) == -1) {
                $scope.storeAlphabet["#"].enable = true;
                $scope.storeAlphabet["#"].array.push(item);
            }
        } else {
            if($scope.storeAlphabet[item.name.charAt(0)].array.indexOf(item) == -1) {
                $scope.storeAlphabet[item.name.charAt(0)].enable = true;
                $scope.storeAlphabet[item.name.charAt(0)].array.push(item);
            }
        }
    });


    $scope.scrollToPosition = function (id) {
        $('html,body').animate({
            scrollTop: $("#store_by_key_"+id).offset().top
        }, 'slow');
    }
}