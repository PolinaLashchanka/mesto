const popupEditElement = document.querySelector('.popup-edit');
const popupEditCloseButtonElement = popupEditElement.querySelector('.popup__close-button');
const popupOpenEditButtonElement = document.querySelector('.profile__edit-button');
const editFormElement = popupEditElement.querySelector('.form');
const nameInput = editFormElement.querySelector('.form__item_user_name');
const descriptionInput = editFormElement.querySelector('.form__item_user_description');
const profileNameElement = document.querySelector('.profile__name');
const profileDescriptionElement = document.querySelector('.profile__description');


const addEditPopupVisibility = function() {
    popupEditElement.classList.add('popup_opened');
    nameInput.value = profileNameElement.textContent;
    descriptionInput.value = profileDescriptionElement.textContent;
}

popupOpenEditButtonElement.addEventListener('click', addEditPopupVisibility);

const removeVisibility = function(popupElement) {
    popupElement.classList.remove('popup_opened');
}

popupEditCloseButtonElement.addEventListener('click', () => removeVisibility(popupEditElement));

function handleEditFormSubmit (evt) {
    evt.preventDefault();
    profileNameElement.textContent = nameInput.value;
    profileDescriptionElement.textContent = descriptionInput.value;
    removeVisibility(popupEditElement);
};

editFormElement.addEventListener('submit', handleEditFormSubmit); 




const popupAddElement = document.querySelector('.popup-add');
const popupAddCloseButtonElement = popupAddElement.querySelector('.popup__close-button');
const popupOpenAddButtonElement= document.querySelector('.profile__add-button');
const addFormElement = popupAddElement.querySelector('.form');
const cardNameInput = addFormElement.querySelector('.form__item_card_name');
const cardImageInput = addFormElement.querySelector('.form__item_card_image');


const addCardAddPopupVisibility = function() {
    popupAddElement.classList.add('popup_opened');
}
popupOpenAddButtonElement.addEventListener('click', addCardAddPopupVisibility);

popupAddCloseButtonElement.addEventListener('click', () => removeVisibility(popupAddElement));



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
    }
  ]; 


  const photoGrid = document.querySelector('.photo-grid');
  const template = document.querySelector('#template-card');



  const createCard = (cardName, cardImage) => {
    const card = template.content.querySelector('.photo-grid__card').cloneNode(true);
    card.querySelector('.photo-grid__text').textContent = cardName;
    card.querySelector('.photo-grid__image').src = cardImage;
    return card;
  };

  const renderCard = (cardName, cardImage) => {
    photoGrid.prepend(createCard(cardName, cardImage));
  }

  initialCards.forEach((item) => {
    renderCard(item.name, item.link);
  });



  function handleAddFormSubmit (evt) {
    evt.preventDefault();
    const cardName = cardNameInput.value;
    const cardImage = cardImageInput.value;
    renderCard(cardName, cardImage);
    removeVisibility(popupAddElement);
};

addFormElement.addEventListener('submit', handleAddFormSubmit); 







