		
			let username1=document.getElementById("username");
			let phone1=document.getElementById("phone");
			let pwd1=document.getElementById("pwd");
			let pwd12=document.getElementById("pwd2");
			let btn1=document.getElementById("log");
			
				
			btn1.onclick=function(){
				localStorage.clear();
				
				if(username.value==""||(phone.value=="")||(pwd.value=="")||pwd2.value==""){
					alert("Please fill in the information completely");
				}
				else if(pwd1.value==pwd12.value){ 
					
					localStorage.setItem('username1',username.value);
					localStorage.setItem('pwd1',pwd.value);
					
					alert("User registration successful \n Please login");
					window.location.href="dengru.html";
					window.event.returnValue=false;
					}else{
						alert("Two password content is inconsistent! \n Please re-enter");
					}
				
			} 
