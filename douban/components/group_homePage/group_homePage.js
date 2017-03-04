angular.module('groupHomePageModule',[])
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('group_homePage',{
                templateUrl:'./components/group_homePage/group_homePage.html',
                controller:'groupHomePageCtrl',
                url:'/group_homePage/:groupItemId'
            })
    }])
    //绑定事件service
    .service('bindGroupHomePageEvent',function () {
        this.addClick = function () {
            $('.return').on('click',function () {
                window.history.back();
            })
        }
    })
    //获取数据service
    .service('getGroupHomePageData',function ($http) {
        this.data = function () {
            return $http.get('./data/group.json');
        }
    })
    .controller('groupHomePageCtrl',['$scope','$css','bindGroupHomePageEvent','$stateParams','getGroupHomePageData',function($scope,$css,bindGroupHomePageEvent,$stateParams,getGroupHomePageData){
        //向页面添加css样式
        $css.add('./components/group_homePage/group_homePage.css');
        //执行绑定事件service
        bindGroupHomePageEvent.addClick();
        //获取接收传递的id
        var groupItemId = $stateParams.groupItemId;
        //当数据请求成功时 循环遍历请求到的数据 找到接收来的id对应信息赋值给data
        getGroupHomePageData.data().success(function (res) {
            for(var i in res.data){
                if(res.data[i].id == groupItemId){
                    $scope.data = res.data[i];
                }
            }
        });
    }]);