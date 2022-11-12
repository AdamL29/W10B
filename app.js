let headTag = document.querySelector(`h1`);
headTag.innerHTML = `What kind of jungle?`;
headTag.style.color = `orange`;

let pTags = document.querySelectorAll(`p`);
for (let i=0; i<pTags.length; i++){
    pTags[i].style.color = `limegreen`;
}

let firstETag = document.getElementById(`firstE`);
firstETag.outerHTML = `<h3> Don't believe them!!</h3>`;

let oddTags = document.getElementsByClassName(`odd`);
for (let i=0; i<oddTags.length; i++){
    oddTags[i].innerHTML = `<h4>They will never find us out.</h4>`;
}

let lastETag = document.getElementById(`lastE`);
lastETag.outerHTML += `Hello There`;
