debugger;

define(['angular-app'], function(app){

    app.controller('employeeAddCtrl', function ($scope) {

        debugger;
        $scope.title = "Employee surya Add Page";
        $scope.show = "karthi page";
       
        
        $scope.employeeAdd = [];
       
        $scope.save = function () {
            $scope.new = "karthi";
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