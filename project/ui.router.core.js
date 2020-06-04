(function () {
    'use strict';

    window.sysStates = (function () {
        let states = [];

        function set(array) {
            states = states.concat(array);
        }

        function getAllRouters() {
            return angular.copy(states);
        }

        return {
            set: set,
            getAllRouters: getAllRouters
        }
    })();
})();

(function (States) {
    let appStates = [
        {
            breadName: '主页',
            name: 'home',
            url: '^/home',
            templateUrl: 'project/home/homePage.html',
            controller: 'homePageCtrl',
            params: {param1: null, param2: null},
            resolve: {
                loadDependencies: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'project/home/homePageCtrl.js',
                        'project/home/homePageService.js'
                    ]);
                }
            }
        },
    ];
    States.set(appStates);
})(sysStates);

(function (States) {
    let appStates = [
        {
            breadName: '页面1',
            name: 'pageOne',
            url: '^/pageOne',
            templateUrl: 'project/pageOne/pageOne.html',
            controller: 'pageOneCtrl',
            params: {param1: null, param2: null},
            resolve: {
                loadDependencies: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'project/pageOne/pageOneCtrl.js',
                        'project/pageOne/pageOneService.js'
                    ]);
                }
            }
        },
    ];
    States.set(appStates);
})(sysStates);