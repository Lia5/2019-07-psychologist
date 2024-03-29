jQuery(document).ready( function($){
    console.log('Дизайн и разработка — insaim.ru');
    //scroll 1 screen 
    $(".btn-scroll").click(function (e){
        e.preventDefault();
        var $div = $(this).data('div');
        $('html, body').animate({
            scrollTop: $($div).offset().top
        }, 1000);
    });
    $(".main-menu a").click(function (e){
        var menuAttr = this;
        console.log(menuAttr);
        console.log(menuAttr.getAttribute('href'));
        if ((menuAttr.getAttribute('href')=='#modalVideo') || (menuAttr.getAttribute('href')=='#modalForm')) {} else {
            e.preventDefault();
            var $div = $(this).data('div');
            $('html, body').animate({
                scrollTop: $($div).offset().top
            }, 1000);
        }    
            if ( window.innerWidth < 1341 || window.screen.width < 1341) {
                $('.main-menu').removeClass('active');
                $('.menu-toggle').removeClass('active');
                $('.lang').removeClass('display-block');
                $('body').css('overflow', 'visible');
                if ( window.innerWidth < 535 || window.screen.width < 535) {
                    $('.header-social').css('display', 'none');
                    $('.download-viz').css('display', 'none');
                }
            }
        

    });

    //mask - select-number form
    if(jQuery('.phone-mask').length) {
        jQuery(function($){
            $(".phone-mask").mask("+7(999) 999-9999");
        });
    } 
    //leng 
    $(".lang__text").click(function (){
        $(".lang__wrap").addClass("active");
    });
    $(".lang__item").click(function (){
        var lang = $(this).text();
        $(".lang__text").text(lang);
        $(".lang__wrap").removeClass("active");
    });    
    //slider bio
    if(jQuery('.bio__slider').length) {
        $('.bio__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        dots: false,
        // prevArrow: '<div class="arrow-prev"></div>',
        // nextArrow: '<div class="arrow-next"></div>'
        prevArrow: '<div class="arrow-prev"><svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0V4.5Z"/></svg></div>',
        nextArrow: '<div class="arrow-next"><svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0V4.5Z"/></svg></div>'
        });
    }
    if(jQuery('.events__slider').length) {
        $('.events__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        dots: false,
        // prevArrow: '<div class="arrow-prev"></div>',
        // nextArrow: '<div class="arrow-next"></div>'
        prevArrow: '<div class="arrow-prev"><svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0V4.5Z"/></svg></div>',
        nextArrow: '<div class="arrow-next"><svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0V4.5Z"/></svg></div>'
        });
    }    
    if(jQuery('.diploms__slider').length) {
        $('.diploms__slider').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
        arrows: true,
        dots: true,
        // prevArrow: '<div class="arrow-prev"></div>',
        // nextArrow: '<div class="arrow-next"></div>'
        prevArrow: '<div class="arrow-prev"><svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0V4.5Z"/></svg></div>',
        nextArrow: '<div class="arrow-next"><svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0V4.5Z"/></svg></div>'
        // , responsive: [
        //     {
        //       breakpoint: 1340,
        //       settings: {
        //         arrows: true,
        //         dots: true
        //       }
        //     }
        //   ]
        });
    }
    if(jQuery('.consult__slider').length) {
        $('.consult__slider-caption').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.consult__slider-for',
            dots: true,
            arrows: true,
            centerMode: true,
            focusOnSelect: true,
            responsive: [
                {
                  breakpoint: 320,
                  settings: {
                    slidesToShow: 1,
                    centerMode: false
                  }
                }
              ]

        });
        $('.consult__slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            fade: true,
            asNavFor: '.consult__slider-caption',
            prevArrow: '<div class="arrow-prev"><svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0V4.5Z" fill="#97DFEC"/></svg></div>',
            nextArrow: '<div class="arrow-next"><svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0V4.5Z" fill="#97DFEC"/></svg></div>',
            responsive: [
                {
                  breakpoint: 1240,
                  settings: {
                    arrows: true,
                    dots: true
                  }
                }
              ]
        });
    }
//video

$('.video__item').click(function (e){
    e.preventDefault();
    var href = $(this).children().data('video');
    $(this)
    .addClass('active').siblings().removeClass('active').data('video');

    $('#YouTube').attr('src', href);
});


    //tabs
    (function($) {
        $(function() {
        
        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });
        
        });
    })(jQuery);

//popup



let modalWrap = $('.modal__wrap');
let body = $('body');

$(".modal-open").click(function (e){
    e.preventDefault();
    var numModal = $(this).attr('href');
    var modal =  $(numModal);
    modalWrap.removeClass('fadeOutUp');
    modalWrap.addClass('fadeInDown');
    modal.removeClass('disabled');
    modal.addClass('flex');
    // body.addClass('body-modal');
});

//popup
    $('#modal-close').click(function (){

        modalWrap.removeClass('fadeInDown');
        modalWrap.addClass('fadeOutUp');
        setTimeout(function() {
            $('.modal').addClass('disabled');
          }, 700);
        setTimeout(function() {
            $('.modal').removeClass('flex');
          }, 800);  
          var yt = $('#YouTube').attr('src');
        $('#YouTube').attr('src', " ");
        $('#YouTube').attr('src', yt);

    });

    $('.modal').mouseup(function (e){ // событие клика по веб-документу
        var div = $(".modal__body"); // тут указываем ID элемента
        var close = $('#modal-close');
        if (close.is(e.target)) {

        } else if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
            var modalWrap = $('.modal__wrap');
            modalWrap.removeClass('fadeInDown');
            modalWrap.addClass('fadeOutUp');
            setTimeout(function() {
                $('.modal').addClass('disabled');
            }, 700);
            setTimeout(function() {
                $('.modal').removeClass('flex');
            }, 800); 
            var yt = $('#YouTube').attr('src');
            $('#YouTube').attr('src', " ");
            $('#YouTube').attr('src', yt);
            
        }
    });

    //animation 
    // $('.fixed-nav li').on('click', function(e){
	// 	var dataName = $(this).attr('data-menuAnchor');
	// 	e.preventDefault();
	// 	var id = $('[data-anchor="'+ dataName + '"]');
	// 	$('html,body').stop().animate({ scrollTop: $(id).offset().top }, 1000);
	// });

	function AnimActive() {
		$('*[data-anim]').each(function(e) {
			var dataName = $(this).attr('data-anim');
            var posit = $(this).offset().top - 400;
            if (dataName=="bioanim3") {
                var posit = $(this).offset().top - 600;
            }
            if (dataName=="headeranim") {
                var posit = $(this).offset().top - 10000;
            }
            if ( window.innerWidth < 1341 || window.screen.width < 1341) {
                var posit = $(this).offset().top - 1000;
                if (dataName=="bioanim3") {
                    var posit = $(this).offset().top - 800;
                }
            }
			var windowPostition = $(window).scrollTop();

			if (windowPostition >= posit) {
				$('*[data-anim="'+ dataName + '"]').removeClass('active');
				$('[data-anim="'+ dataName + '"]').addClass('active');
			} else {

            }

		});
	};

	AnimActive();
	$(window).scroll(function() {
		AnimActive();
	});

	$(window).resize(function() {
		AnimActive();
	});

});

jQuery(window).resize(function($){
    //slider bio
    if(jQuery('.bio__slider').length) {
        $('.bio__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        dots: false,
        // prevArrow: '<div class="arrow-prev"></div>',
        // nextArrow: '<div class="arrow-next"></div>'
        prevArrow: '<div class="arrow-prev"><svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0V4.5Z"/></svg></div>',
        nextArrow: '<div class="arrow-next"><svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0V4.5Z"/></svg></div>'
        });
    }
    if(jQuery('.events__slider').length) {
        $('.events__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        dots: false,
        // prevArrow: '<div class="arrow-prev"></div>',
        // nextArrow: '<div class="arrow-next"></div>'
        prevArrow: '<div class="arrow-prev"><svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0V4.5Z"/></svg></div>',
        nextArrow: '<div class="arrow-next"><svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0V4.5Z"/></svg></div>'
        });
    }    
    if(jQuery('.diploms__slider').length) {
        $('.diploms__slider').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
        arrows: true,
        dots: true,
        // prevArrow: '<div class="arrow-prev"></div>',
        // nextArrow: '<div class="arrow-next"></div>'
        prevArrow: '<div class="arrow-prev"><svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0V4.5Z"/></svg></div>',
        nextArrow: '<div class="arrow-next"><svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0V4.5Z"/></svg></div>'
        // , responsive: [
        //     {
        //       breakpoint: 1340,
        //       settings: {
        //         arrows: true,
        //         dots: true
        //       }
        //     }
        //   ]
        });
    }
    if(jQuery('.consult__slider').length) {
        $('.consult__slider-caption').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.consult__slider-for',
            dots: true,
            arrows: true,
            centerMode: true,
            focusOnSelect: true,
            responsive: [
                {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    centerMode: false
                }
                }
            ]

        });
        $('.consult__slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            fade: true,
            asNavFor: '.consult__slider-caption',
            prevArrow: '<div class="arrow-prev"><svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0V4.5Z" fill="#97DFEC"/></svg></div>',
            nextArrow: '<div class="arrow-next"><svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0V4.5Z" fill="#97DFEC"/></svg></div>',
            responsive: [
                {
                breakpoint: 1240,
                settings: {
                    arrows: true,
                    dots: true
                }
                }
            ]
        });
    }
});


document.addEventListener('DOMContentLoaded', function(){


//menu
    var menu = document.querySelector('.menu-toggle');
    menu.addEventListener('click', function(){
        var nav = document.querySelector('.main-menu');
        nav.classList.toggle('active');
        var navGamb = document.querySelector('.menu-toggle');
        navGamb.classList.toggle('active');
        var navLang = document.querySelector('.lang');
        navLang.classList.toggle('display-block');
        var navBody = document.querySelector('body');
        toggleStyle(navBody, "overflow", "hidden");
        if ( window.innerWidth < 535 || window.screen.width < 535) {
            var topSoc =  document.querySelector('.header-social');
            toggleStyle(topSoc, "display", "flex");
            var topSoc =  document.querySelector('.download-viz');
            toggleStyle(topSoc, "display", "flex");
        }
    });

    function toggleStyle(el, styleName, value) {
        if (el.style[styleName] !== value) {  //better to check that it is not the value you have
          el.style[styleName] = value;
        } else {
          el.style[styleName] = '';
        }
      }

});
