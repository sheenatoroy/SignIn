function toggleSignup(){

    document.getElementById("login-toggle").style.backgroundColor = "#fff";
    document.getElementById("login-toggle").style.color = "#222";
    document.getElementById("signup-toggle").style.backgroundColor = "#3671dd";
    document.getElementById("signup-toggle").style.color = "#fff";
    document.getElementById("login-form").style.display= "none";
    document.getElementById("signup-form").style.display = "block";
}

function toggleLogin(){

    document.getElementById("login-toggle").style.backgroundColor = "#3671dd";
    document.getElementById("login-toggle").style.color = "#fff";
    document.getElementById("signup-toggle").style.backgroundColor = "#fff";
    document.getElementById("signup-toggle").style.color = "#222";
    document.getElementById("signup-form").style.display= "none";
    document.getElementById("login-form").style.display = "block";

}
