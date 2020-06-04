(function () {
    'use strict';

    angular.module('app', ['ui.router', 'oc.lazyLoad']);

    angular.module('app')
        .run(run)
        .config(config);

    run.$inject = ['$state', '$rootScope'];

    function run($state, $rootScope) {
        $rootScope.$state = $state;
    }

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        let states = sysStates.getAllRouters();
        angular.forEach(states, function (state) {
            $stateProvider.state(state);
        })
    }
})();

