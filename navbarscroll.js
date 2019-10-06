$(function(){
	var navbar=$('.navbar');
	var winH = $(window).height();   

	$(window).scroll(function(){
		if($(window).scrollTop()<=winH){
			navbar.removeClass('navbar-scroll');
			navbar.removeClass('navbar-fixed-top');
		}else{
			navbar.addClass('navbar-scroll');
			navbar.addClass('navbar-fixed-top');
		}
	});
});