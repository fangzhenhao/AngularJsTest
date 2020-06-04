(function () {
    'use strict';

    angular.module('app').controller('pageOneCtrl', func);

    func.$inject = ['$scope', '$state', '$rootScope', '$stateParams'];

    function func($scope, $state, $rootScope, $stateParams) {
        console.info('这是pageOne页面');
        console.info($stateParams.param1);
    }

})();