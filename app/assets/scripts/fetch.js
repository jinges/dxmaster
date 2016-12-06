var ajax = function (type, url, data, cb){
	$.ajax({
		type: type,
		url: url,
		data: data,
		contentType : 'application/json',
		dataType : 'json',
		success: function(res){
			if(!res.errCode){
				cb(null, res);
			} else {
				cb(res.errMsg);
			}
		}
	})
}

var getData = function(apiName ,params, cb){
	ajax('GET', api[apiName], params,cb)
}

var postData = function(apiName, params, cb){
	ajax('POST', api[apiName], params,cb)
}