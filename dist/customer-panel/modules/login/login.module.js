angular.module("loginModule",["constantModule"]).controller("loginCtrl",["$scope","$http","URL","mainURL","$state",function(e,o,t,r,n){e.login={},e.show={login:!1,register:!1},e.text={register:"SIGN UP NOW",login:"LOGIN",error:void 0},e.register={user_level:["user"],status:"inactive"},e.loginNow=function(n){e.text.login="Please wait..!",o({url:r+t.login,method:"POST",data:n}).then(function(e){console.log(e.data)},function(o){console.log("error",o),e.show.login=!0,e.text.login="LOG IN",setTimeout(function(){e.show={}},2e3),e.login={},e.text.error=o.data.error})},e.registerNow=function(i){i.city="s",i.age=45,i.gender="male",e.text.register="Please wait..!",console.log(i),o({url:r+t.register,method:"POST",data:[i]}).then(function(o){console.log("asdasdasdass",o),e.show.success="ddd",setTimeout(function(){n.go("main.home")},2e3)},function(o){console.log("error",o),e.text.register="SIGN UP NOW",e.show.register=!0,e.register={},setTimeout(function(){e.show={}},2e3),e.text.error=o.data.error})}}]);