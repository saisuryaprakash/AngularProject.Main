debugger;

define(['angular-app'], function(app){

    app.controller('employeeAddCtrl', function ($scope) {

        debugger;
        $scope.title = "Employee surya Add Page";
        $scope.show = "karthi page";
        $scope.title = "Employee Pfgbo Page";
        
        $scope.employeeAdd = [];
        $scope.testdata = "pfgbo";
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

        console.log($scope.employeeAdd);
    });

});