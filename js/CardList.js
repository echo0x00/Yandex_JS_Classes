class CardList {
    constructor (container, arrayCards) {
        this.container = container;
        this.arrayCards = arrayCards;
    }

    addCard(name, url) {
        const { cardObject } = new Card(name, url); 
        this.arrayCards.push(cardObject);
        this.container.appendChild(cardObject);
    }

    render() {
        this.arrayCards.forEach((card) => {
            this.container.appendChild(card.cardObject);
        });
    }
}