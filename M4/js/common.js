/*$(function(){
	//单独选择某一个
	$("input[name='check_item']").click(function(){
			var index=$("input[name='check_item']").index(this);
			$("input[name='check_item']").eq(index).toggleClass("checked");//伪复选
			
			if ($("#list :checkbox").length != $("#list :checkbox:checked").length) {
			$("#check_all,#box_all").removeClass("checked");
			}else{
			$("#check_all,#box_all").addClass("checked");
			}
	});	
	//全选
	$("#check_all,#box_all").click(function(){
     $("input[name='check_item']").attr("checked",$(this).attr("checked"));
	 $("input[name='check_item'],#check_all,#box_all").toggleClass("checked");
	});
});*/

//修改
$(document).ready(function () {
	//单独选择某一个
	$("input[name='check_item']").click(function(){
			var index=$("input[name='check_item']").index(this);
			$("input[name='check_item']").eq(index).toggleClass("checked");//伪复选
				if ($("#list .checkbox").length == $("#list .checked").length){
					$('.check_alls').addClass('checked');
					if($("input[name=check_item]").hasClass(" ")){
						$("#check_all,#box_all").addClass("checked");
						//alert("ff");
					}else if(!$("input[name=check_item]").hasClass("checked")){
						//alert("dd");
						$("#check_all,#box_all").removeClass("checked");
					}	
				}else{
				$("#check_all,#box_all").removeClass("checked");
			}
	});	
	// 全选        
	$(".check_alls").click(function () {
		//prop()属性会随着选择改变checked的值，而attr()值不会随之改变。
				if (!$(this).prop("checked")) {
					$('.checkbox').addClass("checked");
				}else{
					$('.checkbox').removeClass("checked");
				}
		//GetCount();
	});
});


