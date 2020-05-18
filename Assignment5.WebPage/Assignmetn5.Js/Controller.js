

(function () {
    var HotelApp = angular.module("HotelApp", []);

    var url = "../data.json";


    var HotelController = function ($scope, $http) {


        function GetData() {
            $http.get(url)
                .then(function (response) {

                    //MaxPrice
                    function MaxPrice(Hotels) {
                        var price = 0;

                        for (var i in Hotels) {
                            if (Hotels[i].price > price) {
                                price = Hotels[i].price;
                            }
                        }
                        return price;
                    }


                    $scope.Roomtypes = response.data[0].roomtypes; //roomtypes
                    $scope.Hotels = response.data[1].entries; //Hotels
                    $scope.MaxPrice = MaxPrice(response.data[1].entries);//max price
                    $scope.MaxPrice2 = MaxPrice(response.data[1].entries);//max price
                    $scope.getRepeater = function (num) {
                        return new Array(num);
                    };

                    //autocomplete
                    autocomplete(document.getElementById("search"), AutocompleteItems(response.data[1].entries));


                    //Submit btn
                    document.getElementById("submitBtn").addEventListener("click", function () {
                        var text = document.getElementById("search").value;
                        var hotels = [];

                        for (var i in response.data[1].entries) {

                            if (text == response.data[1].entries[i].city) {
                                hotels.push(response.data[1].entries[i]);
                            }
                        }
                        if (hotels.length >= 1) {
                            console.log(hotels);
                            $scope.Hotels = hotels;
                            $scope.MaxPrice = MaxPrice(hotels);
                            $scope.MaxPrice2 = MaxPrice(hotels);
                            $scope.$apply();
                            hotels = [];
                        }
                        else {
                            $scope.Hotels = response.data[1].entries;
                            $scope.MaxPrice = MaxPrice(response.data[1].entries);
                            $scope.MaxPrice2 = MaxPrice(response.data[1].entries);
                            $scope.$apply();
                            hotels = [];
                        }

                    });

                    $scope.filterPrice = function (obj) {
                        return obj.price > 0 && obj.price <= $scope.MaxPrice;
                    };

                    $scope.filterRating = function (obj) {
                        return obj.rating > 0 && obj.rating >= 5;
                    }

                    $scope.filterRaitingsNo = function (obj) {
                        if (obj.ratings.text == "") {
                            return "";
                        }
                    }


                });

        };

        GetData();//Execute GetData
    };

    HotelApp.controller("HotelController", HotelController);
})();




