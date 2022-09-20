
// document.addEventListener('readystatechange', () => {
//     const initialCards = JSON.parse(localStorage.getItem('cards') || []);
//     initialCards.forEach(card => {
//         createCardHTML(card);
//     })
// })

let cards = JSON.parse(localStorage.getItem('cards'))  || []

export function storeData(event, currentCard, count) {
    
    // count++;          
    event.preventDefault()
    currentCard.value = event.target.value;
    const cardIndex = cards.findIndex(c => c.id === currentCard.id);
    if (currentCard.value !== "") {
        if (cardIndex !== -1) {
            currentCard.id = `note${count}`
            cards[cardIndex] = currentCard;
            localStorage.setItem('cards', JSON.stringify(cards));
        } else {
                cards.push(currentCard);
            }
    } 
}