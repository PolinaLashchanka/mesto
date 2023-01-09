const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const formElement = popupElement.querySelector('.form');
const nameInput = formElement.querySelector('.form__item_user_name');
const descriptionInput = formElement.querySelector('.form__item_user_description');
const profileNameElement = document.querySelector('.profile__name');
const profileDescriptionElement = document.querySelector('.profile__description');



const addPopupVisibility = function() {
    popupElement.classList.add('popup_opened');
    nameInput.value = profileNameElement.textContent;
    descriptionInput.value = profileDescriptionElement.textContent;
}

popupOpenButtonElement.addEventListener('click', addPopupVisibility);

const removePopupVisibility = function() {
    popupElement.classList.remove('popup_opened');
}

popupCloseButtonElement.addEventListener('click', removePopupVisibility);



function handleFormSubmit (evt) {
    evt.preventDefault();
    profileNameElement.textContent = nameInput.value;
    profileDescriptionElement.textContent = descriptionInput.value;
    popupElement.classList.remove('popup_opened')
}
formElement.addEventListener('submit', handleFormSubmit); 









