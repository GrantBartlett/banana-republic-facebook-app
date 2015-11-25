'use strict';

// Home controller
angular.module('Core').controller('LanguageController', ['$scope', '$state', '$stateParams', '$http', '$sce', 'languageService',
    function ($scope, $state, $stateParams, $http, $sce, languageService) {

        $scope.toggleLanguage = function () {
            switch ($scope.lngDirection) {
                case 'ltr' :
                    languageService
                        .getArabic()
                        .then(function (data) {
                            $scope.lngDirection = 'rtl';
                            $scope.locales = data;
                        });
                    break;

                case 'ar' :
                    languageService
                        .getEnglish()
                        .then(function (data) {
                            $scope.lngDirection = 'ltr';
                            $scope.locales = data;
                        });
                    break;

                default:
                    languageService
                        .getEnglish()
                        .then(function (data) {
                            $scope.lngDirection = 'ltr';
                            $scope.locales = data;
                        });
                    break;
            }
        }
    }
]);