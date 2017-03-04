angular.module('programaDetailModule',[])
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('programa_detail',{
                templateUrl:'./components/programa_detail/programa_detail.html',
                controller:'programaDetailCtrl',
                url:'/programa_detail/:programaId'
            })
    }])
    //绑定事件service
    .service('bindProgramaDetailEvent',function ($state) {
        this.addClick = function () {
            //点击返回按钮 返回上一个页面
            $('.return').on('click',function () {
                window.history.back();
            })
        }
    })
    //获取数据service
    .service('getProgramaDetailData',function ($http) {
        this.data = function () {
            return $http.get('./data/programaDetail.json');
        }
    })
    .controller('programaDetailCtrl',['$scope','$css','bindProgramaDetailEvent','$stateParams','getProgramaDetailData',function($scope,$css,bindProgramaDetailEvent,$stateParams,getProgramaDetailData){
        $css.add('./components/programa_detail/programa_detail.css');
        bindProgramaDetailEvent.addClick();
        //接收传递过来的数据
        var programaId = $stateParams.programaId;
        //如果数据获取成功 循环遍历数据 获取到传递id对应的数据信息
        getProgramaDetailData.data().success(function (res) {
            for(var i in res.data){
                if(res.data[i].id == programaId){
                    $scope.data = res.data[i];
                }
            }
        });
    }]);