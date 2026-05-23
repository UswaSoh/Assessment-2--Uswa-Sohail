
function registerUser(){

let username =
document.getElementById(
"username"
).value;

let email =
document.getElementById(
"email"
).value;

let password =
document.getElementById(
"password"
).value;

let confirm =
document.getElementById(
"confirmPassword"
).value;

if(
username===""
||
email===""
||
password===""

){

alert(
"Fill all fields"
);

return;

}

if(
password!==confirm
){

alert(
"Passwords do not match"
);

return;

}

const user={

username,
email,
password

};

localStorage.setItem(

"user",

JSON.stringify(
user
)

);

alert(
"Account Created"

);

window.location.href=
"login.html";

}

function goLogin(){

window.location.href=
"login.html";

}