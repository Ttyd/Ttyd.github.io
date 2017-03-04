angular.module('loginModule',[])
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('login',{
                templateUrl:'./components/login/login.html',
                controller:'loginCtrl',
                url:'/login'
            })
    }])
    //绑定事件service
    .service('bindLoginEvent',function ($state,$http) {
        this.addClick = function () {
            $('.header').on('click',function () {
                $state.go('mine');
            })
        };
    })
    //请求数据service
    .service('getLoginData',function ($http) {
        this.data = function () {
            return $http.get('./data/login.json');
        }
    })
    .controller('loginCtrl',['$scope','$css','$http','$state','bindLoginEvent','getLoginData',function($scope,$css,$http,$state,bindLoginEvent,getLoginData){
        $css.add('./components/login/login.css');
        bindLoginEvent.addClick();
        //定义验证登录函数
        $scope.validation=function(){
            getLoginData.data().success(function(res){
                //定义flag标识记录是否登录
                var flag = false;
                //循环数据 查找是否有和输入的用户名密码匹配的数据 如果有 则记录用户信息 并跳转
                res.info.forEach(function(param){
                    if(param.userName == $scope.userName && param.pwd == $scope.pwd) {
                        $state.go("mine");
                        flag = true;
                        if (window.sessionStorage) {
                            //需要两个参数，第一个为存储的key，第二个为存储的值
                            window.sessionStorage.setItem("userInfo", JSON.stringify(param));
                        } else {
                            alert("您的浏览器不支持本地存储，请更新到最新版本！！！")
                        }
                    }
                });
                //如果flag仍为flase 代表用户输入信息没有匹配数据 提示登录失败 并清空输入内容
                if(!flag){
                    alert("用户名或密码不正确");
                    $scope.userName = "";
                    $scope.pwd = "";
                }
            })
        }
    }]);