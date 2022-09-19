import { animateNext } from "./animation.js";
import { addNote, createCardHTML, currentCard } from "./create.js";
import { dragElement } from "./draggable.js";
import { storeData } from "./store.js";




const main = document.querySelector("main")
const initialCards = JSON.parse(localStorage.getItem('cards')) || [];
initialCards.forEach(card => {
    createCardHTML(card);
})




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
    var i = document.querySelector(".note").getAttribute("id").split("note")[1]
    animateNext(parseInt(i))
    const notes = document.querySelectorAll('.note')
    for (let i = 0; i < notes.length; i++) {
        // console.log(notes[i].id)
        // dragElement(notes[i])
    }
    
}
