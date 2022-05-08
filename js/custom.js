$(window).load(function(){

	$('.section-1 h1').removeClass('fadeInUp animated').addClass('fadeInUp animated').css({'animation-delay':'0.5s','animation-duration': '0.7s'});
	$('.section-1 p').removeClass('fadeInDown animated').addClass('fadeInUp animated').css({'animation-delay':'0.7s','animation-duration': '0.7s'});

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
	if ($(window).height() > 699 && $(window).width() > 991) {
		createFullPage();
	} else {
		if ($('#fullpage').length) {
			$(".js-info-items__link").click(function (event) {
				event.preventDefault();
				$(this).attr('href', '#promo_target');
				var id  = $(this).attr('href');
				var heightpage = $(window).height();
				var topel = $(id).offset().top;
				var heightorder = $(id).height();
				var positionscroll = topel - heightpage/2 + heightorder/2;
				$('body,html').animate({scrollTop: positionscroll}, 500);
			});
			$.fn.fullpage.destroy('all');
		};
	}
});
$(window).resize(function(){
	if ($(window).height() > 699 && $(window).width() > 991) {
		createFullPage();
	} else {
		if ($('#fullpage').length) {
			$('.section-1 h1, .section-1 p').removeClass('fadeInUp fadeOutUp animated');
			$('.section-2 .countdownHolder, .section-2 .box-form, .section-2 .sub-info_form').removeClass('fadeIn fadeOutDown fadeOutUp fadeInUp fadeOut animated');
			$('.section-3 .info-blok_3 h2, .info-items__item:nth-child(1), .info-items__item:nth-child(2), .info-items__item:nth-child(3), .call-uz, .right-asside_3').removeClass('fadeIn fadeOut fadeOutDown fadeInRight fadeInLeft fadeOutUp animated');   
			$('.section-4 h2, .info-blok__text_4, .sub-info_comand').removeClass('fadeInUp fadeInDown fadeOutDown fadeOutUp animated');
			$(".js-info-items__link").click(function (event) {
				event.preventDefault();
				$(this).attr('href', '#promo_target');
				var id  = $(this).attr('href');
				var heightpage = $(window).height();
				var topel = $(id).offset().top;
				var heightorder = $(id).height();
				var positionscroll = topel - heightpage/2 + heightorder/2;
				$('body,html').animate({scrollTop: positionscroll}, 500);
			});
			$.fn.fullpage.destroy('all');





		};
	}
});
/* viewport width */
function viewport(){
	var e = window, 
	a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
		var placeholder = $(this).attr('placeholder');
		$(this).focus(function(){ $(this).attr('placeholder', '');});
		$(this).focusout(function(){			 
			$(this).attr('placeholder', placeholder);  			
		});
	});
	/* placeholder*/


	
	/* components */
	
	if($('.gallery').length) {
		$('.gallery').fancybox({
			margon  : 10,
			padding  : 10,
			scrolling: 'no',
			centerOnScroll: true
		});
	};

	$(function() {
		$('.gallery-item').each(function(){
			var srcImg = $(this).find('img').attr('src');
			$(this).css({'background-image':'url('+srcImg+')'});
            // return false;
          });
	});
	
//Slider
if($('.js-bg-slider').length) {
	$('.js-slider-nav').slick({
		infinite:true,
		slidesToShow: 7,
		slidesToScroll: 1,
		asNavFor: '.js-bg-slider',
		dots: false,
		autoplay: false,
			// centerMode: true,
			focusOnSelect: true,
			arrows: false,
			responsive: [
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 4,
				}
			},


			]
		});
	$('.js-bg-slider').slick({
		dots: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		pauseOnHover: false,
		asNavFor: '.slider-nav',
		infinite:true,
	});

};

// Counter
// $(function(){
	
// 	var note = $('#note'),
// 	ts = new Date(2017, 9, 1),
// 	newYear = true;

// 	if((new Date()) > ts){
		// Задаем точку отсчета для примера. Пусть будет очередной Новый год или дата через 10 дней.
		// Обратите внимание на *1000 в конце - время должно задаваться в миллисекундах
// 		ts = (new Date()).getFullYear();
// 		newYear = false;
// 	}
// 	if($('#countdown').length) {
// 		$('#countdown').countdown({
// 			day: "Дней",
// 			timestamp	: ts,
// 			callback	: function(days, hours, minutes, seconds){

// 				var message = "";

// 				message += "Дней: " + days +", ";
// 				message += "часов: " + hours + ", ";
// 				message += "минут: " + minutes + " и ";
// 				message += "секунд: " + seconds + " <br />";

// 				if(newYear){
// 					message += "осталось до Нового года!";
// 				}
// 				else {
// 					message += "осталось до момента через 10 дней!";
// 				}

// 				note.html(message);
// 			}
// 		});
// 	}
// });

//icon form
var icon_call = $(".icon-call");
icon_call.on('click', function() {
	$(this).parent().find('input').focus();
});
var icon_email = $(".icon-email");
icon_email.on('click', function() {
	$(this).parent().find('input').focus();
});

// mask phone
    if ($('.js-mask').length) {
        $('.js-mask').mask('+3 ( 999 )  999 99 99');
    }
/* components */

});

var handler = function(){



	if ($('#scene').length) {
		var scene = document.getElementById('scene');
		var parallax = new Parallax(scene);
	};


	var height_footer = $('footer').height();	
	var height_header = $('header').height();		
	
	
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;
	
	if (viewport_wid <= 991) {
		
	}
	
	

}
$(window).bind('load', handler);
$(window).bind('resize', handler);

function createFullPage() {
	if ($(window).height() > 699 && $(window).width() > 991) {

		if($('#fullpage').length) {
			$('#fullpage').fullpage({
				lockAnchors: false,
				anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthpage'],
				navigation: true,
				navigationPosition: 'left',
				showActiveTooltip: false,
				slidesNavigation: false,
				slidesNavPosition: 'bottom',
				scrollingSpeed: 700,
				onLeave: function(index, nextIndex, direction) {
					if( index == 1 ) {
						$('.section-1 h1').removeClass('fadeInUp animated').addClass('fadeOutUp animated').css('animation-delay', '0s');
						$('.section-1 p').removeClass('fadeInDown animated').addClass('fadeOutUp animated').css('animation-delay', '0s');

                    } else{// со 2й на 1 аним 1го
                    	if( index == 2 && direction == 'up' ) { 
                    		/*animation index.html*/
                    		$('.section-1 h1').removeClass('fadeOutUp fadeInUp animated').addClass('fadeInUp animated').css({'animation-delay':'0.2s','animation-duration': '0.7s'});
                    		$('.section-1 p').removeClass('fadeOutUp fadeInDown fadeInUp animated').addClass('fadeInUp animated').css({'animation-delay':'0.5s','animation-duration': '0.7s'});
                    	};
                    };
                    
                    if( index == 1 && direction == 'down' ) {

                    	$('.section-2 .countdownHolder').removeClass('fadeIn fadeOutDown fadeOut animated').addClass('fadeInUp animated').css({'animation-delay':'0.3s','animation-duration': '0.7s'});
                    	$('.section-2 .box-form').removeClass('fadeIn fadeOutDown fadeOut animated').addClass('fadeInUp animated').css({'animation-delay':'0.5s','animation-duration': '0.7s'});
                    	$('.section-2 .sub-info_form').removeClass('fadeIn fadeOutDown fadeOut animated').addClass('fadeInUp animated').css({'animation-delay':'0.5s','animation-duration': '0.7s'});


                    } else{
                    	if( index == 2 && direction == 'up' ) { 
                    		$('.section-2 .countdownHolder').removeClass('fadeOutUp fadeInUp animated').addClass(' fadeOutDown animated').css('animation-delay', '0s');
                    		$('.section-2 .box-form').removeClass('fadeIn fadeOutDown fadeOut fadeOutUp animated').addClass('fadeOutDown animated').css('animation-delay', '0s');
                    		$('.section-2 .sub-info_form').removeClass('fadeIn fadeOutDown fadeOut fadeOutUp animated').addClass('fadeOutDown animated').css('animation-delay', '0s');

                    	} else{
                    		if( index == 2 && direction == 'down' ){
                    			$('.section-2 .countdownHolder').removeClass('fadeOutUp fadeOutDown fadeInDown fadeInUp animated').addClass('fadeOutUp animated').css('animation-delay', '0s');
                    			$('.section-2 .box-form').removeClass('fadeIn fadeOutDown fadeOut fadeInDown fadeInUp animated').addClass('fadeOutUp animated').css('animation-delay', '0s');
                    			$('.section-2 .sub-info_form').removeClass('fadeIn fadeOutDown fadeOut fadeInDown fadeInUp animated').addClass('fadeOutUp animated').css('animation-delay', '0s');

                    		} else{
                    			if( index == 3 && direction == 'up'){
                    				$('.section-2 .countdownHolder').removeClass('fadeIn fadeOutUp fadeOutDown fadeOut animated').addClass('fadeInUp animated').css({'animation-delay':'.1s','animation-duration': '0.7s'});
                    				$('.section-2 .box-form').removeClass('fadeIn fadeOutDown fadeOut fadeInUp fadeOutUp animated').addClass('fadeInUp animated').css({'animation-delay':'0.4s','animation-duration': '0.7s'});
                    				$('.section-2 .sub-info_form').removeClass('fadeIn fadeOutDown fadeOut fadeInUp fadeOutUp animated').addClass('fadeInUp animated').css({'animation-delay':'0.4s','animation-duration': '0.7s'});

                    			}
                    		}
                    	};
                    };
                    
                    if( index == 2 && direction == 'down' ) { 

                    	$('.section-3 .info-blok_3 h2').removeClass('fadeIn fadeOut fadeOutDown fadeOutUp animated').addClass('fadeInDown animated').css({'animation-delay':'0.2s','animation-duration': '0.7s'});   
                    	$('.section-3 .info-items__item:nth-child(2)').removeClass('fadeIn fadeOut fadeOutDown fadeOutUp animated').addClass('fadeInUp animated').css({'animation-delay':'0.5s','animation-duration': '0.7s'});  
                    	$('.section-3 .info-items__item:nth-child(1)').removeClass('fadeIn fadeOut fadeInLeft fadeOutDown fadeOutUp animated').addClass('fadeInLeft animated').css({'animation-delay':'0.5s','animation-duration': '0.7s'});  
                    	$('.section-3 .info-items__item:nth-child(3)').removeClass('fadeIn fadeOut fadeInRight fadeOutDown fadeOutUp animated').addClass('fadeInRight animated').css({'animation-delay':'0.5s','animation-duration': '0.7s'});  
                    	$('.section-3 .call-uz').removeClass('fadeIn fadeOut fadeOutDown fadeOutUp animated').addClass('fadeIn animated').css({'animation-delay':'0.7s','animation-duration': '0.7s'});  
                    	$('.section-3 .right-asside_3').removeClass('fadeIn fadeOutDown fadeOutUp fadeOut animated').addClass('fadeIn animated').css({'animation-delay':'0.7s','animation-duration': '0.7s'});  

                    } else{
                    	if( index == 3 && direction == 'up' ) {
                    		$('.section-3 .info-blok_3 h2').removeClass('fadeInDown fadeOut fadeOutUp fadeOutUp animated').addClass('fadeOutDown animated').css({'animation-delay':'0s','animation-duration': '1s'});  
                    		$('.section-3 .info-items__item:nth-child(2)').removeClass('fadeInUp fadeOut fadeOutUp fadeOutUp animated').addClass('fadeOutDown animated').css({'animation-delay':'0s','animation-duration': '1s'});  
                    		$('.section-3 .info-items__item:nth-child(1)').removeClass('fadeInUp fadeOut fadeInLeft fadeOutUp fadeOutUp animated').addClass('fadeOutDown animated').css({'animation-delay':'0s','animation-duration': '1s'});  
                    		$('.section-3 .info-items__item:nth-child(3)').removeClass('fadeInUp fadeOut fadeInRight fadeOutUp fadeOutUp animated').addClass('fadeOutDown animated').css({'animation-delay':'0s','animation-duration': '1s'});  
                    		$('.section-3 .right-asside_3').removeClass('fadeIn fadeOut fadeOutUp fadeOutUp animated').addClass('fadeOutDown animated').css({'animation-delay':'0s','animation-duration': '1s'});  
                    		$('.section-3 .call-uz').removeClass('fadeIn fadeOut fadeOutUp fadeOutUp animated').addClass('fadeOutDown animated').css({'animation-delay':'0s','animation-duration': '1s'});  

                    	} else{
                    		if( index == 3 && direction == 'down' ){
                    			$('.section-3 .info-blok_3 h2').removeClass('fadeInDown fadeOut fadeOutUp fadeOutUp animated').addClass('fadeOutUp animated').css({'animation-delay':'0s','animation-duration': '1s'});  
                    			$('.section-3 .info-items__item:nth-child(2)').removeClass('fadeInDown fadeOut fadeOutUp fadeOutUp animated').addClass('fadeOutUp animated').css({'animation-delay':'0s','animation-duration': '1s'});  
                    			$('.section-3 .info-items__item:nth-child(1)').removeClass('fadeInDown fadeInLeft fadeOut fadeOutUp fadeOutUp animated').addClass('fadeOutUp animated').css({'animation-delay':'0s','animation-duration': '1s'});  
                    			$('.section-3 .info-items__item:nth-child(3)').removeClass('fadeInDown fadeInRight fadeOut fadeOutUp fadeOutUp animated').addClass('fadeOutUp animated').css({'animation-delay':'0s','animation-duration': '1s'});  
                    			$('.section-3 .right-asside_3').removeClass('fadeInDown fadeIn fadeOut fadeOutUp fadeOutUp animated').addClass('fadeOutUp animated').css({'animation-delay':'0s','animation-duration': '1s'});  
                    			$('.section-3 .call-uz').removeClass('fadeInDown fadeOut fadeIn fadeOutUp fadeOutUp animated').addClass('fadeOutUp animated').css({'animation-delay':'0s','animation-duration': '1s'});  

                    		} else{
                    			if( index == 4 && direction == 'up'){   
                    				$('.section-3 .info-blok_3 h2').removeClass('fadeIn fadeOut fadeOutDown fadeOutUp animated').addClass('fadeInDown animated').css({'animation-delay':'0.2s','animation-duration': '0.7s'});   
                    				$('.section-3 .info-items__item:nth-child(2)').removeClass('fadeIn fadeOut fadeOutDown fadeOutUp animated').addClass('fadeInUp animated').css({'animation-delay':'0.5s','animation-duration': '0.7s'});  
                    				$('.section-3 .info-items__item:nth-child(1)').removeClass('fadeIn fadeOut fadeOutDown fadeInUpLeft fadeOutUp animated').addClass('fadeInLeft animated').css({'animation-delay':'0.5s','animation-duration': '0.7s'});  
                    				$('.section-3 .info-items__item:nth-child(3)').removeClass('fadeIn fadeOut fadeOutDown fadeInRight fadeOutUp animated').addClass('fadeInRight animated').css({'animation-delay':'0.5s','animation-duration': '0.7s'});  
                    				$('.section-3 .call-uz').removeClass('fadeIn fadeOut fadeIn fadeOutDown fadeOutUp animated').addClass('fadeIn animated').css({'animation-delay':'0s','animation-duration': '1s'});  
                    				$('.section-3 .right-asside_3').removeClass('fadeIn fadeOutDown fadeOutUp fadeOut animated').addClass('fadeIn animated').css({'animation-delay':'0s','animation-duration': '1s'});  
                    				$('.section-2 .countdownHolder').removeClass('fadeIn fadeOutUp fadeOutDown fadeOut animated').addClass('fadeInUp animated').css({'animation-delay':'.1s','animation-duration': '0.7s'});
                    				$('.section-2 .box-form').removeClass('fadeIn fadeOutDown fadeOut fadeInUp fadeOutUp animated').addClass('fadeInUp animated').css({'animation-delay':'0.4s','animation-duration': '0.7s'});
                    				$('.section-2 .sub-info_form').removeClass('fadeIn fadeOutDown fadeOut fadeInUp fadeOutUp animated').addClass('fadeInUp animated').css({'animation-delay':'0.4s','animation-duration': '0.7s'});
                    			}
                    		}
                    	};
                    };
                    
                    if( index == 3 && direction == 'down' ) {  

                    	$('.section-4 h2').removeClass('fadeInUp fadeInDown fadeOutDown fadeOutUp animated').addClass('fadeInUp animated').css({'animation-delay':'0s','animation-duration': '0.7s'});
                    	$('.section-4 .info-blok__text_4').removeClass('fadeInUp fadeInDown fadeOutDown fadeOutUp animated').addClass('fadeInUp animated').css({'animation-delay':'0.2s','animation-duration': '0.7s'});
                    	$('.section-4 .sub-info_comand').removeClass('fadeInUp fadeInDown fadeOutDown fadeOutUp animated').addClass('fadeInUp animated').css({'animation-delay':'0.3s','animation-duration': '0.7s'});



                    } else{
                    	if( index == 4 && direction == 'up' ) {

                    		$('.section-4 h2').removeClass('fadeInUp fadeInDown fadeOutDown fadeOutUp animated').addClass('fadeOutDown animated').css({'animation-delay':'0s'});
                    		$('.section-4 .info-blok__text_4').removeClass('fadeInUp fadeInDown fadeOutDown fadeOutUp animated').addClass('fadeOutDown animated').css({'animation-delay':'0s'});
                    		$('.section-4 .sub-info_comand').removeClass('fadeInUp fadeInDown fadeOutDown fadeOutUp animated').addClass('fadeOutDown animated').css({'animation-delay':'0s'});
                    	} 
                    };
                  }
                });
};
}
}


$(document).ready(function(){
	$('.call_me').submit(function() {
		$.ajax({
			type: 'POST',
			url: 'feedback.php',
			data: $(this).serialize(),
			success: function(data) {
				alert(data);
				// $('.modal').removeClass('opened');
				return false;
			}
		});
		return false;
	});
});