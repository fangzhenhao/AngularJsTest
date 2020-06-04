(function () {
    'use strict';

    angular.module('app').controller('homePageCtrl', func);

    func.$inject = ['$scope', '$state', '$rootScope', '$stateParams'];

    function func($scope, $state, $rootScope, $stateParams) {
        console.info('这是honePage页面');
        $rootScope.goPageOne = function () {
            $state.go('pageOne',{param1: '这是从homePage带过来的参数'});
        }
    }

})();