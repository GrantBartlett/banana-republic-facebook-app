'use strict';

// Home controller
angular.module('Home').controller('HomeController', ['$scope', '$state', '$stateParams', '$http',
    function ($scope, $state, $stateParams, $http) {

        // Handle submissions
        $scope.submit = function () {
            $http.post('/form', $scope.user)
                .success(function (data) {
                    if (data === 'OK') {
                        // do succusfull stuff!
                    }
                }).error(function (data) {
                    console.log('ERROR', data);
                })
        };
    }
]);
