'use strict';

// Home controller
angular.module('Home').controller('HomeController', ['$scope', '$state', '$stateParams', '$http',
    function ($scope, $state, $stateParams, $http) {

        // Handle submissions
        $scope.submit = function () {
            $http({
                method: 'post',
                url: '/form'
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                console.log(response);
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log(response);
            });
        };
    }
]);