var LOGININGEMPLOYEE = null;

$(document).ready(function() {
    $("#login").click(function(){
        $("#login").val("登录中...").attr("disabled","true");
		doLogin();
	});
    $(document).keyup(function(event){
        if(event.keyCode ==13){
        	var text=$("#login").val();
        	if(text=="登录"){
                $("#login").val("登录中...").attr("disabled","true");
                doLogin();
			}
        }
    });

// 测试向后台请求数据
    $("#testdata").click(function(){
        $.ajax({
            type:'post',
            url:'',
            url:'/login/btn1',
>>>>>>> 854bea077c345f342ce1944cd485527c6bf4917f
            data : {
            },
            dataType:'json',
            success:function(data){
                console.log("success");
<<<<<<< HEAD
                for(i=0;i<data.length;i++){
                    $("#testbox").val(data[i]['attribute']);
                }
=======

                    $("#testbox").val(data['attribute']);

>>>>>>> 854bea077c345f342ce1944cd485527c6bf4917f
            },
            error:function(){
                $("#testbox").val("fail");
            }
        });
    });

});

function doLogin(){
	if(!checkAccountIntput($("#loginCellPhone")) || !checkPasswordInput($("#loginPassword"))|| !$.string.isNullOrEmpty($(".alert_span").text())){
        $("#login").val("登录").removeAttr("disabled");
        return false;
	}else{
        $.ajax({
            type : "POST",
<<<<<<< HEAD
            url : getContextPath() +"",//todo
=======
            url : "/login/btn2",//todo
>>>>>>> 854bea077c345f342ce1944cd485527c6bf4917f
            data : {
                account :  $("#loginCellPhone").val(), //向后台传输用户名、密码、角色是客户/员工
                password :  $("#loginPassword").val(),
                role :  $("#loginRole").val(),
            },
            dataType : "json",

            success : function(returnMsg) {//需要返回returnMsg（user：当前登陆用户 status：登陆状态 msj：登陆成功/账号或密码错误 menuJSON：对不同角色生成菜单 ）
                if(returnMsg.status ){
                    loginSuccess(returnMsg);
                }else{
                    loginFailure(returnMsg);
                }
            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
                alert(textStatus+errorThrown);
                $("#login").val("登录").removeAttr("disabled");
                return false;
            }
        });
	}
}

function checkAccountIntput(input) {

	$(".alert_span").remove();

	$(".alert_span").remove();

	if ($(input).val() == "" ) {
		$(input)
				.parent()
				.after(
						"<span class='alert_span'><font color='red'>帐号不能为空！</font></span>");
		$(input).focus();
		return false;
	}

	return true;
}

function checkPasswordInput(input) {

    $(".alert_span").remove();

    if ($(input).val() == "" || $(input).val().length < 6) {
        $(input)
            .parent()
            .after(
                "<span class='alert_span'><font color='red'>请输入6位及上密码！</font></span>");
        $(input).focus();
        return false;
    }
    return true;

}
	
function loginSuccess(returnMsg){
    $("#login").val("登录").removeAttr("disabled");
	if("客户" == returnMsg.user.type){
		localStorage.menu = JSON.stringify(returnMsg.menuJSON);
        
		delete returnMsg.menuJSON ;

        $.cookie('loginingGuest',JSON.stringify(returnMsg));
        var loginCookie=JSON.parse($.cookie("loginingGuest"));
		console.log("cookie:"+JSON.stringify(loginCookie));
		window.location.href = "index.html";//登陆成功进入客户主页面
		return ;
	}	
	if("员工" == returnMsg.user.type){
		localStorage.menu = JSON.stringify(returnMsg.menuJSON);
        
		delete returnMsg.menuJSON ;

        $.cookie('loginingEmployee',JSON.stringify(returnMsg));
        var loginCookie=JSON.parse($.cookie("loginingEmployee"));
		console.log("cookie:"+JSON.stringify(loginCookie));
		window.location.href = "index.html";//登陆成功进入员工主页面
		return ;
	}	
}

function loginFailure(returnMsg){
    $("#login").val("登录").removeAttr("disabled");
    $("#failureMsg").empty();
	$("#failureMsg").append("&nbsp;&nbsp;<span class='alert_span'><font color='red'>"+returnMsg.msg+"</font></span>");
}

<<<<<<< HEAD
 
=======

>>>>>>> 854bea077c345f342ce1944cd485527c6bf4917f
