angular.module("activateEmailModule", ["constantModule"])
    .controller("activateEmailCtrl", function($scope, $http, URL, mainURL, $stateParams, $state) {
        
        console.log($stateParams);
        $scope.message = {
            text: "Please wait..."
        }

        if($stateParams.tokenId && $stateParams.userId) {
            $http({
                url: mainURL + URL.emailActivation,
                data: $stateParams,
                method: "POST"
            }).then(function (success) {
                console.log(success);
                $scope.message.text = "You are Re-directing...";

                setTimeout(function () {
                    $state.go('main.login');
                }, 1200);
            }, function (error) {
                console.log(error);

                $scope.message.message = error.data.error;
                $scope.message.type = 'error';
            });
        };

    });