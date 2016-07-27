$(document).ready(function(){
	$.ajax({
			url: "JSON.json",
			type: "GET",
			dataType: "json",
			success: function(respone){
				for(var i=0; i<respone.menu.meats.length; i++){
					var data=respone.menu.meats[i];
					createBox(i);

					createSlider(i);
					insert(i,data);
				}
				$('#salads_btn, #desserts_btn, #meats_btn').click(function(){
					var btnId = $(this).attr('id');
					var kind = btnId.replace('_btn', '');
					var data = respone.menu[kind];
					for(var i=0; i<data.length; i++){
						insert(i,data[i]);
					}
				});
				for(var i=0; i<respone.category.length; i++){
					createBox2(i);
					//if(i==0){$('#third img').attr('style','background:url(images/result.png);');}
					//$('.col-sm-4:eq(' + i + ")").attr('style',respone.category[i]["img"]);
					$('.icon_img:eq(' + i + ")").attr('style',respone.category[i]["img"]);
					$('.icon_title:eq(' + i + ")").html(respone.category[i]["title"]);
					$('.icon_desc:eq(' + i + ")").html(respone.category[i]["desc"]);
				}
			},
			error: function(xhr){
				alert("error");
			},
			complete: function(){}
	});
	function createBox2(i){
		$('#third .container .row:eq(0)').append("<div class='col-sm-4'><div class='img icon_img'></div><h6 class='icon_title'></h6></div>");
		$('.icon_title:eq('+i+")").after("<div class='container'><p class='icon_desc'></p></div>");
		$('.icon_desc:eq('+i+")").after("<button type='button' class='btn icon_btn'></button>");
		$('#third .btn').text('LEARN MORE');
		$('#third .modal-footer .btn').text('CLOSE');
	}
	$('#third .row').on("click",'.icon_btn',function(){
		$('#iconModal').modal();
		var div=$(this).parents('.col-sm-4');
		var img=div.children('.icon_img').attr('style');
		var title=div.children('.icon_title').text();
		var desc=div.find('.icon_desc').text();
		$('#iconModal').find('.iconImg').attr('style',img);
		$('#iconModal').find('.iconTitle').text(title);
		$('#iconModal').find('.iconDesc').text(desc);
	});
	function createBox(i){
		if(i!=2){
			$("<div class='col-sm-2'><img class='menu_img' href='#'></div>").appendTo('#first .container:eq(1) .row');
			$('.hidden-xs .menu_img:eq(' + i + ")").after("<button type='button' class='btn'></button>");
			$('.hidden-xs .menu_img:eq(' + i + ")").after("<div class='hidden'><h1 class='main-color menu_price'></h1></div>");
		}
		else{
			$("<div class='col-sm-4'><img class='menu_img' href='#'></div>").appendTo('#first .container:eq(1) .row');
			$('.hidden-xs .menu_img:eq(' + i + ")").after("<div class='shown'></div>");
			$("<h1 class='main-color menu_price'></h1>").appendTo('#first .container:eq(1) .row .shown');
			$('.shown').after("<button type='button' class='order_btn btn'></button>");
		}
		$('.hidden-xs .menu_price:eq(' + i + ")").after("<h6 class='menu_title'></h6>");
		$('.hidden-xs .menu_title:eq(' + i + ")").after("<p class='menu_desc'></p>");
		$('#first .col-sm-2 .btn').text('LEARN MORE');
		$('#first .col-sm-4 .btn').text('ORDER NOW');
	}
	function insert(i,kind){
		$('#first .container:eq(1) .row .menu_img:eq(' + i + ")").attr('src',kind["img"]);
		$('#first .container:eq(1) .row .menu_price:eq(' + i + ")").html(kind["price"]);
		$('#first .container:eq(1) .row .menu_title:eq(' + i + ")").html(kind["title"]);
		$('#first .container:eq(1) .row .menu_desc:eq(' + i + ")").html(kind["desc"]);
		$('#first .visible-xs .menu_img:eq(' + i + ")").attr('src',kind["img"]);
		$('#first .visible-xs .menu_price:eq(' + i + ")").html(kind["price"]);
		$('#first .visible-xs .menu_title:eq(' + i + ")").html(kind["title"]);
		$('#first .visible-xs .menu_desc:eq(' + i + ")").html(kind["desc"]);
	}
	function createSlider(i){
		if(i===0){
			$('.visible-xs .carousel-indicators').append("<li data-target='#carousel-example-generic' data-slide-to="+i+" class='active'></li>");
			$('.visible-xs .carousel-inner').append("<div class='item active'><div class='img-box'><img class='menu_img' href='#'></div></div>");
		}else{
			$('.visible-xs .carousel-indicators').append("<li data-target='#carousel-example-generic' data-slide-to="+i+"></li>");
			$('.visible-xs .carousel-inner').append("<div class='item'><div class='img-box'><img class='menu_img' href='#'></div></div>");
		}
		$('.visible-xs .img-box:eq(' + i + ")").after("<div class='caption'></div>");
		$('#first .container:eq(1) .caption:eq(' + i + ")").append("<h1 class='main-color menu_price'></h1>");
		$('.visible-xs .menu_price:eq(' + i + ")").after("<h6 class='menu_title'></h6>");
		$('.visible-xs .menu_title:eq(' + i + ")").after("<p class='menu_desc'></p>");
	}
});