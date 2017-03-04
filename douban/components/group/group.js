angular.module('groupModule',[])
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('group',{
                templateUrl:'./components/group/group.html',
                controller:'groupCtrl',
                url:'/group'
            })
    }])
    //绑定事件service
    .service('bindGroupEvent',function ($state) {
        this.addClick = function () {
            //点击选好了小组按钮  跳转到go_myGroup页面
            $('.go_myGroup').on('click',function () {
                var groupInfo = [];
                for(var i=0;i<$('.checked').length;i++){
                    if($('.checked')[i].getAttribute('isChecked')=="true"){
                        groupInfo.push($('.checked')[i].getAttribute('groupId'));
                    }
                }
                $state.go('group_myGroup',{'groupInfo':groupInfo});
            });
        }
    })
    //获取json数据service
    .service('getGroupData',function ($http) {
        this.data = function () {
            return $http.get('./data/group.json');
        }
    })
    .controller('groupCtrl',['$scope','$state','$css','bindGroupEvent','getGroupData',function($scope,$state,$css,bindGroupEvent,getGroupData){
        //向页面添加css样式
        $css.add('./components/group/group.css');
        //执行绑定事件service
        bindGroupEvent.addClick($scope);
        //获取数据成功时 将获取到的数据传给data
        getGroupData.data().success(function (res) {
            $scope.data = res;
        });
        //toProvideId函数 将对应小组的groupItemId传递给group_homePage页面
        $scope.toProvideId = function (groupItemId) {
            $state.go('group_homePage', {groupItemId: groupItemId});
        };


        //检查小组页面 小组是否被选中的service
        $scope.checkGroup = function ($event) {
            var parent = $($event.target).parent();
            if(parent.attr("isChecked")=="false"){
                parent.find('img').attr("src","img/group_checked.png");
                parent.attr("isChecked","true");
            }else if(parent.attr("isChecked")=="true"){
                parent.find('img').attr("src","img/group_check.png");
                parent.attr("isChecked","false");
            }
            //设置标识记录当前是否有小组被选中
            var flag = false;
            for(var i=0; i<$('.checked').length;i++){
                if($('.checked')[i].getAttribute('ischecked') == "true"){
                    flag = true;
                    break;
                }
            }
            //如果有小组被选中 则将选好了按钮背景颜色更换
            if(flag){
               $('.go_myGroup').css('backgroundColor','#42bd56');
            }else{
                $('.go_myGroup').css('backgroundColor','#dfdfdf');
            }
        }
    }]);