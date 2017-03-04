/**
 * Created by My on 2016/10/9.
 */
angular.module('chatModule',[])
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('chat',{
                templateUrl:'./components/chat/chat.html',
                controller:'chatCtrl',
                url:'/chat'
            })
    }])
    //绑定事件service
    .service('bindChatEvent',function ($state) {
        this.addClick = function () {
            //点击返回按钮 回退上一页面
            $('.return').on('click',function () {
                window.history.back();
            })
        }
    })
    .controller('chatCtrl',['$scope','$css','bindChatEvent',function($scope,$css,bindChatEvent){
        //向页面添加css样式
        $css.add('./components/chat/chat.css');
        //执行绑定事件的service
        bindChatEvent.addClick();
    }]);