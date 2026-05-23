const container =
document.getElementById(
"trackerContainer"
);

function loadTracker(){

container.innerHTML = "";

for(

let i=0;

i < localStorage.length;

i++

){

let key =
localStorage.key(i);

let book = JSON.parse(

localStorage.getItem(
key
)

);

container.innerHTML += `

<div class="tracker-card">

<img
src="${book.image}"

alt="${book.title}">

<h3>

${book.title}

</h3>

<p>

${book.author}

</p>

<p>

${book.genre}

</p>

<button
onclick="removeBook(
'${book.title}'
)"

class="remove-btn">

Remove

</button>

</div>

`;

}

}

function removeBook(
title
){

localStorage.removeItem(
title
);

loadTracker();

}

function goHome(){

window.location.href =
"./index.html";

}

loadTracker();