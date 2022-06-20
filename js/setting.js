
var $win = $(window);


$win.on('load', function(){
	$(".loader-wrap").fadeOut(400);
});

$(function(){
 //control display of goTop button and motion
    $(".gotop").click(function(){
        jQuery("html,body").animate({
            scrollTop:0
        },400);
    });
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 150){
            $('.gotop').fadeIn("fast");
        } else {
            $('.gotop').stop().fadeOut("fast");
        }
    });


	$('.carousel.carousel-slider').carousel({
		fullWidth: true,
		indicators: true
	});
	$('.dropdown-trigger').dropdown({
		constrainWidth: false,
		// hover: true,
		coverTrigger: false,

	});

	$('.sidenav').sidenav();
	$('.collapsible').collapsible();

	// var instance = M.Sidenav.getInstance(elem);
	$('.sidenav li a').on('click', function(event) {
		//event.preventDefault();
		$('.sidenav').sidenav('close');
	});



    if(window.matchMedia("(max-width: 992px)").matches){
 
		$('.scrollspy').scrollSpy({
			scrollOffset: 50
		});
    } else{

		$('.scrollspy').scrollSpy({
			scrollOffset: 100
		}); 
    }


});


