let headTag = document.querySelector(`h1`);
headTag.innerHTML = `What kind of jungle?`;
headTag.style.color = `orange`;
// Above shows the changing of the HTML tag in the h1 tag as well as colouring it.


let pTags = document.querySelectorAll(`p`);
for (let i=0; i<pTags.length; i++){
    pTags[i].style.color = `limegreen`;
}
// Above shows the colouring of all p Tags in the html changing.


let firstETag = document.getElementById(`firstE`);
firstETag.outerHTML = `<h3> Don't believe them!!</h3>`;
// Above shows the replace men of a tag to a new one using outerHTML.


let oddTags = document.getElementsByClassName(`odd`);
for (let i=0; i<oddTags.length; i++){
    oddTags[i].innerHTML = `<h4>They will never find us out.</h4>`;
}
// Above shows the innerHTML tags being changed in all classes labelled odd.


let lastETag = document.getElementById(`lastE`);
lastETag.outerHTML = `<p>Hello there</p>` + lastETag.innerHTML;
// Above adds text before the innerHTML using outerHTML without replacing the current tags.