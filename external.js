// login function //
function Login(){
			
	var email = document.getElementById('exampleInputEmail1');
	var password =  document.getElementById('exampleInputPassword1');
		if(email.value == localStorage.Email && password.value == localStorage.Password){
			alert("Successfully Login");
			location.href="home.html";
				
				
		}else{
			alert("Invalid Username/Password");
			location.reload();
				
		}
			
			
}
// signup function //	
function Save(){
	var guest_name = document.getElementById("exampleInputName");
	var email =  document.getElementById('exampleInputEmail1'); 
	var password = document.getElementById('exampleInputPassword1');
		if(guest_name.value  && email.value && password.value){
			localStorage.setItem("Name",guest_name.value);
			localStorage.setItem("Email",email.value);
			localStorage.setItem("Password",password.value);
			alert("Account record Successfully Saved!!!")
		}else{
			alert("Please don't leave empty fields");
		}
			
		
}