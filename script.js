//generate random password
function generate(){

    //set password length/complexity
    let complexity = document.getElementById("generate").value;

    //possible password values
    let values = "ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";

    //create for loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

        //add password to textbox/display area
        document.getElementById("password").value = password;
}


    //set default length display of 25
    //document.getElementById("length").innerHTML = "Length: 25";
    function copyPassword() {

        document.getElementById("display").select();
        document.execCommand("Copy");

        alert("Password copied to cliclboard");
    }

