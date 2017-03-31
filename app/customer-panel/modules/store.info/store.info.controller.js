ngular
    .module("storeinfoModule", [
        {
            name: "headerModule",
            files: ['modules/header/header.controller.js']
        },
        {
            name: "storeServiceModule",
            files: ['modules/store/store.info.service.js']
        }
    ])
    // controller
    .controller("storeinfoCtrl", storeController);

// store controller