angular.module('mineSettingModule',[])
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('mine_setting',{
                templateUrl:'./components/mine_setting/mine_setting.html',
                controller:'mineSettingCtrl',
                url:'/mine_setting'
            })
    }])
    .service('bindMineSettingEvent',function ($state){
        this.addClick = function () {
            //如果点击退出登录  则跳转页面并清除缓存
            $('.exit').on('click',function () {
                $state.go('home');
                window.sessionStorage.clear();
            })
        }
    })
    .controller('mineSettingCtrl',['$scope','$css','bindMineSettingEvent',function($scope,$css,bindMineSettingEvent){
        $css.add('./components/mine_setting/mine_setting.css');
        //执行点击事件service
        bindMineSettingEvent.addClick();
        //判断缓存中是否有userInfo 有代表已登录 则退出登录功能显示 否则不显示退出登录功能
        if(sessionStorage.getItem('userInfo')){
            $scope.logstatus = true;
        }else{
            $scope.logstatus = false;
        }
    }]);