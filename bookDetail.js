const params =
new URLSearchParams(
window.location.search
);

let book;

const title =
params.get("title");

const id =
params.get("id");

if(title){

book =
books.find(
b => b.title === title
);

}

else if(id !== null){

book =
books[id];

}

if(book){

document.getElementById(
"bookTitle"
).innerText =
book.title;

document.getElementById(
"bookAuthor"
).innerText =
book.author;

document.getElementById(
"bookGenre"
).innerText =
book.genre;

document.getElementById(
"bookDescription"
).innerText =
book.description;

document.getElementById(
"bookImage"
).src =
book.image;

document.getElementById(
"amazonLink"
).href =
book.amazon;

document.getElementById(
"pdfLink"
).href =
book.pdf;

}

function saveTracker(){

if(book){

localStorage.setItem(
book.title,
JSON.stringify(book)
);

alert(
book.title +
" Added to tracker"
);

}

}

function goHome(){

window.location.href=
"index.html";

}