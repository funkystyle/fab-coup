angular.module("homeModule",["headerModule","storeServiceModule","footerModule"]).controller("homeCtrl",["$scope","$ocLazyLoad","storeService",function(e,o,r){$(".carousel").carousel({interval:4e3,pause:!0}),e.stores=[],r.get().then(function(o){e.stores=o},function(e){console.log(e.data)})}]);