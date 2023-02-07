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
    removePopupVisibility();
}
formElement.addEventListener('submit', handleFormSubmit); 





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
    photoGrid.append(createCard(cardName, cardImage));
  }

  initialCards.forEach((item) => {
    renderCard(item.name, item.link);
  });







