$("#login").on('submit', function(){
	var username = $("#username").val();
	var password = $("#password").val();
	var code = $("#code").val();
	var err = $("#err");

	if(!username) {
		err.text('用户名不能为空！');
		return false;
	}
	if(!password) {
		err.text('密码不能为空！');
		return false;
	}
	if(!code) {
		err.text('请输入验证码！');
		return false;
	}

	var user = {
		userName: username,
		password: password,
		checkCode: code
	}

	user = JSON.stringify(user);
	$.ajax({
		type : "post",
		url : '/app/login/joinGame.do?rand='+ new Date().getTime(),
		data : user,			
		contentType : 'application/json',
		dataType : "json",
		async : true,
		timeout : 50000,
		success : function(data) {
			if (data && data.success == "false") {
				$(".error").text(data.message);
			} else {
				window.open(data.message, '', 'width=1350,height=670,toolbar=no');
			}
			return false;
		}
	});
	});