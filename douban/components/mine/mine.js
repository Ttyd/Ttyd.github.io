angular.module('mineModule',[])
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('mine',{
                templateUrl:'./components/mine/mine.html',
                controller:'mineCtrl',
                url:'/mine'
            })
    }])
    .controller('mineCtrl',['$scope','$css','$state',function($scope,$css,$state){
        $css.add('./components/mine/mine.css');
        //设置login标识记录登录状态
        $scope.login = false;
        //如果缓存中存在用户信息 则登录
        var userInfo = window.sessionStorage.getItem("userInfo");
        if(userInfo){
            $scope.login = true;
            $scope.userName = JSON.parse(userInfo).userName;
        }
    }]);