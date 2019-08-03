$(function() {

    //scroll 1 screen 
    $(".btn-scroll").click(function (e){
        e.preventDefault();
        var $div = $(this).data('div');
        $('html, body').animate({
            scrollTop: $($div).offset().top
        }, 1000);
    });
    $(".main-menu a").click(function (e){
        e.preventDefault();
        var $div = $(this).data('div');
        $('html, body').animate({
            scrollTop: $($div).offset().top
        }, 1000);
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
        slidesToScroll: 3,
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
                  breakpoint: 1340,
                  settings: {
                    arrows: true,
                    dots: true
                  }
                }
              ]
        });
    }


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


});

//popup
let sendform = document.querySelector('#sendform'),
    sendformWrap = document.querySelector('.sendform__wrap'),
    sendformClose = document.querySelector('#sendform-close');

function sfOpen() {
    sendformWrap.classList.remove('fadeOutUp');
    sendformWrap.classList.add('fadeInDown');
    sendform.classList.remove('disabled');
    sendform.classList.add('flex');
}

function sfCLose() {
    sendformWrap.classList.remove('fadeInDown');
    sendformWrap.classList.add('fadeOutUp');
    setTimeout("sendform.classList.add('disabled')", 700);
    setTimeout("sendform.classList.remove('flex')", 800);
}

document.addEventListener('DOMContentLoaded', function(){
//popup

    sendform.addEventListener('click', e => {
        if (e.target !== sendformWrap && e.target == sendform) {
            sfCLose();
        }
    });

    sendformClose.addEventListener('click', () => {
        sfCLose();
    });

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
        toggleStyle(navBody, "overflow", "hidden")
    });

    function toggleStyle(el, styleName, value) {
        if (el.style[styleName] !== value) {  //better to check that it is not the value you have
          el.style[styleName] = value;
        } else {
          el.style[styleName] = '';
        }
      }
//tabs
	// store tabs variable
	var myTabs = document.querySelectorAll("ul.header__tabs > li");
    function myTabClicks(tabClickEvent) {
		for (var i = 0; i < myTabs.length; i++) {
			myTabs[i].classList.remove("active");
		}
		var clickedTab = tabClickEvent.currentTarget;
		clickedTab.classList.add("active");
		tabClickEvent.preventDefault();
		var myContentPanes = document.querySelectorAll(".tab-pane");
		for (i = 0; i < myContentPanes.length; i++) {
			myContentPanes[i].classList.remove("active");
		}
        var anchorReference = tabClickEvent.target;
        console.log(anchorReference);
        var activePaneId = anchorReference.getAttribute("href");
        console.log(activePaneId);
        var activePane = document.querySelector(activePaneId);
        console.log(activePaneId);
		activePane.classList.add("active");
    }
    for (i = 0; i < myTabs.length; i++) {
		myTabs[i].addEventListener("click", myTabClicks)
	}





});
