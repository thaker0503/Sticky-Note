var count = [] || JSON.parse(localStorage.getItem("cards")).length ;
export let currentCard = {};
const main = document.querySelector("main")

console.log()

export function createCardHTML({ id, rotate, top, left, value }) {
    var divWrapper = document.createElement("div")
    divWrapper.classList.add("note-wrapper")
    var header = document.createElement("div")
    header.classList.add("header")
    divWrapper.appendChild(header)
    var card = document.createElement("textarea")
    card.classList.add("note")
    card.classList.add("show")
    // card.classList.add("animation")
    card.setAttribute('id', id)
    // card.setAttribute('onclick', `${stopProp(event)}`)
    // card.setAttribute('onkeyup', 'storeData(event)')
    card.style.position = "absolute";
    card.style.transform = `rotate(${rotate}deg)`
    card.style.top = top + 'px'
    card.style.left = left + 'px'
    // divWrapper.style.top = top + 'px'
    // divWrapper.style.left = left + 'px'
    card.value = value;
    // divWrapper.appendChild(card)
    main.appendChild(card)
}


// function randomId() {
//     return Math.floor(Math.random() * 1000)
// }

function randomRotate() {
    return Math.floor((Math.random() * (15 - (-15) + 1) + (-15)))
}

function addNote(a, b) {
    const rotate = randomRotate()
    count++
    var left = a;
    var top = b;
    currentCard = {
        left,
        top,
        rotate,
        id: `note${count}`,
        value: ""
    }
    createCardHTML(currentCard);
    if (currentCard.value !== "") {
        cards.push(currentCard);
    }
}


export { addNote }
