$(document).ready(function(){
	$('.carousel').carousel({
		interval: 2000
	});
	$("#carousel-example-generic").swiperight(function() {
      $(this).carousel('prev');
    });
   $("#carousel-example-generic").swipeleft(function() {
      $(this).carousel('next');
   });
	$(function () {
		$('#datetimepicker1').datetimepicker();
	});
	$("ul.navbar-nav li").on('click touchend',function(){
		slideTo($(this).children('a'));
		$("ul.navbar-nav .active").removeClass('active');
		$(this).parent().addClass('active');
		$(".collapse").collapse('hide');
		return false;
	});
	$('#content button').click(function(){
		slideTo($('#first_btn'));
	});
	function slideTo(btn){
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		var $top = transformId(btn).offset().top - $('.navbar-header').height()-2;
		$body.animate({scrollTop: $top}, 1000);
		return false;
	}
	function transformId(btn){
		var btnId = btn.attr('id');
		var divId= $('#' + btnId.replace('_btn', ''));
		return divId;
	}
	$(window).scroll(function() {
		if ( $(this).scrollTop() > 300){
			$('#gotop').fadeIn("fast");
		} else {
			$('#gotop').stop().fadeOut("fast");
		}
		var currentTop = $(window).scrollTop() + $('.navbar-header').height()+10;
		$("ul.navbar-nav .active a").blur();
		$("ul.navbar-nav .active").removeClass('active');
		if(currentTop >= $("#first").offset().top && currentTop < $("#second").offset().top) {
			$("#first_btn").parent().addClass('active');
		}
		else if(currentTop >= $("#second").offset().top && currentTop < $("#third").offset().top) {
			$("#second_btn").parent().addClass('active');
		}
		else if(currentTop >= $("#third").offset().top && currentTop < $("#fouth").offset().top) {
			$("#third_btn").parent().addClass('active');
		}
		else if(currentTop >= $("#fouth").offset().top) {
			$("#fouth_btn").parent().addClass('active');
		}
		else{}
			return false;
	});
	$('#menu-btn button').click(function(){
		changeActive($(this));
		return false;
	});
	function changeActive(btn){
		$('#menu-btn .active').removeClass('active');
		btn.addClass('active');
		$('#first .row').css('opacity',0).fadeTo(800,1);
	}
	/*, #first .row img'*/
	$('#first .row').on('click','.col-sm-2 button, .col-sm-2 img', function(){
		var img = $(this).parents('.col-sm-2').find('.menu_img'),
			price = $(this).parents('.col-sm-2').find('.menu_price'),
			originalImg = $('#first .col-sm-4 .menu_img').attr('src'),
			originalPrice = $('#first .col-sm-4 .menu_price').text(),
			changeImg = img.attr('src'),
			changePrice = price.text();
			$('#first .col-sm-4 .menu_img').attr('src',changeImg);
			$('#first .col-sm-4 .menu_price').text(changePrice);
			img.attr('src',originalImg);
			price.text(originalPrice);
	});

	$('#first .container:eq(1)').on("click",'.order_btn, .img-box',function(){
		$('#orderModal').modal();
	});
	$('#email_btn').click(function(){
		var email=$(this).parent().children('input');
		if(email.val()!==""){
			email.val("");
			$('#subscribe_modal').modal();
		}
		else{
			email.tooltip('show');
		}
	});
	$("#gotop").click(function(){
		jQuery("html,body").animate({
			scrollTop:0
		},1000);
	});
});