import { addNote } from "./create.js";





const main = document.querySelector("main")

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
    }
})

