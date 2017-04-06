angular.module("categoryModule", ["headerModule", "footerModule"])
	.controller("categoryCtrl", ["$scope", function ($scope) {
		console.log("category controller");
	}]);