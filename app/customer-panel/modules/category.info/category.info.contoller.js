angular
    .module("categoryinfoModule", [
        {
            name: "headerModule",
            files: ['modules/header/header.controller.js']
        },
    
    ])
    // controller
    .controller("categoryinfoCtrl", categoryInfoController);

// categoryInfoController controller
function categoryInfoController ($scope) {
    console.log("categoryInfoController")
}