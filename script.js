const container =
document.getElementById(
"bookContainer"
);

function displayBooks(list){

container.innerHTML = "";

list.forEach(book => {

container.innerHTML += `

<div
class="card"

onclick="openBook(
'${book.title}'
)">

<img
src="${book.image}"
alt="${book.title}">
<h3> ${book.title} </h3>
<p>${book.author}</p>
<span>${book.genre}</span>
</div>
`;
});
}

function filterGenre(genre){
const filtered =
books.filter(
book =>
book.genre === genre
);

displayBooks(
filtered
);

}

function openBook(title){

window.location.href =

`bookDetail.html?title=${encodeURIComponent(
title
)}`;

}

displayBooks(
books
);

const searchInput =
document.getElementById(
"searchInput"
);

searchInput.addEventListener(

"input",

function(){

const value =
this.value
.toLowerCase();

const filtered =
books.filter(book =>

book.title
.toLowerCase()
.includes(value)

||

book.author
.toLowerCase()
.includes(value)

||

book.genre
.toLowerCase()
.includes(value)

);

displayBooks(
filtered
);

}

);