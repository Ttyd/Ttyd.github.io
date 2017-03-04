/**
 * Created by My on 2016/10/9.
 */
angular.module('homeModule',[])
    .config(['$stateProvider', '$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        //路由配置home路径
        $stateProvider
            .state('home',{
                templateUrl:'./components/home/home.html',
                controller:'homeCtrl',
                url:'/'
            })
    }])
    //home页面绑定事件
    .service('bindHomeEvent',function ($state) {
        this.addClick = function () {
            $('.home_message').on('click',function () {
                $state.go('chat');
            });
            $('.search_text').on('click',function () {
                $state.go('home_search');
            });
            $('.programa_menu').on('click',function () {
                $state.go('programa');
            })
        }
    })
    //home页面加载数据
    .service('getHomeData',function ($http) {
        this.data = function () {
            return $http.get('./data/home.json');
        }
    })
    .controller('homeCtrl',['$scope','$css','bindHomeEvent','getHomeData','$timeout',function($scope,$css,bindHomeEvent,getHomeData,$timeout){
        $css.add('./components/home/home.css');
        //绑定事件的service
        bindHomeEvent.addClick();
        //获取数据
        getHomeData.data().success(function (res) {
            //判断 循环数据 如果more_pic_urls属性值为空 则为第一种样式 不为空为第二种样式
            var module_kind1 = [];
            var module_kind2 = [];
            for(var i in res.recommend_feeds){
                if(res.recommend_feeds[i].more_pic_urls.length == 0){
                    module_kind1.push(res.recommend_feeds[i]);
                    $scope.module_kind1 = module_kind1;
                }else{
                    module_kind2.push(res.recommend_feeds[i]);
                    $scope.module_kind2 = module_kind2;
                }
            }
        });
        //home页面轮播图
        $scope.slider = function () {
            var mySwiper = new Swiper('.slider', {
                autoplay: 2000,//可选选项，自动滑动
                //循环滚动
                loop:true,
                //点击按钮
                pagination:".swiper-pagination",
                //可以点击切换图片
                paginationClickable:true,

                onAutoplayStop:function (swiper) {
                    swiper.startAutoplay();
                }
            })
        };
        //执行轮播图service
        $scope.slider();
        //home页面  当滑动顶部距离超过204px时  更换顶部header样式
        $scope.getDis = function () {
            var top = $('.home_programa').offset().top;
            $(window).scroll(function () {
                if($(window).scrollTop() > top){
                    $('.home_programa').css({'position':'fixed','top':0,'left':0,'right':0,'zIndex':100});
                }else{
                    $('.home_programa').css({'position':'relative','top':'','left':'','right':'','zIndex':100});
                }
            });
        };
        //执行更换顶部header  默认执行一次点击home页
        $timeout(function () {
            $scope.getDis();
            $('.bottom a:eq(0)').trigger("click");
        },0);
        //获取时间  根据时间显示不同的提示信息
        $scope.getTime = function () {
            var date = new Date();
            if(date.getHours()>=0 && date.getHours()< 11){
                $('.home_programa').find('img').attr('src','./img/home_greeting_forenoon.png');
            }else if(date.getHours()>=11 && date.getHours()<14){
                $('.home_programa').find('img').attr('src','./img/home_greeting_noon.png');
            }else if(date.getHours()>=14 && date.getHours()<18){
                $('.home_programa').find('img').attr('src','./img/home_greeting_afternoon.png');
            }else if(date.getHours()>=18 && date.getHours()<=23){
                $('.home_programa').find('img').attr('src','./img/home_greeting_night.png');
            }
        };
        //执行根据时间更换提示的service
        $scope.getTime();
    }]);

