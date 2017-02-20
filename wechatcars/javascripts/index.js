/**
 * Created by Administrator on 2016/12/23.
 */

var car=document.querySelector('.car');
var music=document.querySelector('.musiccss');
var all=document.querySelector('.all');
var pg2car=document.querySelector('.pg2car');
/*var fxpan=document.querySelector('.fangxiangpan');*/
var index=1;

    window.onload=function(){
        car.classList.add('active');
        setTimeout(function(){
            movepage(index);
        },3000);
    }
    /*pg2car.onclick=function(){
        pg2car.classList.add('active');
        setTimeout(function(){
            index=2;
            movepage(index);
            pg2car.style.transform='translate(-15px,0px)';
        },3000);
    }*/
    touch.on('.pg2car','touchstart',function(e){
        pg2car.classList.add('active');
        setTimeout(function(){
            index=2;
            movepage(index);
            var a=pg2car.style.transform;
            //console.log(a);
        },2000);
        setTimeout(function(){
            pg2car.classList.remove('active');
        },3000);
           pg2car.style.cssTest='transform:translate(-20px,0px)';

    })

fangxpan();

function fangxpan(){

    touch.on('.fangxiangpan', 'touchstart', function(ev) {
        ev.startRotate();
        ev.preventDefault();
    });
    touch.on('.fangxiangpan', 'rotate', function(ev) {
        var isLeft = true;
        var angle = 0;
        var totalAngle = angle + ev.rotation;
        if (ev.fingerStatus === 'end') {
            angle = angle + ev.rotation;
            if (ev.direction == "left") {
                index--;
            } else if (ev.direction == "right") {
                index++;
            }
            movepage(index);
        }
        this.style.webkitTransform = 'rotate(' + totalAngle + 'deg)';
    });
}
   /* fxpan.addEventListener('touchstart',function(e){
        var oldx= parseInt(e.touches[0].pageX);
        var oldy= parseInt(e.touches[0].pageY);
        /!*console.log(oldx+':'+oldy);*!/
    })
    */
    /*var newx=parseInt(e.touches[0].pageX);
    var newy= parseInt(e.touches[0].pageY);
    fxpan.style.transform='translate(newx,newy)';
    console.log(newx-oldx+':'+newy-oldy);
    })*/

//跳转页面
    function movepage(index){

        $('.all>div').removeClass('active');
        $('.page'+(index+1)).addClass('active');
        $('.fangxiangpan').css({'webkitTransform':'rotate(0deg}','transform':'rotate(0deg)'});

        $(all).animate({"left":"-"+100*index+"%"});
    }

//音乐
    var audio=document.createElement('audio');
    audio.src='wechatcars/music/bg.mp3';
    audio.autoplay=true;
    music.appendChild(audio);
    music.onclick=function(){
        if(audio.paused){
            audio.play();
            music.style.webkitAnimationPlayState='running';
            music.style.animationPlayState='running';
        }
        else{
            audio.pause();
            music.style.webkitAnimationPlayState='paused';
            music.style.animationPlayState='paused';
        }
    }




