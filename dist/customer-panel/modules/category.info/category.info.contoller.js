angular.module("categoryinfoModule",["storeServiceModule"]).controller("categoryinfoCtrl",["$scope","$stateParams","storeService",function(o,e,r){console.log("categoryinfoCtrl"),o.favorite={favorite:!1},o.store=void 0,o.manageFavorite=function(){o.favorite.favorite=!o.favorite.favorite},r.getStore().then(function(e){console.log(e),o.store=e},function(o){console.log("error",o)})}]);