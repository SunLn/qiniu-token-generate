'use strict';

/**
 * @ngdoc function
 * @name qiniuTokenGenerateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the qiniuTokenGenerateApp
 */
angular.module('qiniuTokenGenerateApp')
    .controller('MainCtrl', ['$scope', 'utils', function($scope, utils) {
        $scope.AK = '';
        $scope.SK = '';
    }]);
