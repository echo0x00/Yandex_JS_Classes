const cards = document.querySelector('.places-list');
const userInfoName = document.querySelector('.user-info__name');
const userInfoJob = document.querySelector('.user-info__job');
const popupTemplate = document.querySelector("#popup");

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
    {
        name: 'Нургуш',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg'
    },
    {
        name: 'Тулиновка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg'
    },
    {
        name: 'Остров Желтухина',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg'
    },
    {
        name: 'Владивосток',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg'
    }
];

function addCard() {
	const form = new Form(
		[
			{
				type: 'text',
				value: '',
				inputName: 'name',
				className: 'popup__input_type_name',
				placeholder: 'Название',
				validator: Validator.validateString
			},
			{
				type: 'text',
				value: '',
				inputName: 'link',
				className: 'popup__input_type_link-url',
				placeholder: 'Ссылка на картинку',
				validator: Validator.validateLink
			}
		],
		{ 
            title: 'Новое место', 
            submitText: '+', 
            formName: 'new', 
            submitCallback: (name, url) => {
                cardList.addCard(new Card(name, url, popup));
                popup.close();
            } 
        }
    );
    
	popup.open(form);
	form.validate();
}

function editProfile() {
	const nameField = userInfoName.textContent;
	const jobField = userInfoJob.textContent;
	const form = new Form(
		[
			{
				type: 'text',
				inputName: 'name',
				className: '',
				value: nameField,
				placeholder: 'Имя',
				validator: Validator.validateString
			},
			{
				type: 'text',
				inputName: 'job',
				className: '',
				value: jobField,
				placeholder: '"О себе',
				validator: Validator.validateString
			}
		],
		{ 
            title: 'Редактировать профиль', 
            submitText: 'Сохранить', 
            formName: 'profile', 
            submitCallback: (name, job) => {
                userInfoName.textContent = name;
                userInfoJob.textContent = job;
                popup.close(); 
            }
        }
    );
    
	popup.open(form);
	form.validate();
}

const popup = new Popup(popupTemplate);
const cardList  = new CardList(cards);

initialCards.forEach(function(item) {
    const card = new Card(item.name, item.link, popup);
    cardList.addCard(card);
});

const button = document.querySelector('.user-info__button');
button.addEventListener('click', addCard);

const buttonEdit = document.querySelector('.button.user-info__edit');
buttonEdit.addEventListener('click', editProfile);