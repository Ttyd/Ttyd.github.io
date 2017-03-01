window.onscroll = function(){
	
		var top = $(window).scrollTop()
		if(top>0){
			if(!$(".fwtk_nav").hasClass("shadow")){
				$(".fwtk_nav").addClass("shadow");
		
			}			
		
		}else{
			$(".fwtk_nav").removeClass("shadow");
		}
}


