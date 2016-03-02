debugger;

define(['angular-app'], function (app) {

    app.controller('homePageCtrl', function ($scope,$window) {

      
        $scope.logOut = function () {

            $window.location.href = "#login";
            var a = "PRIYA";

        }


    });
});