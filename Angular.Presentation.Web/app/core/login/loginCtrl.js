debugger;
define(['angular-app'], function (app) {
    app.controller('loginCtrl', function ($scope,$window,$rootScope) {
                
        $scope.test = function () {
        }
        
        $rootScope.empList = [{

            empId: "1",
            empName: "surya",
            empGender:"Male" ,
            empDOB:"05-09-1993" ,
            empDOJ:"15-09-15",
            empDesignation:"Developer" ,
            empContact:"9789052933" ,
            empAddress: "Kanniah Street",
        },

                {
                    empId: "2",
                    empName: "karthi",
                    empGender: "Male",
                    empDOB: "03-04-1991",
                    empDOJ: "15-03-15",
                    empDesignation: "Developer",
                    empContact: "8789032933",
                    empAddress: "Kasi Street"

                },
                {
                    empId: "3",
                    empName: "Praveen",
                    empGender: "Male",
                    empDOB: "02-05-1993",
                    empDOJ: "14-09-15",
                    empDesignation: "Tester",
                    empContact: "5789052933",
                    empAddress: "Manniah Street"

                },
                {
                    empId: "4",
                    empName: "kamal",
                    empGender: "Male",
                    empDOB: "05-09-1993",
                    empDOJ: "15-09-15",
                    empDesignation: "Developer",
                    empContact: "9789052933",
                    empAddress: "Kanniah Street"

                },
                {
                    empId: "5",
                    empName: "vidhya",
                    empGender: "Female",
                    empDOB: "11-10-1993",
                    empDOJ: "10-06-15",
                    empDesignation: "Developer",
                    empContact: "8889052953",
                    empAddress: "ashoka Street"

                },
                    {
                        empId: "6",
                        empName: "Renu",
                        empGender: "Female",
                        empDOB: "12-02-1993",
                        empDOJ: "10-08-15",
                        empDesignation: "Doctor",
                        empContact: "999052933",
                        empAddress: "Garden Street"

                    },
                    {
                        empId: "7",
                        empName: "saranya",
                        empGender: "Female",
                        empDOB: "05-09-1993",
                        empDOJ: "15-09-15",
                        empDesignation: "Developer",
                        empContact: "8789052933",
                        empAddress: "Thambi Street"

                    },


        ];

        

       
                $scope.homepage = function () {
     
                   

                    if ($scope.username == "admin" && $scope.password == "admin") {

                        alert("login success");
                        $rootScope.role = $scope.username;
                        $rootScope.admin = true;
                        $window.location.href = "#homePage";

                    }
                    else if ($scope.username == null && $scope.password == null) {
                       
                        alert("enter username and password");
                    }
                    else {
                 
                        for (i = 0; i <= $rootScope.empList.length; i++) {

                            if ($scope.username == $rootScope.empList[i].empName && $scope.password == $rootScope.empList[i].empGender) {
                               
                                alert($scope.username);
                                $rootScope.role = $scope.username;

                                $window.location.href = "#homePage";
                            }                       
                        }
                     
                    }
                };

    });

});


                





