			let users=[{name:'asd',pwd:'111'},{name:'王五',pwd:'111'},{name:'a',pwd:'111'}];
			
			
			let username=document.getElementById("username");
			let pwd=document.getElementById("pwd");
			let btn=document.getElementById("log");
			
			/* 点击按钮后触发声明 */
			btn.onclick=function(){
				/* 遍历两个数组 */
				 
				let ret=users.some(function(value){
					return value.name==username.value && value.pwd==pwd.value;
				});
				
				
				/* 判断键盘获取用户名和密码是否注册了并存储在了locaStorage中 */
				if(username.value==localStorage.getItem('username1') && pwd.value==localStorage.getItem('pwd1')){
					localStorage.setItem('isVerified', 'true');  
  
// 验证数据是否已成功存储  
                    var isVerified = localStorage.getItem('isVerified');  
                    console.log(isVerified); // 输出: 'true'  
					alert("User login successful");
					window.location.href="Courseware.html"
					
					
				}else if(ret){
					alert("User login successful");
					window.location.href="Courseware.html"
					
				
				}else{/* 输入错误 */
					alert("Enter the correct username and password");
				}
			}



























/* function myFunction(){
			var x = document.getElementById("demo").value;
			var z=document.getElementById("name").value;
			var y = document.getElementById("damo");
			
			/*console.log(z);*/
				/*alert('恭喜发财')*/
			/*if(x==""&&z==""){
					alert("表格内不能为空");
						}
			else{
				if(x=="123456"&&z=="my"){
				
					y.href = "图片查看/project.html";
				
					}
					else if(x==""&&z=="my"){
	
						alert("您的密码不能为空");
					
					}
					else if(x=="123456"&&z==""){
	
						alert("您的用户名不能为空");
					
					}
				else{
					alert("您填写的用户名或密码有误，请在输入一遍")
				}
			}
			
		} */