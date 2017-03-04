angular.module('mediaModule',[])
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/media');
        $stateProvider
            //配置media路由
            .state('media',{
                templateUrl:'./components/media/media.html',
                controller:'mediaCtrl',
                url:'/media'
            })
            //配置media下movie的路由
            .state('media.movie',{
                templateUrl:'./components/mediaMovie/media.movie.html',
                controller:'mediaMovieCtrl',
                url:'/movie'
            })
            //配置media下read的路由
            .state('media.read',{
                templateUrl:'./components/mediaRead/media.read.html',
                controller:'mediaReadCtrl',
                url:'/read'
            })
            //配置media下tv的路由
            .state('media.tv',{
                templateUrl:'./components/mediaTv/media.tv.html',
                controller:'mediaTvCtrl',
                url:'/tv'
            })
            //配置media下activity的路由
            .state('media.activity',{
                templateUrl:'./components/mediaActivity/media.activity.html',
                controller:'mediaActivityCtrl',
                url:'/activity'
            })
            //配置media下music的路由
            .state('media.music',{
                templateUrl:'./components/mediaMusic/media.music.html',
                controller:'mediaMusicCtrl',
                url:'/music'
            })
    }])
    //media的绑定事件service
    .service('mediaEvent',function () {
        this.addClick = function () {
            //设置顶部分路由菜单的点击事件
            $('.navi>li').on('click',function () {
                $(this).addClass('naviBorder').siblings().removeClass('naviBorder');
                //将当前点击的菜单页的index存入sessionStorage中
                sessionStorage.setItem('curMediaIndex',$(this).index());
            })
        }
    })
    //获取数据service
    .service('getMediaData',function ($http) {
        this.movieData = function () {
            return $http.get('./data/movies.json');
        };
        this.readData = function () {
            return $http.get('./data/bookmm.json');
        };
        this.tvData = function () {
            return $http.get('./data/Television.json');
        };
        this.activityData = function () {
            return $http.get('./data/activity.json');
        };
        this.musicData = function () {
            return $http.get('./data/music.json');
        };
    })
    //media中左右滑动模块引入的slider插件
    .service('mediaSlider',function () {
        this.slider = function () {
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                slidesPerView: 'auto',
                paginationClickable: true,
                slidesOffsetAfter:-10
            });
        }
    })
    .controller('mediaCtrl',['$scope','$css','mediaEvent','$state',function($scope,$css,mediaEvent,$state){
        $css.add('./components/media/media.css');
        mediaEvent.addClick();
        //从sessionStorage中读取存的索引 防止刷新或点击其他页面返回时菜单和页面对应不上的情况
        if(sessionStorage.getItem('curMediaIndex')){
            $('.navi>li').eq(sessionStorage.getItem('curMediaIndex')).addClass('naviBorder').siblings().removeClass('naviBorder');
            switch (sessionStorage.getItem('curMediaIndex')){
                case "0":
                    $state.go('media.movie');
                    break;
                case "1":
                    $state.go('media.read');
                    break;
                case "2":
                    $state.go('media.tv');
                    break;
                case "3":
                    $state.go('media.activity');
                    break;
                case "4":
                    $state.go('media.music');
                    break;
            }
        }
    }])
    //media下模块 mediaMovie页面的控制器
    .controller('mediaMovieCtrl',['$scope','$css','getMediaData','mediaSlider','$timeout',function($scope,$css,getMediaData,mediaSlider,$timeout){
        $css.add('./components/mediaMovie/mediaMovie.css');
        getMediaData.movieData().success(function (res) {
            $scope.data = res;
        });
        $timeout(function () {
            mediaSlider.slider();
        },0);
    }])
    .controller('mediaReadCtrl',['$scope','$css','getMediaData','mediaSlider','$timeout',function($scope,$css,getMediaData,mediaSlider,$timeout){
        $css.add('./components/mediaRead/mediaRead.css');
        getMediaData.readData().success(function (res) {
            $scope.data = res;
        });
        $timeout(function () {
            mediaSlider.slider();
        },0);
    }])
    .controller('mediaTvCtrl',['$scope','$css','getMediaData','mediaSlider','$timeout',function($scope,$css,getMediaData,mediaSlider,$timeout){
        $css.add('./components/mediaTv/mediaTv.css');
        getMediaData.tvData().success(function (res) {
            $scope.data = res;
        });
        $timeout(function () {
            mediaSlider.slider();
        },0);
    }])
    .controller('mediaActivityCtrl',['$scope','$css',function($scope,$css){
        $css.add('./components/mediaActivity/mediaActivity.css');

    }])
    .controller('mediaMusicCtrl',['$scope','$css','getMediaData','mediaSlider','$timeout',function($scope,$css,getMediaData,mediaSlider,$timeout){
        $css.add('./components/mediaMusic/mediaMusic.css');
        getMediaData.musicData().success(function (res) {
            $scope.data = res;
        });
        $timeout(function () {
            mediaSlider.slider();
        },0);
    }]);