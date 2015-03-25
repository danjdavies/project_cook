var DD = {}

DD.SmoothScroll = function()
{
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 200
        }, 2000);
        return false;
      }
    }
  })
}

DD.SideMenuNavigation = function()
{
	var nav		  = $('#nav2'),
		menuIcon  = $('.menu-icon'),
		closeBtn  = $('.close');

	menuIcon.click(function(e){
		e.preventDefault();
		nav.toggleClass('open');
		closeBtn.show();
	})

	closeBtn.click(function(){
		nav.removeClass('open');
		closeBtn.hide();
	})
}

DD.StickyNav = function(){

	function sticky_relocate() {
	    var window_top = $(window).scrollTop();
	    var div_top = $('#sticky-anchor').offset().top;
	    if (window_top > div_top) {
	        $('#nav2').addClass('stick');
	    } else {
	        $('#nav2').removeClass('stick');
	    }
	}

	$(function () {
	    $(window).scroll(sticky_relocate);
	    sticky_relocate();
	});
}

DD.SmoothScroll();
DD.SideMenuNavigation();
DD.StickyNav();




