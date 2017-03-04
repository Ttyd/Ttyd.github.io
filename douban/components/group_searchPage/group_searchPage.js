/**
 * Created by My on 2016/10/9.
 */
angular.module('groupSearchPageModule',[])
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('group_searchPage',{
                templateUrl:'./components/group_searchPage/group_searchPage.html',
                controller:'groupSearchPageCtrl',
                url:'/group_searchPage'
            })
    }])
    //绑定事件service
    .service('bindGroupSearchPageEvent',function ($state) {
        this.addClick = function () {
            //当点击取消按钮 回退上一页面
            $('.cancel').on('click',function () {
               window.history.back();
            });
        }
    })
    .controller('groupSearchPageCtrl',['$scope','$css','bindGroupSearchPageEvent',function($scope,$css,bindGroupSearchPageEvent){
        //向页面添加css样式
        $css.add('./components/group_searchPage/group_searchPage.css');
        //执行绑定事件service
        bindGroupSearchPageEvent.addClick();
    }]);