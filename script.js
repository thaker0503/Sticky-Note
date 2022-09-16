var count = 0;
let cards = []
// console.log(JSON.parse(localStorage.getItem("cards")))
let currentCard = {};
const main = document.querySelector("main")

const textarea = document.getElementsByClassName("note")
function createCardHTML({ id, rotate, top, left, value }) {
    contextMenu.classList.remove("visible")
    var card = document.createElement("textarea")
    card.classList.add("note")
    card.setAttribute('id', id)
    card.setAttribute('onclick', 'stopProp(event)')
    card.setAttribute('onkeyup', 'storeData(event)')
    card.style.position = "absolute";
    console.log(rotate)
    card.style.transform = `rotate(${rotate}deg)`
    card.style.top = top + 'px'
    card.style.left = left + 'px'
    card.value = value;
    main.appendChild(card)
    document.getElementById(id).focus();
}

document.addEventListener('readystatechange', () => {
    const initialCards = JSON.parse(localStorage.getItem('cards') || "[]");
    initialCards.forEach(card => {
        createCardHTML(card);
    })
})


function addNote(event) {
    const rotate = randomRotate()
    count++
    var left = event.clientX;
    var top = event.clientY;
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
function stopProp(event) {
    event.stopPropagation();
}
function randomRotate() {
    return Math.floor((Math.random() * (15 - (-15) + 1) + (-15)))
}
function storeData(event) {
    event.preventDefault()
    console.log(event.target.value)
    currentCard.value = event.target.value;
    const cardIndex = cards.findIndex(c => c.id === currentCard.id);
    if (cardIndex !== -1) {
        cards[cardIndex] = currentCard;
    } else {
        if (currentCard.value !== "") {
            cards.push(currentCard);
        }
    }

    localStorage.setItem('cards', JSON.stringify(cards));
}
main.addEventListener("click", function () {
    addNote(event)
})

const contextMenu = document.getElementById("context-menu");

main.addEventListener("contextmenu", event => {
    event.preventDefault();

    const { clientX: mouseX, clientY: mouseY } = event;

    contextMenu.style.top = `${mouseY}px`
    contextMenu.style.left = `${mouseX}px`

    contextMenu.classList.add("visible");

})

for (let i = 0; i <= textarea.length; i++){
    textarea[i].addEventListener("contextmenu", event => {
        event.preventDefault();
        console.log("Right Clicked...")

        const { clientX: mouseX, clientY: mouseY } = event;

        contextMenu.style.top = `${mouseY}px`
        contextMenu.style.left = `${mouseX}px`

        contextMenu.classList.add("visible");

    })
}
