/**
 * Created by My on 2016/10/9.
 */
angular.module('myDouban',['ui.router','angularCSS','homeModule','chatModule','homeSearchModule','programaModule','programaDetailModule','broadcastModule','groupModule','groupHomePageModule','groupSearchPageModule','broadcastSentPageModule','broadcastSearchPageModule','mineModule','mineSettingModule','loginModule','myOrderModule','groupMyGroupModule','mediaModule'])
    .config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider
        .otherwise('/');
    });
