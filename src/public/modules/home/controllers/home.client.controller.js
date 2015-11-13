'use strict';

// Home controller
angular.module('Home').controller('HomeController', ['$scope', '$state', '$stateParams', '$http',
    function ($scope, $state, $stateParams, $http) {

        // Handle submissions
        $scope.submit = function () {
            $http.post('/form', $scope.user)
                .success(function (data, status) {
                    if (status === 200) {
                        $scope.userForm.success = true;
                    }
                }).error(function (data) {
                    if (status != 200) {
                        $scope.userForm.success = false;
                    }
                })
        };
    }
]);