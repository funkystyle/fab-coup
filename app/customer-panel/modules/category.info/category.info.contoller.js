ngular
    .module("categoryinfoModule", [
        {
            name: "headerModule",
            files: ['modules/header/header.controller.js']
        },
    
    ])
    // controller
    .controller("categoryinfoCtrl", storeController);

// store controller