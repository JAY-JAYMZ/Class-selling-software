			let users=[{name:'asd',pwd:'111'},{name:'fsa',pwd:'111'},{name:'a',pwd:'111'}];
			
			
			let username=document.getElementById("username");
			let pwd=document.getElementById("pwd");
			let btn=document.getElementById("log");
			
		
			btn.onclick=function(){
			
				 
				let ret=users.some(function(value){
					return value.name==username.value && value.pwd==pwd.value;
				});
				
				
				
				if(username.value==localStorage.getItem('username1') && pwd.value==localStorage.getItem('pwd1')){
					localStorage.setItem('isVerified', 'true');  
  
 
                    var isVerified = localStorage.getItem('isVerified');  
                    console.log(isVerified);   
					alert("User login successful");
					window.location.href="Courseware.html"
					
					
				}else if(ret){
					alert("User login successful");
					window.location.href="Courseware.html"
					
				
				}else{
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