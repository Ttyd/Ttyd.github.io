/**
 * Created by My on 2016/10/10.
 */
//设置html的默认字体大小  随着视窗宽度大小改变
var width = document.documentElement.clientWidth || document.body.clientWidth,
    html = document.documentElement;
html.style.fontSize = width/10 + "px" ;
window.onresize = function () {
    width = document.documentElement.clientWidth || document.body.clientWidth;
    html.style.fontSize = width / 10 + "px";
};