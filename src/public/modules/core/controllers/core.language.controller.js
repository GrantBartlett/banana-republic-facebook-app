'use strict';

// Home controller
angular.module('Core').controller('LanguageController', ['$scope', '$state', '$stateParams', '$http', '$sce', 'languageService',
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

        // Language selector
        $scope.toggleLanguage = function () {
            $scope.lngDirection = $scope.language === 'en' ? $scope.lngDirection = 'ltr' : $scope.lngDirection = 'rtl';

            if ($scope.language === 'en') {
                $scope.language = 'ar';
                languageService
                    .getArabic()
                    .then(
                    function (data) {
                        $scope.locales = data;
                    }
                );
            } else {
                $scope.language = 'en';
                languageService
                    .getEnglish()
                    .then(
                    function (data) {
                        $scope.locales = data;
                    }
                );
            }
        };
    }
]);