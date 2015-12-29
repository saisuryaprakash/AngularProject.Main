///// <reference path="C:\Users\LAPINFOSYS\Documents\Visual Studio 2013\AngularjsProject\AngularProject.Main\Angular.Presentation.Web\Index.html" />
//define([
//    //Dependencies
//    'angularAMD',
//    'angular-ui-router',
//    'routeTable',

//],function(angularAMD,routes)
//{
//    'use strict';
//    var app = angular.module("main-app", ['ui.router','ui.bootstrap']);
//    debugger;

//    app.config(function ($stateProvider, $urlRouteProvider) {
//        $urlRouteProvider.otherwise("/");

//        $stateProvider
//            .state('home',
//            {
//                url: '/home',
//                views:
//                    {
//                        'header@': routes.authenticated.home.header,
//                        'ribbon@': routes.authenticated.home.ribbon,
//                        'content@': routes.authenticated.home.content
//                    }
//            });

//    });

//    var indexController = function ($scope) {
//        $scope.intializeController = function () {
//            $scope.message = "This is angularapp";
//        };
//    };

//    indexController.$inject = ['$scope'];
//    app.controller("indexController", indexController);
//    return angularAMD.bootstrap(app);
//});


define(['angularAMD', 'angular-ui-router'], function (angularAMD) {
    debugger;
    var app = angular.module("mywebapp", ['ui.router']);
    
    app.config(function ($stateProvider, $urlRouterProvider) {
        debugger;
        $stateProvider

            .state('homePage', angularAMD.route({

                url: '/homePage',
                templateUrl: 'app/core/home/homePage.html',
                controller: 'homePageCtrl',
                controllerUrl: 'app/core/home/homePageCtrl'


            }))

        .state('loginPage', angularAMD.route({
            url: '/login',
            templateUrl: 'app/core/login/loginPage.html',
            controller: 'loginCtrl',
            controllerUrl: 'app/core/login/loginCtrl'


        }))

         .state('homePage.employeeAdd', angularAMD.route({
             url: '/employeeAdd',
             templateUrl: 'app/core/employee/employeeAdd.html',
             controller: 'employeeAddCtrl',
             controllerUrl: 'app/core/employee/employeeAddCtrl'

         }))

         .state('homePage.employeeView', angularAMD.route({
             url: '/employeeView',
             templateUrl: 'app/core/employee/employeeView.html',
             controller: 'employeeViewCtrl',
             controllerUrl: 'app/core/employee/employeeViewCtrl'
         }))

        .state('homePage.mailSend', angularAMD.route({
            url: '/mailSend',
            templateUrl: 'app/core/mail/mailSend.html',
            controller: 'mailSendCtrl',
            controllerUrl: 'app/core/mail/mailSendCtrl'

        }));

        $urlRouterProvider.otherwise("/login");
    });

    debugger;
    return angularAMD.bootstrap(app);

});

