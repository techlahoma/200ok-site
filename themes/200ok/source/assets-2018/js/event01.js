// Adjustment for the Map embed (diabling pointer events when scrolling)
//*******************

$(document).ready(function() {
    $('#location').click(function () {
        $('iframe').css("pointer-events", "auto");
    });
    
    $( "#location" ).mouseleave(function() {
      $('iframe').css("pointer-events", "none"); 
    });
	

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
});



// Speaker and Speaker Filter Styles 
//*******************
// Speaker Masonry
$(window).load(function(){
if ( $('#speaker-masonry').length > 0 ) {
		// Call to Masonry plugin
		var speakermasonry = $('#speaker-masonry').isotope({
			itemSelector: '.single-item',
			layoutMode: 'fitRows',
			transitionDuration: '.6s',
			hiddenStyle: {
				opacity: 0,
				transform: "scale(.85)"
			},
			visibleStyle: {
				opacity: 1,
				transform: "scale(1)"
			}
		});

// Filtering the speaker items
$('#speaker-masonry-sort a').on( 'click', function(e) {
			e.preventDefault();
			var $this = $(this);
			if ( $this.parent('li').hasClass('active') ) {
				return false;
			} else {
				$this.parent('li').addClass('active').siblings('li').removeClass('active');
			}
			var filterValue = $this.data('target');
			speakermasonry.isotope({ filter: filterValue });
			return $this;
		});
	}
});

// Owl Carousel for Speakers
$(document).ready(function() {
	"use strict";
      $("#owl-speakers").owlCarousel({
      slideSpeed : 500,
      pagination: true,
      singleItem : true,
	  stopOnHover:true,
	  autoPlay: 8000,
	  navigation : true,
        navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
      });
	    });