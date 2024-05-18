document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    
    if (username === "naresh@aithcloud" && password === "9951619453") {
        alert("Your are successfully logedin");
        
    } 
     else {
        alert("Invalid username or password!");
        
    }
});
