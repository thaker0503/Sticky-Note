import { animateNext } from "./animation.js";
import { addNote, createCardHTML, currentCard } from "./create.js";
// import { dragElement } from "./draggable.js";
import { storeData } from "./store.js";

const main = document.getElementById("board")
const initialCards = JSON.parse(localStorage.getItem('cards')) || [];
initialCards.forEach(card => {
    createCardHTML(card);
})
var count = JSON.parse(localStorage.getItem("cards")).length;
const contextMenu = document.getElementById("context-menu");
const del = document.querySelector(".remove")
// var count = 0;

function delCard(id) {
    var cards = JSON.parse(localStorage.getItem("cards"));
    for (let i = 0; i < cards.length; i++) {
        const index = cards.findIndex(item => item.id == id)
        if (index > -1) {
            console.log("Removing Item")
            cards.splice(index,1)
        }
        
    }
    localStorage.setItem("cards", JSON.stringify(cards))
}

main.addEventListener("click", function (event) {
    contextMenu.classList.remove("visible");
    console.log("Main Clicked ==>")
    count++;
    if (main.firstChild) {
        if (main.lastChild.value == "") {
            main.lastChild.remove()
            count--;
        }
    }
    var a = event.clientX;
    var b = event.clientY;
    addNote(a, b)
    if (main.children.length > 0) {

        for (let i = 0; i < main.children.length; i++) {
            main.children[i].addEventListener("click", function (event) {
                console.log("Child Clicked...")
                event.stopPropagation();
            })
            main.children[i].addEventListener("keyup", function (event) {
                // initialCards.forEach(item => {
                //     if (item.id == currentCard.id) {
                //         console.log("Item Found...")
                //     }
                // })

                storeData(event, currentCard, count)

            })
            main.children[i].addEventListener("contextmenu", function (event) {
                event.preventDefault();
                console.log("Right Clicked ==>")
                // alert(this.id);
                const { clientX: mouseX, clientY: mouseY } = event;

                contextMenu.style.top = `${mouseY}px`;
                contextMenu.style.left = `${mouseX}px`;
                contextMenu.classList.add("visible");
                del.setAttribute("onclick",`${delCard(this.id)}`)
            })
            
        }
    }
})





window.onload = () => {
    var i = document.querySelector(".note").getAttribute("id").split("note")[1]
    animateNext(parseInt(i))
    if (main.children.length > 0) {

        for (let i = 0; i < main.children.length; i++) {
            main.children[i].addEventListener("click", function (event) {
                console.log("Child Clicked...")
                event.stopPropagation();
            })
            main.children[i].addEventListener("keyup", function (event) {
                // initialCards.forEach(item => {
                //     if (item.id == currentCard.id) {
                //         console.log("Item Found...")
                //     }
                // })

                storeData(event, currentCard, count)

            })
            main.children[i].addEventListener("contextmenu", function (event) {
                event.preventDefault();
                console.log("Right Clicked ==>")
                // alert(this.id);
                const { clientX: mouseX, clientY: mouseY } = event;

                contextMenu.style.top = `${mouseY}px`;
                contextMenu.style.left = `${mouseX}px`;
                contextMenu.classList.add("visible");
                del.setAttribute("onclick", `${delCard(this.id)}`)
                // contextMenu.firstChild().setAttribute()
            })
        }
        contextMenu.classList.remove("visible")
    }
    
    // dragElement()
    // const notes = document.querySelectorAll('.note')
    // for (let i = 0; i < notes.length; i++) {
    //     // console.log(notes[i].id)
    //     // dragElement(notes[i])
    // }
    
}

