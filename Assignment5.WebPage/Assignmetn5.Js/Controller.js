


(function () {
    var HotelApp = angular.module("HotelApp", []);

    var Hotels;
    var url = "../data.json";


    var HotelController = function ($scope, $http) {


        function GetData() {
            $http.get(url)
                .then(function (response) {

                    $scope.Roomtypes = response.data[0].roomtypes; //roomtypes
                    $scope.Hotels = response.data[1].entries; //Hotels

                    autocomplete(document.getElementById("search"), AutocompleteItems(response.data[1].entries));
                })
                
        };

        GetData();//Execute GetData
    };
   
        HotelApp.controller("HotelController", HotelController);
})();

