angular.module('broadcastModule',[])
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('broadcast',{
                templateUrl:'./components/broadcast/broadcast.html',
                controller:'broadcastCtrl',
                url:'/broadcast'
            })
    }])
    //绑定事件
    .service('bindBroadcastEvent',function ($state) {
        this.addClick = function () {
            $('.share>div').on('click',function () {
                $state.go('broadcast_sentPage');
            })
        }
    })
    .controller('broadcastCtrl',['$scope','$css','bindBroadcastEvent',function($scope,$css,bindBroadcastEvent){
        //向页面添加css样式
        $css.add('./components/broadcast/broadcast.css');
        //执行绑定的事件
        bindBroadcastEvent.addClick();
    }]);