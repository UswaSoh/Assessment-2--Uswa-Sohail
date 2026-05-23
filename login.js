const loginForm=
document.getElementById(
"loginForm"
);

loginForm.addEventListener(

"submit",

function(e){

e.preventDefault();

const email=
document.getElementById(
"email"
).value;

const password=
document.getElementById(
"password"
).value;

const savedUser=

JSON.parse(

localStorage.getItem(
"user"
)
);
if(
savedUser &&
email===savedUser.email &&
password===savedUser.password
){
alert(
"Login Successful"
);
window.location.href=
"index.html";
}
else{
alert(
"Wrong Email or Password");
}

}

);