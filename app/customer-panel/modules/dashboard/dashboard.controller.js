angular.module("dashboardModule", ["headerModule", "APP"])
    .controller("dashboardCtrl", function ($scope, auth) {
        console.log("dashboard controller!");

        // declaring the scope variables
    	$scope.user = {};
    	
    	// getting the current user information
    	auth.me().then(function (data) {
    		console.log(data)
    	}, function (error) {
    		console.log(error.error);
    	});
    });