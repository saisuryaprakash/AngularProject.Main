debugger;

define(['angular-app'], function(app){

    app.controller('employeeAddCtrl', function ($scope) {

        debugger;
        $scope.title = "Employee priya Add Page";
        $scope.show = "karthi page";
        $scope.title = "Employee Pfgbo Page";
        
        $scope.show = "surya page";
        $scope.employeeAdd = [];
        $scope.testdata = "pfgbo";
        $scope.newtes = "pfgbo PRIYA";


        $scope.test = function () {
            var a = "test";
        }
       
        $scope.save = function () {
            $scope.new = "karthi";

            $scope.test = "merge";
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


    });

});