'use strict';

// Home controller
angular.module('Core').controller('LanguageController', ['$scope', '$state', '$stateParams', '$http', '$sce', 'languageService',
    function ($scope, $state, $stateParams, $http, $sce, languageService) {

        $scope.toggleLanguage = function () {
            switch ($scope.lngDirection) {
                case 'en' :
                    languageService
                        .getArabic()
                        .then(function (data) {
                            $scope.lngDirection = 'ar';
                            $scope.locales = data;
                        });
                    break;

                case 'ar' :
                    languageService
                        .getEnglish()
                        .then(function (data) {
                            $scope.lngDirection = 'en';
                            $scope.locales = data;
                        });
                    break;

                default:
                    languageService
                        .getEnglish()
                        .then(function (data) {
                            $scope.lngDirection = 'en';
                            $scope.locales = data;
                        });
                    break;
            }
        }
    }
]);