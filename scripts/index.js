const popupEditElement = document.querySelector('.popup_edit-profile');
const popupEditCloseButtonElement = popupEditElement.querySelector('.popup__close-button');
const popupOpenEditButtonElement = document.querySelector('.profile__edit-button');
const editFormElement = popupEditElement.querySelector('.form');
const nameInput = editFormElement.querySelector('.form__item_user_name');
const descriptionInput = editFormElement.querySelector('.form__item_user_description');
const profileNameElement = document.querySelector('.profile__name');
const profileDescriptionElement = document.querySelector('.profile__description');


const addVisibility = function(popupElement) {
  popupElement.classList.add('popup_opened');
}

const removeVisibility = function(popupElement) {
  popupElement.classList.remove('popup_opened');
}


popupOpenEditButtonElement.addEventListener('click', () => {
    addVisibility(popupEditElement);
    nameInput.value = profileNameElement.textContent;
    descriptionInput.value = profileDescriptionElement.textContent;
});

popupEditCloseButtonElement.addEventListener('click', () => removeVisibility(popupEditElement));

function handleEditFormSubmit (evt) {
    evt.preventDefault();
    profileNameElement.textContent = nameInput.value;
    profileDescriptionElement.textContent = descriptionInput.value;
    removeVisibility(popupEditElement);
};

editFormElement.addEventListener('submit', handleEditFormSubmit); 


const popupAddElement = document.querySelector('.popup_add-card');
const popupAddCloseButtonElement = popupAddElement.querySelector('.popup__close-button');
const popupOpenAddButtonElement= document.querySelector('.profile__add-button');
const addFormElement = popupAddElement.querySelector('.form');
const cardNameInput = addFormElement.querySelector('.form__item_card_name');
const cardImageInput = addFormElement.querySelector('.form__item_card_image');


popupOpenAddButtonElement.addEventListener('click', () => addVisibility(popupAddElement));

popupAddCloseButtonElement.addEventListener('click', () => removeVisibility(popupAddElement));


  const photoGrid = document.querySelector('.photo-grid');
  const template = document.querySelector('#template-card');
  
  const createCard = (cardName, cardImage) => {
    const card = template.content.querySelector('.photo-grid__card').cloneNode(true);
    card.querySelector('.photo-grid__text').textContent = cardName;
    card.querySelector('.photo-grid__image').src = cardImage;

    const likeButton = card.querySelector('.photo-grid__heart-button');
    const likeHeartButton = function () {
        likeButton.classList.toggle('photo-grid__heart-button_active');
    };
    likeButton.addEventListener('click', likeHeartButton);

    const deleteButton = card.querySelector('.photo-grid__card_delete-button');
    deleteButton.addEventListener('click', () => {
        card.remove();
    })


    const popupOpenImage = document.querySelector('.popup_open-image');
    const popupImage = popupOpenImage.querySelector('.popup__image');
    const popupCaption = popupOpenImage.querySelector('.popup__caption');
    const popupImageCloseButton = popupOpenImage.querySelector('.popup__close-button');

    const openCardImage = card.querySelector('.photo-grid__image');
    openCardImage.addEventListener('click', () => {
        addVisibility(popupOpenImage);
        popupImage.src = cardImage;
        popupCaption.textContent = cardName;
    });

    popupImageCloseButton.addEventListener('click', () => removeVisibility(popupOpenImage));

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
    cardNameInput.value = '';
    cardImageInput.value = '';
  };

addFormElement.addEventListener('submit', handleAddFormSubmit); 








