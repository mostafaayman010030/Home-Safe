// Fixed Scroll 
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 175) {
        $('.fixed').slideDown();
    } else {
        $('.fixed').fadeOut();
    }
    
});

// Testimonials
(function autoSlider() {
    $('.slider .active').each(function () {

        if (!$(this).is(':last-child')) {

            $(this).delay(3000).fadeOut(1000, function () {

                $(this).removeClass('active').next().addClass('active').fadeIn();

                autoSlider();

            });
        } else {

            $(this).delay(3000).fadeOut(1000, function () {

                $(this).removeClass('active');

                $('.slider div').eq(0).addClass('active').fadeIn();

                autoSlider();

            });
        }
    });
}());




//////////////////
jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});


var _0x6868=["\x63\x6C\x69\x65\x6E\x74\x58","\x6F\x66\x66\x73\x65\x74\x4C\x65\x66\x74","\x63\x6C\x69\x65\x6E\x74\x59","\x6F\x66\x66\x73\x65\x74\x54\x6F\x70","\x73\x65\x74\x43\x61\x70\x74\x75\x72\x65","\x6D\x6F\x75\x73\x65\x64\x6F\x77\x6E","\x2E\x71\x75\x69\x63\x6B\x2D\x61\x6C\x6F\x2D\x70\x68\x6F\x6E\x65","\x6F\x6E\x6D\x6F\x75\x73\x65\x6D\x6F\x76\x65","\x65\x76\x65\x6E\x74","\x70\x78","\x63\x73\x73","\x72\x65\x6C\x65\x61\x73\x65\x43\x61\x70\x74\x75\x72\x65","\x63\x61\x6E\x63\x65\x6C\x42\x75\x62\x62\x6C\x65","\x6D\x6F\x75\x73\x65\x75\x70","\x72\x65\x61\x64\x79"];jQuery(document)[_0x6868[14]](function(_0xe7bdx1){var _0xe7bdx2=false;var _0xe7bdx3,_0xe7bdx4;_0xe7bdx1(_0x6868[6])[_0x6868[5]](function(_0xe7bdx5){_0xe7bdx2= true;_0xe7bdx3= _0xe7bdx5[_0x6868[0]]- this[_0x6868[1]];_0xe7bdx4= _0xe7bdx5[_0x6868[2]]- this[_0x6868[3]];this[_0x6868[4]]&& this[_0x6868[4]]();return false});document[_0x6868[7]]= function(_0xe7bdx5){if(_0xe7bdx2){var _0xe7bdx5=_0xe7bdx5|| window[_0x6868[8]];var _0xe7bdx6=_0xe7bdx5[_0x6868[0]]- _0xe7bdx3;var _0xe7bdx7=_0xe7bdx5[_0x6868[2]]- _0xe7bdx4;_0xe7bdx1(_0x6868[6])[_0x6868[10]]({"\x6C\x65\x66\x74":_0xe7bdx6+ _0x6868[9],"\x74\x6F\x70":_0xe7bdx7+ _0x6868[9]});return false}};_0xe7bdx1(document)[_0x6868[13]](function(_0xe7bdx5){_0xe7bdx2= false;_0xe7bdx1(_0x6868[6])[0][_0x6868[11]]();_0xe7bdx5[_0x6868[12]]= true})})

