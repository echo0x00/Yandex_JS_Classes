class CardList {
    constructor (container) {
        this.container = container;
        this.arrayCards = [];
    }

    addCard(card) {
        this.arrayCards.push(card.cardObject);
        this._render();
    }

    _render() {
        this.arrayCards.forEach((card) => {
            this.container.appendChild(card);
        });
    }
}