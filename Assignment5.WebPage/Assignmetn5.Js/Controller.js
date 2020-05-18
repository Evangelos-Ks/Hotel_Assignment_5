

(function () {
    var HotelApp = angular.module("HotelApp", []);

    var url = "../data.json";


    var HotelController = function ($scope, $http) {


        function GetData() {
            $http.get(url)
                .then(function (response) {
                    var hotels = [];
                    $scope.Roomtypes = response.data[0].roomtypes; //roomtypes
                    $scope.Hotels = response.data[1].entries; //Hotels

                    autocomplete(document.getElementById("search"), AutocompleteItems(response.data[1].entries));

                    document.getElementById("submitBtn").addEventListener("click", function () {
                        var text = document.getElementById("search").value;
                        for (var i in response.data[1].entries) {

                            if (text == response.data[1].entries[i].city) {
                                hotels.push(response.data[1].entries[i]);
                            }
                        }
                        console.log(hotels);
                        $scope.Hotels = hotels;
                        $scope.$apply();
                        hotels = [];
                    });

                   

                    console.log($scope.Hotels);
                })

        };

        GetData();//Execute GetData
    };

    HotelApp.controller("HotelController", HotelController);
})();



