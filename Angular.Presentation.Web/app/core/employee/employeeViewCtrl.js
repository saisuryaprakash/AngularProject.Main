debugger;

define(['angular-app'], function (app) {
    app.controller('employeeViewCtrl', function ($scope,$rootScope) {
        debugger;
        $scope.title = "Employee View Page";

        $scope.editEmployee = [];
        editEmployee = $rootScope.empList;

        $scope.admin = $rootScope.admin;
        //Based on array values and get the data using employeeId
        $scope.edit = function (employeeId) {

            

            $scope.empId = editEmployee[employeeId - 1].empId;
            $scope.empName = editEmployee[employeeId - 1].empName;
            $scope.empGender = editEmployee[employeeId - 1].empGender;
            $scope.empDOB = editEmployee[employeeId - 1].empDOB;
            $scope.empDOJ = editEmployee[employeeId - 1].empDOJ;
            $scope.empDesignation = editEmployee[employeeId - 1].empDesignation;
            $scope.empContact = editEmployee[employeeId - 1].empContact;
            $scope.empAddress = editEmployee[employeeId - 1].empAddress;

        };
        //$scope.edit = function () {
        //    debugger;
           
        //    $scope.empId= $rootScope.empId;
        //    $scope.empName= $rootScope.empName;
        //    $scope.empGender= $rootScope.empGender;
        //    $scope.empDOB= $rootScope.empDOB;
        //    $scope.empDOJ= $rootScope.empDOJ;
        //    $scope.empDesignation= $rootScope.empDesignation;
        //    empContact = $rootScope.empContact;
        //    empAddress = $rootScope.empAddress;

        //    };

        $scope.update = function () {
            debugger;
            

           
            // $scope.empId 
            // $scope.empName 
            //$scope.empGender
            // $scope.empDOB
            //$scope.empDOJ
            //$scope.empDesignation
            //$scope.empContact
            //$scope.empAddress


            $rootScope.empList = [{

            empId : $scope.empId,
            empName : $scope.empName,
            empGender : $scope.empGender,
            empDOB : $scope.empDOB,
            empDOJ : $scope.empDOJ,
            empDesignation : $scope.empDesignation,
            empContact  : $scope.empContact,
            empAddress  : $scope.empAddress,
        }];

        };
        

    });

});