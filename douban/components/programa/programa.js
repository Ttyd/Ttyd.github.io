/**
 * Created by My on 2016/10/10.
 */
angular.module('programaModule',[])
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('programa',{
                templateUrl:'./components/programa/programa.html',
                controller:'programaCtrl',
                url:'/programa'
            })
    }])
    //绑定事件service
    .service('bindProgramaEvent',function ($state) {
        this.addClick = function () {
            //点击返回按钮时 跳转到home页面
            $('.return').on('click',function () {
                $state.go('home');
            });
        }
    })
    .controller('programaCtrl',['$scope','$css','bindProgramaEvent','$state',function($scope,$css,bindProgramaEvent,$state){
        $css.add('./components/programa/programa.css');
        //执行绑定事件service
        bindProgramaEvent.addClick();
        //定义toProvideId方法  跳转页面并将programaId传递
        $scope.toProvideId = function (programaId) {
            $state.go('programa_detail', {programaId: programaId});
        }
    }]);