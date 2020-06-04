(function () {
    'use strict';

    angular.module('app').controller('indexCtrl', func);

    func.$inject = ['$scope', '$state', '$rootScope'];

    function func($scope, $state, $rootScope) {
        console.info('这是index页面');
        $rootScope.goHomePage = function () {
            $state.go('home');
        }
    }
})();