var b5m_index={init:function(){var a=this;a.banner(!0),a.imgLazyLoad(),a.toSeeMore(),a.searchWrapInit()},banner:function(a){{var e=$(".slider-page");new TouchSlider({id:"pro-banner",begin:0,auto:a,before:function(a){$(".cur",e).removeClass("cur"),$("span",e).eq(a).addClass("cur")}})}},imgLazyLoad:function(){$("img").imglazyload({fadeIn:!0})},imgHeightInit:function(a){var e=$(window).width()/2;a.height(e)},toSeeMore:function(){function a(a){var e=$("#sort").val(),n=$("#count").val(),o=$(".loading-imgS img"),i=$(".loading-imgS p"),r="";n>=a?$.ajax({type:"GET",url:"http://m.b5m.com/indexpage",data:{sort:e,page:a},asyne:!0,dataType:"jsonp",jsonp:"jsonpCallback",beforeSend:function(){o.show(),i.hide()},success:function(a){$.each(a,function(a,e){var n=parseFloat(e.lowPrice),o=parseFloat(e.highPrice);if(r+='<li class="fl">',r+='<div class="li-wrap">',r+='<a href="/item.html?tid='+e.id+'" class="goods-one">',r+='<div class="img_wrap">',r+=e.img.indexOf("b5m.com")>-1?'<img src="'+e.img+'?imageView/1/w/300/h/300">':'<img src="'+e.img+'">',r+="</div>",r+="<p>"+e.title+"</p>",r+='<div class="price_wrap clear-fix">',r+="<strong>￥"+e.lowPrice+"&nbsp</strong>",n>0&&o>n){var i=(n/o*10+"").replace(/(\.\d)\d+/gi,"$1");r+='<span class="discount">'+i+"折</span>"}r+="</div></div></a></li>"}),$(r).appendTo($(".guess_u_like .content ul")),o.hide(),i.show()},error:function(){alert("网络繁忙，请稍后再试，么么哒~~")}}):(o.hide(),i.show(),$(".loading-imgS").text("每天都会有新品发布，先休息一会儿吧").off("click"))}var e=1;$(document).ready(function(){var n=0,o=0;$(window).scroll(function(){var i=$(window).scrollTop();o=parseFloat($(window).height())+parseFloat(i),$(document).height()-n<=o&&a(++e)})})},searchWrapInit:function(){$(".search_input").on("focus",function(){$(".search_wrap").addClass("search_wrap_show"),$(".search_suggest_wrap").show().css({height:$(window).height()+60+"px"}).on("touchmove",function(a){a.preventDefault(),a.stopPropagation()})}),$(".search_cancel").on("touchstart",function(a){a.stopPropagation(),a.preventDefault(),$(".search_wrap").removeClass("search_wrap_show"),$(".search_suggest_wrap").hide(),$(".search_input").blur()}),$(".search_wrap").on("touchstart",".search_nav_icon",function(a){a.stopPropagation(),a.preventDefault();var e=$(this).parent().parent();e.hasClass("search_wrap_nav_show")?e.removeClass("search_wrap_nav_show"):e.addClass("search_wrap_nav_show")}),$(document).on("scroll",function(){$(".search_wrap_nav_show").length>0&&$(".search_nav_icon").trigger("touchstart")})}};$(function(){b5m_index.init()});