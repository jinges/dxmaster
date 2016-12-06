$(function(){
	$("#code-img").on('click', function(){
		$(this).attr("src", "/app/checkCode/image?"+ new Date().getTime());
	});



    $(".left-menu h5").click(function(){
        $(this).siblings("ul").toggle();
    });



    $(".checkbox-all").click(function(){
        var that = $(this);
        var ckArray = that.parent().parent().parent().siblings("tbody").find("input[type='checkbox']");
  
        ckArray.prop('checked', that.prop("checked"));
    });
});