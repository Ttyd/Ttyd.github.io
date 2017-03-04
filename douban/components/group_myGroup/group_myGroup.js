angular.module('groupMyGroupModule',[])
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('group_myGroup',{
                templateUrl:'./components/group_myGroup/group_myGroup.html',
                controller:'groupMyGroupCtrl',
                url:'/group_myGroup/:groupInfo'
            })
    }])
    .service('getGroupMyGroupData',function ($http) {
        this.data = function () {
            return $http.get('./data/group.json');
        }
    })
    .controller('groupMyGroupCtrl',['$scope','$css','$stateParams','getGroupMyGroupData','$state',function($scope,$css,$stateParams,getGroupMyGroupData,$state){
        $css.add('./components/group_myGroup/group_myGroup.css');
        var groupInfo = $stateParams.groupInfo.split(',');
        var obj = [];
        getGroupMyGroupData.data().success(function (res) {
            for(var j in res.data){
                for(var i in groupInfo){
                    if(groupInfo[i]==res.data[j].id){
                        obj.push(res.data[j]);
                    }
                }
            }
            $scope.groupInfo = obj;
        });
        //toProvideId函数 将对应小组的groupItemId传递给group_homePage页面
        $scope.toProvideId = function (groupItemId) {
            $state.go('group_homePage', {groupItemId: groupItemId});
        };
    }]);