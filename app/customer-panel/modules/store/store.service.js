angular.module("storeServiceModule", ["constantModule"]).factory('storeService', ['$http', '$q', 'URL', function ($http, $q, URL) {
    return {
        get: function () {
            var def = $q.defer();
            $http({
                url: URL.store,
                method: "GET"
            }).then(function (data) {
                def.resolve(data.data);
            }, function (error) {
                def.reject(error.data);
            });
            return def.promise;
        },
        getStore: function () {
            var def = $q.defer();
            $http({
                url: URL.store,
                method: "GET"
            }).then(function (data) {
                def.resolve(data.data[0]);
            }, function (error) {
                def.reject(error.data);
            });
            return def.promise;
        }
    }
}])
