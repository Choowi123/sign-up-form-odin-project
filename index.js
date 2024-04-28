const checkPass = function() {
    if(document.getElementById('userPass').value !=
       document.getElementById('confirmPass').value) {
        userPass.style.border = "3px solid red";
        confirmPass.style.border = "3px solid red";
        wrongPass.style.display = "block";
    } else {
        userPass.style.border = "none";
        confirmPass.style.border = "none";
        wrongPass.style.display = "none";
    }
}