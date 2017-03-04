angular.module('broadcastSentPageModule',[])
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('broadcast_sentPage',{
                templateUrl:'./components/broadcast_sentPage/broadcast_sentPage.html',
                controller:'broadcastSentPageCtrl',
                url:'/broadcast_sentPage'
            })
    }])
    //绑定事件service
    .service('bindBroadcastSentPageEvent',function ($state) {
        this.addClick = function () {
            $('.cancel').on('click',function () {
                window.history.back();
            })
        }
    })
    .controller('broadcastSentPageCtrl',['$scope','$css','bindBroadcastSentPageEvent',function($scope,$css,bindBroadcastSentPageEvent){
        //向页面添加css样式
        $css.add('./components/broadcast_sentPage/broadcast_sentPage.css');
        //执行绑定事件的service
        bindBroadcastSentPageEvent.addClick();
    }]);