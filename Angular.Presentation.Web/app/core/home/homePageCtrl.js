debugger;

define(['angular-app'], function (app) {

    app.controller('homePageCtrl', function ($scope,$rootScope,$window) {

      
        $scope.logOut = function () {

            $window.location.href = "#login";
        }


    });
});