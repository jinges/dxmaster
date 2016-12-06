function pagination(params, cb){
	var pageIndex = 1;
	var pageSize = 0;

	getDataList('orderlist', params, cb)

	$(".pagination li").click(function(){
		var that = $(this);

		if(that.hasClass('disabled')) {
			return false;
		}

		if(that.hasClass('prev') && pageIndex > 1) {
			pageIndex --;
		} else if (that.hasClass('next') && pageIndex < pageSize) {
			pageIndex ++;
		} else {
			pageIndex = that.text() * 1;
		}

		if(pageIndex == 1) {
			that.parent().find('li').eq(pageIndex - 1).addClass('disabled').siblings().removeClass('disabled');
		} else if (pageIndex == pageSize) {
			that.parent().find('li').eq(pageIndex + 1).addClass('disabled').siblings().removeClass('disabled');
		}  else {
			that.parent().find('li').removeClass('disabled');
		}

		that.parent().find('li').eq(pageIndex).addClass('active').siblings().removeClass('active');

		params.pageIndex = pageIndex;
		
		getDataList('orderlist', params, cb)
	})

	function getDataList(apiName, params, cb) {
		getData(apiName, params, function(err, data){
			if(err){
				alert(err);
				return false;
			}
			pageSize = data.pageSize;
			cb(data);
		})
	}
}