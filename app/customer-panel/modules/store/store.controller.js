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
    console.log("store controller");
}