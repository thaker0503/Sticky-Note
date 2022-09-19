var count = 0;
let currentCard = {};
const main = document.querySelector("main")



function createCardHTML({ id, rotate, top, left, value }) {
    var card = document.createElement("textarea")
    card.classList.add("note")
    card.setAttribute('id', id)
    // card.setAttribute('onclick', `${stopProp(event)}`)
    // card.setAttribute('onkeyup', 'storeData(event)')
    card.style.position = "absolute";
    console.log(rotate)
    card.style.transform = `rotate(${rotate}deg)`
    card.style.top = top + 'px'
    card.style.left = left + 'px'
    card.value = value;
    main.appendChild(card)
}




function randomRotate() {
    return Math.floor((Math.random() * (15 - (-15) + 1) + (-15)))
}

function addNote(a,b) {
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
