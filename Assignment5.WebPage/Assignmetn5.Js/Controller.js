
(function () {
    var HotelApp = angular.module("HotelApp", []);

    var url = "../data.json";


    var HotelController = function ($scope, $http) {


        function GetData() {
            $http.get(url)
                .then(function (response) {

                    $scope.Roomtypes = response.data[0].roomtypes; //roomtypes
                    $scope.Hotels = response.data[1].entries; //entities
                })
        };

        GetData();//Execute GetData
    };

        HotelApp.controller("HotelController", HotelController);
})();

//app.controller('myCtrl', function ($scope, $http) {
//    $http.get("welcome.htm")
//        .then(function (response) {
//            $scope.content = response.data;
//            $scope.statuscode = response.status;
//            $scope.statustext = response.statusText;
//        });
//});
//function ($scope, $http) {
//    $http.get("welcome.htm")
//        .then(function (response) {
//            $scope.content = response.data;
//            $scope.statuscode = response.status;
//            $scope.statustext = response.statusText;
//        });
//});

