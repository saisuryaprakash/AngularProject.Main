debugger;

define(['angular-app'], function (app) {

    app.controller('employeeAddCtrl', function ($scope) {

        debugger;
        $scope.title = "Employee Add Page";
        $scope.employeeAdd = [];
        $scope.save = function () {
            $scope.employeeAdd.push({
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
        $scope.test = function () {
            $scope.test = "Employee Add Page";
        }

    });

});