class Card {
    constructor (name, url) {
        this.cardObject = this._create(name, url);
        this.cardObject.querySelector('.place-card__like-icon').addEventListener('click', this.like);
        this.cardObject.querySelector('.place-card__delete-icon').addEventListener('click', this.remove);
    }

    like(e) {
        e.target.classList.toggle("place-card__like-icon_liked")
    }

    remove (e) {
        e.target.closest('.place-card').remove();
    }

    _create (name, url) {
        const cardElement = document.createElement("div");
        cardElement.classList.add("place-card");

        cardElement.innerHTML =`
            <div class="place-card__image">
                <button class="place-card__delete-icon"></button>
            </div>
            <div class="place-card__description">
                <h3 class="place-card__name">${name}</h3>
                <button class="place-card__like-icon"></button>
            </div>`;

        cardElement.querySelector(".place-card__image").style.backgroundImage = `url(${url})`;

        return cardElement;  
    }
}