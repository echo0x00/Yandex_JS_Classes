class Popup {
    constructor (container) {
        this.container = container;
    }

    open(popup) {
        let popupTitle = '';

        if (!!popup.objectName) {
            popupTitle = popup.title;
            popup = popup.create();
        }

        const closeButton   = document.createElement('img');
        closeButton.src     = "./images/close.svg";
        closeButton.alt     = "Close popup";

        closeButton.classList.add('popup__close');

        let classPopup = 'popup__content';
        
        if (!!popup.src) {            
            classPopup = 'popup__content-image';
        }

        const popupContent = document.createElement('div');
        popupContent.classList.add(classPopup);
        popupContent.appendChild(closeButton);

        if (popupTitle !== '') {
            const titleElement = document.createElement('h3');
            titleElement.classList.add('popup__title');
            titleElement.innerText = popupTitle;
            popupContent.appendChild(titleElement)
        }

        this.container
            .appendChild(popupContent)
                .appendChild(popup)
                       

		this.container.classList.add('popup_is-opened');
        
        this.container
            .querySelector('.popup__close')
                .addEventListener('click', this.close.bind(this));
    }

    close () {
        this.container.removeChild(this.container.firstElementChild)
        this.container.classList.remove('popup_is-opened');
    }
}