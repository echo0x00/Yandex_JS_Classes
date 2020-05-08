class Card {
    constructor (name, url, popupObject) {
        this._name = name;
        this._url  = url;
        this._popup = popupObject;
        this.cardObject = this._create();
        this.cardObject.querySelector('.place-card__like-icon').addEventListener('click', this._like);
        this.cardObject.querySelector('.place-card__delete-icon').addEventListener('click', this._remove);
    }

    _like(e) {
        e.target.classList.toggle("place-card__like-icon_liked")
    }

    _remove (e) {
        e.target.closest('.place-card').remove();
    }

    _create () {
        const cardElement = document.createElement("div");
        cardElement.classList.add("place-card");

        //вот тут XSS уязвимость картинки, но сходу не сооражу как закрыть без обработки 
        cardElement.innerHTML =`
            <div class="place-card__image" style="background-image: url(${this._url})">
                <button class="place-card__delete-icon"></button>
            </div>
            <div class="place-card__description">
                <h3 class="place-card__name"></h3>
                <button class="place-card__like-icon"></button>
            </div>`;
        
        ///защита от XSS
        cardElement.querySelector('.place-card__name').innerText = this._name;

        cardElement.addEventListener('click', (event) => {
            const bigSizeImage = document.createElement("img");
            bigSizeImage.classList.add("popup__image");
            bigSizeImage.src = this._url;
            bigSizeImage.alt = this._name;
    
            if (event.target.className === 'place-card__image') {
                this._popup.open(bigSizeImage);
            }
        })

        return cardElement;  
    }
}