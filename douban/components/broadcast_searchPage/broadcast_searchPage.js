angular.module('broadcastSearchPageModule',[])
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('broadcast_searchPage',{
                templateUrl:'./components/broadcast_searchPage/broadcast_searchPage.html',
                controller:'broadcastSearchPageCtrl',
                url:'/broadcast_searchPage'
            })
    }])
    //绑定事件service
    .service('bindBroadcastSearchPageEvent',function ($state) {
        this.addClick = function () {
            //当点击取消按钮时回退上一个页面
            $('.cancel').on('click',function () {
                window.history.back();
            })
        }
    })
    //获取json数据service
    .service('getBroadCastUserData',function ($http) {
        this.user = function () {
            return $http.get('./data/broadcastSearch.json');
        }
    })
    .controller('broadcastSearchPageCtrl',['$scope','$css','bindBroadcastSearchPageEvent','getBroadCastUserData',function($scope,$css,bindBroadcastSearchPageEvent,getBroadCastUserData){
        //向页面添加css样式
        $css.add('./components/broadcast_searchPage/broadcast_searchPage.css');
        //执行绑定事件的service
        bindBroadcastSearchPageEvent.addClick();
        //当获取数据成功时 将获取到的数据传递给页面中的data
        getBroadCastUserData.user().success(function (res) {
            $scope.data = res;
        });
    }]);