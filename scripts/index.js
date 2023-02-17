const popupEditElement = document.querySelector(".popup_edit-profile");
const popupEditCloseButtonElement = popupEditElement.querySelector(
  ".popup__close-button"
);
const popupOpenEditButtonElement = document.querySelector(
  ".profile__edit-button"
);
const popupEditFormElement = popupEditElement.querySelector(".form");
const nameInput = popupEditFormElement.querySelector(".form__item_user_name");
const descriptionInput = popupEditFormElement.querySelector(
  ".form__item_user_description"
);
const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(
  ".profile__description"
);
const popupAddElement = document.querySelector(".popup_add-card");
const popupAddCloseButtonElement = popupAddElement.querySelector(
  ".popup__close-button"
);
const popupOpenAddButtonElement = document.querySelector(
  ".profile__add-button"
);
const popupAddFormElement = popupAddElement.querySelector(".form");
const cardNameInput = popupAddFormElement.querySelector(".form__item_card_name");
const cardImageInput = popupAddFormElement.querySelector(".form__item_card_image");
const popupOpenImage = document.querySelector(".popup_open-image");
const popupImage = popupOpenImage.querySelector(".popup__image");
const popupCaption = popupOpenImage.querySelector(".popup__caption");
const popupImageCloseButton = popupOpenImage.querySelector(
  ".popup__close-button"
);
const photoGrid = document.querySelector(".photo-grid");
const template = document.querySelector("#template-card");

const removeVisibility = function (popupElement) {
  popupElement.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupByEscButton);
};

const addVisibility = function (popupElement) {
  popupElement.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupByEscButton);
};

function closePopupByEscButton (event) {
  const openedPopup = document.querySelector('.popup_opened');
  if (event.key === "Escape") {
    removeVisibility(openedPopup);
  }
};

const handleLikeButtonKlick = function (button) {
  button.classList.toggle("photo-grid__heart-button_active");
};

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = nameInput.value;
  profileDescriptionElement.textContent = descriptionInput.value;
  removeVisibility(popupEditElement);
}

const removeElement = function (element) {
  element.remove();
};

const createCard = (cardName, cardImage) => {
  const card = template.content
    .querySelector(".photo-grid__card")
    .cloneNode(true);
  const cardPic = card.querySelector(".photo-grid__image");
  card.querySelector(".photo-grid__text").textContent = cardName;
  cardPic.src = cardImage;
  cardPic.alt = cardName;

  const likeButton = card.querySelector(".photo-grid__heart-button");
  likeButton.addEventListener("click", () => handleLikeButtonKlick(likeButton));

  const deleteButton = card.querySelector(".photo-grid__card_delete-button");
  deleteButton.addEventListener("click", () => removeElement(card));

  cardPic.addEventListener("click", () => {
    addVisibility(popupOpenImage);
    popupImage.src = cardImage;
    popupCaption.textContent = cardName;
    popupImage.alt = cardName;
  });

  return card;
};

const renderCard = (cardName, cardImage, cardsContainer) => {
  cardsContainer.prepend(createCard(cardName, cardImage));
};

const renderCards = (container, cards) => {
  cards.forEach((item) => {
    renderCard(item.name, item.link, container);
  });
};

renderCards(photoGrid, initialCards);

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const cardName = cardNameInput.value;
  const cardImage = cardImageInput.value;
  renderCard(cardName, cardImage, photoGrid);
  removeVisibility(popupAddElement);
  evt.target.reset();
  evt.submitter.classList.add('form__submit-button_disabled');
}

function closePopupByClickOnOverlay(event) {
  if (event.target === event.currentTarget) {
    removeVisibility(event.currentTarget);
  }
}

popupOpenEditButtonElement.addEventListener("click", (ev) => {
  addVisibility(popupEditElement);
  nameInput.value = profileNameElement.textContent;
  descriptionInput.value = profileDescriptionElement.textContent;
  ev.stopPropagation();
});

popupEditCloseButtonElement.addEventListener("click", () =>
  removeVisibility(popupEditElement)
);

popupEditFormElement.addEventListener("submit", handleEditFormSubmit);

popupOpenAddButtonElement.addEventListener("click", () =>
  addVisibility(popupAddElement)
);

popupAddCloseButtonElement.addEventListener("click", () =>
  removeVisibility(popupAddElement)
);

popupImageCloseButton.addEventListener("click", () =>
  removeVisibility(popupOpenImage)
);

popupAddFormElement.addEventListener("submit", handleAddFormSubmit);

popupEditElement.addEventListener("click", closePopupByClickOnOverlay);

popupAddElement.addEventListener("click", closePopupByClickOnOverlay);

popupOpenImage.addEventListener("click", closePopupByClickOnOverlay);
