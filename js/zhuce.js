		
			let username1=document.getElementById("username");
			let phone1=document.getElementById("phone");
			let pwd1=document.getElementById("pwd");
			let pwd12=document.getElementById("pwd2");
			let btn1=document.getElementById("log");
			
				/* 点击按钮后触发 */
			btn1.onclick=function(){
				localStorage.clear();
				/* 判断是否有没填写的信息 */
				if(username.value==""||(phone.value=="")||(pwd.value=="")||pwd2.value==""){
					alert("Please fill in the information completely");
				}/* 判断两次密码是否不一致 */
				else if(pwd1.value==pwd12.value){ 
					/* 存储用户名和密码 */
					localStorage.setItem('username1',username.value);
					localStorage.setItem('pwd1',pwd.value);
					/* 弹出提示并跳转页面 */
					alert("User registration successful \n Please login");
					window.location.href="dengru.html";
					window.event.returnValue=false;
					}else{
						alert("Two password content is inconsistent! \n Please re-enter");
					}
				
			} 
