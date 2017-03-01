


	function picSlide (options) {
	 	  this.ops={
	 	  	element:'',
	 	  	content:'[data-slide="content"]',
	 	  	index:0,
	 	  	prevIndex:0,
	 	  	_play:null,
	 	  	ratio: 500 / 1080
	 	  }

	 	  $.extend(true, this.ops, options);
	 	  
	 	  this.init();
	}
	picSlide.prototype.init = function(){
		if($(this.ops.element).length==0) return;
		this._handleImg();
		this.resize();
		this.autoPlay();
	};
	picSlide.prototype.resize = function(){
		var _this=this;
		 $(window).on('resize',function  () {
		 	clearTimeout(_this.timer);
		 	clearInterval(_this._play);
		 	_this.timer=setTimeout(function  () {
				_this._handleImg();
				_this.autoPlay();
		 	}, 300)
		 }) 
	};
	picSlide.prototype.autoPlay = function(){
		var _this=this;
		var length=$(_this.ops.element).find(_this.ops.content).children().length;
		_this._play=setInterval(function () {
			_this.ops.prevIndex=_this.ops.index;
		  	_this.ops.index=(++_this.ops.index) % length;
		  	_this.ops.nextIndex=(_this.ops.index+1) % length;
		  	$(_this.ops.element).find(_this.ops.content).children().eq(_this.ops.prevIndex).css('zIndex',4).addClass('is-endactive').animate({opacity: 0}, 2000,function () {
		  		$(this).removeClass('is-active').removeClass('is-endactive');
		  		// $(this).css('opacity',1)
		  	});
		  	
		  	$(_this.ops.element).find(_this.ops.content).children().eq(_this.ops.index).css('zIndex',3).addClass('is-active').animate({opacity: 1}, 3500,function () {
		  	});
		  	$(_this.ops.element).find(_this.ops.content).children().eq(_this.ops.nextIndex).css({
		  		'opacity':1,
		  		zIndex:2
		  	})
		}, 4500)
	};
	picSlide.prototype._handleImg = function(){
		var h=$(window).height();
		var w=$(window).width();

		 $(this.ops.element).find(this.ops.content).children().each(function (index,ele) {
		 	// console.log($(ele))
		 	$(ele).css({
		 		'height':h,
		 		'zIndex':4-index
		 	})
		 });
		 if(w/h < this.ops.ratio){ 
		 	//高度空白
			$(this.ops.element).find(this.ops.content).removeClass('bgwidth').addClass('bgheight')
			//算偏差
			var oImg=$(this.ops.element).find(this.ops.content).children().find('img');
			var oImgWidth=oImg.width();
			// var newImage=new Image();
			// newImage.src=oImg[0].currentSrc;
			// newImage.onload=function () {
			// 	oImg.css({
			// 		position:'relative',
			// 		left:'50%',
			// 		marginLeft:- (this.width / 2),
			// 		top:'auto',
			// 		marginTop:0
			// 	})
			// }
			setTimeout(function(){
				oImg.css({
					position:'relative',
					left:'50%',
					marginLeft:- (oImgWidth / 2),
					top:'auto',
					marginTop:0
				})
			},0)
			
			
		}else{
			//宽度补白
			$(this.ops.element).find(this.ops.content).removeClass('bgheight').addClass('bgwidth')
			//算偏差
			var oImg=$(this.ops.element).find(this.ops.content).children().find('img');
			var oImgHeight=oImg.height();
			// var newImage=new Image();
			// newImage.src=oImg[0].currentSrc;
			// newImage.onload=function () {
			// 	oImg.css({
			// 		position:'relative',
			// 		left:'50%',
			// 		marginLeft:- (this.height / 2),
			// 		top:'auto',
			// 		marginTop:0
			// 	})
			// }
			setTimeout(function () {
				oImg.css({
					position:'relative',
					top:'50%',
					marginTop:- (oImgHeight / 2),
					left:'auto',
					marginLeft:0
				})
			},0)
			
		}
	};


