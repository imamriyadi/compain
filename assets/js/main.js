$(function(){
    $(window).scroll(function(){
        var scrollPos = $(this).scrollTop();

        if(scrollPos > 100){
        	$("#nav-scroll").fadeIn();
        }else{
        	$("#nav-scroll").fadeOut();
        }
        
        if(scrollPos > 0){
        	menu = "#menu_home";
        	$(".navbar-default li").removeClass("active");
        	$(menu).addClass("active");
        }
        if(scrollPos >= 580){
        	menu = "#menu_aboutus";
        	$(".navbar-default li").removeClass("active");
        	$(menu).addClass("active");
        }
        if(scrollPos >= 1180){
        	menu = "#menu_blog";
        	$(".navbar-default li").removeClass("active");
        	$(menu).addClass("active");
        }
        if(scrollPos >= 3050){
        	menu = "#menu_contact";
        	$(".navbar-default li").removeClass("active");
        	$(menu).addClass("active");
        }

    });

});