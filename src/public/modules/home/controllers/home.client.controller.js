'use strict';

// Home controller
angular.module('Home').controller('HomeController', ['$scope', '$state', '$stateParams', '$http', '$sce', 'languageService',
    function ($scope, $state, $stateParams, $http, $sce, languageService) {

        // Init content
        languageService
            .getEnglish()
            .then(
            function (data) {
                $scope.locales = data;
            },
            function (error) {
                console.log(error);
            }
        );

        // Handle submissions
        $scope.submit = function () {
            $http.post('/form', $scope.user)
                .success(function (data, status) {
                    if (status === 200) {
                        console.log('Success', data);
                        $scope.userForm.success = true;
                    }
                }).error(function (data) {
                    if (status != 200) {
                        console.log('Error', data);
                    }
                })
        };

        // Toggle Language
        $scope.toggleLanguage = function () {
            $scope.lngDirection = $scope.language === 'en' ? $scope.lngDirection = 'ltr' : $scope.lngDirection = 'rtl';

            if ($scope.language === 'en') {
                $scope.language = 'ar';
                languageService
                    .getArabic()
                    .then(
                    function (data) {
                        $scope.locales = data;
                    },
                    function (error) {
                        console.log(error);
                    }
                );
            } else {
                $scope.language = 'en';
                $scope.languageDirection = 'ltr';
                languageService
                    .getEnglish()
                    .then(
                    function (data) {
                        $scope.locales = data;
                    },
                    function (error) {
                        console.log(error);
                    }
                );
            }
        };
    }
]);