/**
 * Created by My on 2016/10/9.
 */
angular.module('homeSearchModule',[])
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('home_search',{
                templateUrl:'./components/home_search/home_search.html',
                controller:'homeSearchCtrl',
                url:'/home_search'
            })
    }])
    //绑定事件service
    .service('bindHomeSearchEvent',function ($state) {
        this.addClick = function () {
            $('.search_cancel').on('click',function () {
                window.history.back();
            })
        }
    })
    .controller('homeSearchCtrl',['$scope','$css','bindHomeSearchEvent',function($scope,$css,bindHomeSearchEvent){
        $css.add('./components/home_search/home_search.css');
        bindHomeSearchEvent.addClick();

        //调用百度搜索引擎方法
        $scope.toSearch = function () {
            $('.search_text').on('input propertychange',function () {
                console.log("aa");
                var input = $.trim($(".search_text").val());
                $.ajax({
                    url:'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+input+'&json=1&p=3&cb=deal',
                    dataType:"jsonp"
                });
            });
            $('.hot_list li').on('click',function () {
                $(".search_text").val($(this).text());
                $('.hot_list').slideUp();
            })
        };
        //执行百度搜索引擎service
        $scope.toSearch();
    }]);


//deal函数  从百度请求的数据的回调函数
function deal(res) {
    var arr = res.s;
    for(var n=0;n<arr.length && n<10;n++){
        $('.hot_list li').eq(n).text(arr[n]);
    }
    $('.hot_list').slideDown();
}