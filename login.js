var ref = new Firebase("https://boiling-heat-1718.firebaseio.com/");
var authClient = new FirebaseAuthClient(ref, function (error, user) {
    if (error) {
        alert(error);
        return;
    }
    if (user) {
        // User is already logged in.
        console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
        myUser = user;
        // doLogin(user);
        console.log('logged in')
        $("#data").attr('disabled', false);
        $("#opener-logout").attr('disabled', false);
        $("#opener-login").attr('disabled', true);
    } else {
        // User is logged out.
        
    }
});

$( document ).ready(function(){
$( "#signup" ).click(function(){ 
	var email1 = $("#email").val();
    var password1 = $("#pswrd").val();
	console.log(email1);
	console.log(password1);
	
	authClient.createUser(email1, password1, function (error, user) {
    if (!error) {
			console.log('logging new registered user');
        		} else {
        		alert(error);
    		}
            window,location.href="logIn.html";
   		});	
	});

	
	$( "#login" ).click(function(){ 
    	var email2 = $("#lemail").val();
        var password2 = $("#lpswrd").val();

        authClient.login('password', {
        email: email2,
        password: password2
		
    	});
		window.location.href = "logout.html";
		
    });
	
	$( "#logout" ).click(function(){
	  authClient.logout();
	  alert("logout");
	  window.location.href = "index.html";
	  
});

});


