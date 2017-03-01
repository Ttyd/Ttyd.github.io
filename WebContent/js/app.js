$(document).ready(function() {
  var picslide=new picSlide({
        element:'[data-role="background-slide"]'
    })

$(".index_app").click(function(){
	$.fn.fullpage.moveTo(2)
})
$(".index_index").click(function(){
	$.fn.fullpage.moveTo(1)
})
	function enter3() {

		$(".ml").addClass("page3_anim_ml");
		$(".rcb").addClass("page3_anim_rcb");

	}

	function leave3() {
		$(".ml").removeClass("page3_anim_ml");
		$(".rcb").removeClass("page3_anim_rcb");
	}

	function enter2() {
		$(".danmu1").addClass("pag2_ani_danmu1");
		$(".danmu2").addClass("pag2_ani_danmu2");
		$(".gift1").addClass("pag2_ani_gift1");
		$(".gift2").addClass("pag2_ani_gift2");
		$(".message").addClass("pag2_ani_message");
		$(".message1").addClass("pag2_ani_message1");
		$(".message3").addClass("pag2_ani_message3");
		$(".focus").addClass("pag2_ani_focus");

	}

	function leave2() {
		$(".danmu1").removeClass("pag2_ani_danmu1");
		$(".danmu2").removeClass("pag2_ani_danmu2");
		$(".gift1").removeClass("pag2_ani_gift1");
		$(".gift2").removeClass("pag2_ani_gift2");
		$(".message").removeClass("pag2_ani_message");
		$(".message1").removeClass("pag2_ani_message1");
		$(".message3").removeClass("pag2_ani_message3");
		$(".focus").removeClass("pag2_ani_focus");
	}

	function enter4() {
		$(".mobileNav").addClass("page4_ani_mobileNav");

		setTimeout(function() {
			console.log("600")
			
			$(".banner").addClass("page4_ani_banner");
			setTimeout(function() {
			$(".banner").addClass("page4_ani_banner_2 trans2");

		}, 800)
		},600)
		setTimeout(function() {
			console.log("1200")
			
			$(".tese").addClass("page4_ani_tese");
			$(".tese_left").addClass("page4_ani_tese_left");
			$(".tese_right").addClass("page4_ani_tese_right");
		},1200)
		setTimeout(function() {
			
			console.log("1800")
			$(".rmht").addClass("page4_ani_rmht")
			$(".huang").addClass("page4_ani_huang");
			$(".red").addClass("page4_ani_red");
			$(".lv").addClass("page4_ani_lv");
			$(".blue").addClass("page4_ani_blue");
		},1800)

		

	}

	function leave4() {
		$(".mobileNav").removeClass("page4_ani_mobileNav");
		$(".banner").removeClass("page4_ani_banner");
		$(".tese").removeClass("page4_ani_tese");
		$(".huang").removeClass("page4_ani_huang");
		$(".red").removeClass("page4_ani_red");
		$(".lv").removeClass("page4_ani_lv");
		$(".blue").removeClass("page4_ani_blue");
		$(".tese_left").removeClass("page4_ani_tese_left");
		$(".tese_right").removeClass("page4_ani_tese_right");
		$(".rmht").removeClass("page4_ani_rmht");
		setTimeout(function() {
			$(".banner").removeClass("page4_ani_banner_2 trans2");

		}, 1000)

	}

	$("#full").fullpage({
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
		//					 sectionsColor:['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
		navigation: true,

		verticalCentered: false,
		resize: true,
		navigationColor: "#abc",
		afterLoad: function(anchor, index) {
			$("[href='#page1']").hide();
			//					 	console.log("load---"+anchor+"---"+index)
			if(index==1){
				$("#fp-nav").hide();
			}

			switch(index) {
				case 1:
				$.fn.fullpage.setAllowScrolling(false,"down");
					break;
				case 2:
				$.fn.fullpage.setAllowScrolling(true,"down");
				$.fn.fullpage.setAllowScrolling(false,"up");				
				
					enter2();
					break;
				case 3:
				$.fn.fullpage.setAllowScrolling(true,"up");
				
					enter3();
					break;
				case 4:
					enter4();
					break;

			}
		},
		onLeave: function(index, nextindex, direction) {
						if(nextindex==1){
				$("#fp-nav").hide();
			}else{
				$("#fp-nav").show();
				
			}
			switch(index) {
				case 1:
					break;
				case 2:
					leave2();
					break;
				case 3:
					leave3();
					break;
				case 4:
					leave4();
					break;

			}

		}
	});
})