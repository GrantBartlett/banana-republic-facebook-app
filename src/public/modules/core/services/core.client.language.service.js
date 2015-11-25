'use strict';

angular.module('Core').factory('languageService', ['$http', '$q',
    function ($http, $q) {
        return {
            getEnglish: function () {
                return $http.get('assets/locales/en.json')
                    .then(function (response) {
                        if (typeof response.data === 'object')
                            return response.data;
                        else
                            return $q.reject(response.data);
                    }, function (response) {
                        return $q.reject(response.data);
                    });
            },

            getArabic: function () {
                return $http.get('assets/locales/ar.json')
                    .then(function (response) {
                        if (typeof response.data === 'object')
                            return response.data;
                        else
                            return $q.reject(response.data);
                    }, function (response) {
                        return $q.reject(response.data);
                    });
            }
        };
    }
]);