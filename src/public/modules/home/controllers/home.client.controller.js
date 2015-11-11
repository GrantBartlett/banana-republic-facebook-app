'use strict';

// Home controller
angular.module('Home').controller('HomeController', ['$scope', '$state', '$stateParams', '$http',
    function ($scope, $state, $stateParams, $http) {

        // Handle submissions
        $scope.submit = function () {
            $http.post('/form', $scope.user)
                .success(function (data, status) {
                    if (status === 200) {
                        console.log('Success', data);
                        $scope.userForm.show = true;

                        setTimeout(function(){
                            $scope.userForm.showText = true;
                        }, 500);
                    }
                }).error(function (data) {
                    if (status != 200) {
                        console.log('Error', data);
                    }
                })
        };

    }
]);