angular.module('myOrderModule',[])
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('myOrder',{
                templateUrl:'./components/myOrder/myOrder.html',
                controller:'myOrderCtrl',
                url:'/myOrder'
            })
    }])
    .controller('myOrderCtrl',['$scope','$css',function($scope,$css){
        $css.add('./components/myOrder/myOrder.css');
    }]);