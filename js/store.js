
// document.addEventListener('readystatechange', () => {
    // const initialCards = JSON.parse(localStorage.getItem('cards') || "[]");
    // initialCards.forEach(card => {
    //     createCardHTML(card);
    // })
// })

let cards = JSON.parse(localStorage.getItem('cards'))  || []

export function storeData(event, currentCard) {
    event.preventDefault()
    currentCard.value = event.target.value;
    const cardIndex = cards.findIndex(c => c.id === currentCard.id);
    if (cardIndex !== -1) {
        cards[cardIndex] = currentCard;
    } else {
        cards.push(currentCard);
    }

    localStorage.setItem('cards', JSON.stringify(cards));
}