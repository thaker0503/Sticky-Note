import { animateNext } from "./animation.js";
import { addNote, createCardHTML, currentCard } from "./create.js";
import { storeData } from "./store.js";

var i;


const main = document.querySelector("main")
const initialCards = JSON.parse(localStorage.getItem('cards'));
initialCards.forEach(card => {
    createCardHTML(card);
})
if (main.children.length > 0) {
    i = parseInt(document.getElementsByTagName("textarea")[0].id.split("note")[1]);
}



main.addEventListener("click", function () {
    if (main.firstChild) {
        if (main.lastChild.value == "") {
            main.lastChild.remove()
        }
    }
    var a = event.clientX;
    var b = event.clientY;
    addNote(a, b)
    for (let i = 0; i < main.children.length; i++) {
        main.children[i].addEventListener("click", function (event) {
            event.stopPropagation();
        })
        main.children[i].addEventListener("keyup", function (event) {
            storeData(event, currentCard)

        })
    }
})

window.onload = () => {
    animateNext(i)
    
}
