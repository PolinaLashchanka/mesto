const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.button__close');
const popupOpenButtonElement = document.querySelector('.button__edit');
const formElement = popupElement.querySelector('.form');
const nameInput = formElement.querySelector('.form__name');
const descriptionInput = formElement.querySelector('.form__description');
const profileNameElement = document.querySelector('.profile__name');
const profileDescriptionElement = document.querySelector('.profile__description');



const addPopupVisibility = function() {
    popupElement.classList.add('popup__opened');
    nameInput.value = profileNameElement.textContent;
    descriptionInput.value = profileDescriptionElement.textContent;
}

popupOpenButtonElement.addEventListener('click', addPopupVisibility);

const removePopupVisibility = function() {
    popupElement.classList.remove('popup__opened');
}

popupCloseButtonElement.addEventListener('click', removePopupVisibility);



function handleFormSubmit (evt) {
    evt.preventDefault();
    profileNameElement.textContent = nameInput.value;
    profileDescriptionElement.textContent = descriptionInput.value;
    popupElement.classList.remove('popup__opened')
}
formElement.addEventListener('submit', handleFormSubmit); 









