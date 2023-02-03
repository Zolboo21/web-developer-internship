$(document).ready(function(){
	$(window).scroll(function()  {
		if($(window).scrollTop() > 184)  {							
				$(".pageimgtitleps").addClass('fixedimgit');
				//$(".sbmenuout").addClass('sbmenuoutfx');
		}
		else if($(window).scrollTop() < 184){ 
			$(".pageimgtitleps").removeClass('fixedimgit');
			//$(".sbmenuout").removeClass('sbmenuoutfx');
		}
		//wtop=parseInt($(window).scrollTop());
	});
	
	/*
	var s = $("#sticker");
	var pos = s.position();	
	var stickermax = $(document).outerHeight() - $("#footer").outerHeight() - s.outerHeight() - 40; //40 value is the total of the top and bottom margin
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		//s.html("Distance from top:" + pos.top + "<br />Scroll position: " + windowpos);
		if (windowpos >= pos.top && windowpos < stickermax) {
			s.attr("style", ""); //kill absolute positioning
			//s.addClass("stick"); //stick it
			s.scrollToFixed(); //stick it
		} else if (windowpos >= stickermax) {
			s.removeClass(); //un-stick
			s.css({position: "absolute", top: stickermax + "px"}); //set sticker right above the footer
			
		} else {
			s.removeClass(); //top of page
		}
	});
	*/
});

