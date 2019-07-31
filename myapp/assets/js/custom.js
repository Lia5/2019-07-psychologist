$(function() {

    //slider bio
    if(jQuery('.bio__slider').length) {
        $('.bio__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        dots: false,
        prevArrow: '<div class="arrow-prev"></div>',
        nextArrow: '<div class="arrow-next"></div>'
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
