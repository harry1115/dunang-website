$(function() {

	$(".drawer").height($(window).height()-250);
	$(".drawer .drawer_li a").click(function(){
		$(".drawer .active .drawer_con").slideUp();
		$(".drawer .drawer_li").removeClass("active");
		if($(this).next(".drawer_con").is(":hidden")){
			$(this).parent().addClass("active").find(".drawer_con").slideDown();
		}

	})

});
window.onload=function(){
	$(".loading").fadeOut(function(){
		$(".main").fadeIn();
	});
	var $el, leftPos, newWidth;
	var $magicLine = $("#magic-line");
	$magicLine.width($(".nav .active").width()).css("left", $(".nav .active").position().left).data("origLeft", $magicLine.position().left).data("origWidth", $(".nav .active").width());

	$(".nav a").hover(function() {
		$el = $(this);
		leftPos = $el.position().left;
		newWidth = $el.width();
		$magicLine.stop().animate({
			left: leftPos,
			width: newWidth
		});
	}, function() {
		$magicLine.stop().animate({
			left: $magicLine.data("origLeft"),
			width: $magicLine.data("origWidth")
		});
	});

	$(window).scroll(function() {
		$magicLine.width($(".nav .active").width()).css("left", $(".active").position().left);
	});
}