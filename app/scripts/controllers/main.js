'use strict';

/**
 * @ngdoc function
 * @name qiniuTokenGenerateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the qiniuTokenGenerateApp
 */
angular.module('qiniuTokenGenerateApp')
    .controller('MainCtrl', function($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.ak = '';
        $scope.sk = '';
    });
