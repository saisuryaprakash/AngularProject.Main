debugger;

define(['angular-app'], function(app){

    app.controller('employeeAddCtrl', function ($scope) {

        debugger;
        $scope.title = "Employee Add Page";

        $scope.empAdd = [];

        $scope.save = function () {

            $scope.empAdd.push({
                empId: $scope.empId,
                empName: $scope.empName,
                empGender: $scope.empGender,
                empDOB: $scope.empDOB,
                empDOJ: $scope.empDOJ,
                empDesignation: $scope.empDesignation,
                empContact: $scope.empContact,
                empAddress: $scope.empAddress

            });

        };


    });

});