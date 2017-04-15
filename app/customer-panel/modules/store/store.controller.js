angular
    .module("storeModule", ["storeServiceModule"])
    .controller("storeCtrl", ["$scope", function($scope) {
        $scope.sorting = {
            sorting: "ALL"
        };

        // set sort key for get array from object
        $scope.setSortkey = function(key, val) {
            if (val.array.length) {
                $scope.sorting.sorting = key;
            }
        };
        $scope.categoryAlphabet = {
            "ALL": { enable: false, array: [] },
            "#": { enable: false, array: [] },
            "A": { enable: false, array: [] },
            "B": { enable: false, array: [] },
            "C": { enable: false, array: [] },
            "D": { enable: false, array: [] },
            "E": { enable: false, array: [] },
            "F": { enable: false, array: [] },
            "G": { enable: false, array: [] },
            "H": { enable: false, array: [] },
            "I": { enable: false, array: [] },
            "J": { enable: false, array: [] },
            "K": { enable: false, array: [] },
            "L": { enable: false, array: [] },
            "M": { enable: false, array: [] },
            "N": { enable: false, array: [] },
            "O": { enable: false, array: [] },
            "P": { enable: false, array: [] },
            "Q": { enable: false, array: [] },
            "R": { enable: false, array: [] },
            "S": { enable: false, array: [] },
            "T": { enable: false, array: [] },
            "U": { enable: false, array: [] },
            "V": { enable: false, array: [] },
            "W": { enable: false, array: [] },
            "X": { enable: false, array: [] },
            "Y": { enable: false, array: [] },
            "Z": { enable: false, array: [] }
        };
        $scope.categories = [{
                name: "Flipkart",
                url: "/flipkart-coupons",
                count: 12
            },
            {
                name: "SnapDeal",
                url: "/Snapdeal-coupons",
                count: 12
            },
            {
                name: "Amazon",
                url: "/amazon-coupons",
                count: 13
            },
            {
                name: "99Stores",
                url: "/99store-coupons",
                count: 40
            },
            {
                name: "33Store Name",
                url: "/99store-coupons",
                count: 40
            },
            {
                name: "232 Deals",
                url: "/99store-coupons",
                count: 40
            }
        ];

        $scope.categoryAlphabet['ALL']['array'] = $scope.categories;
        angular.forEach($scope.categories, function(item) {
            if (parseInt(item.name.charAt(0))) {
                if ($scope.categoryAlphabet['#'].array.indexOf(item) == -1) {
                    $scope.categoryAlphabet["#"].enable = true;
                    $scope.categoryAlphabet["#"].array.push(item);
                }
            } else {
                if ($scope.categoryAlphabet[item.name.charAt(0)].array.indexOf(item) == -1) {
                    $scope.categoryAlphabet[item.name.charAt(0)].enable = true;
                    $scope.categoryAlphabet[item.name.charAt(0)].array.push(item);
                }
            }
        });
    }]);