$(document).ready(function(){	
	$(function () {
		$('#datetimepicker1').datetimepicker();
	});		
	$("ul.navbar-nav li").on('click',function(){
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
		$('.show').fadeOut("slow",function(){
			$(this).removeClass('show').addClass('hide');
		});
		transformId(btn).fadeTo(1000,1).removeClass('hide').addClass('show');				
	}
	/*, #first .row img'*/
	$('#first .row').on('click','.col-sm-2 button, .col-sm-2 img', function(){
		$('#first .col-sm-4 .shown').removeClass('shown').addClass('hidden');	
		$(this).parents('').children('.col-sm-4').removeClass('col-sm-4').addClass('col-sm-2');
		$(this).parent().removeClass('col-sm-2').addClass('col-sm-4');
		$(this).parent().children('.hidden').removeClass('hidden').addClass('shown');
		$('#first .container:eq(1) .row button').each(function(){
			$(this).removeClass('order_btn1');
			$(this).text('LEARN MORE');
		});
		$('#first .col-sm-4 button').text('ORDER NOW').addClass('order_btn1');
	});

	$('#first .row').on("click",'.order_btn1',function(){
		$('#orderModal').modal();
	});
	$('#email_btn').click(function(){
		var email=$(this).parent().children('input')
		if(email.val()!=""){
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