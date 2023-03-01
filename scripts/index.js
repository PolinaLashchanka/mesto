import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { initialCards, formValidationConfig } from "./constants.js";

const editForm = document.querySelector(".popup__edit-form");
const addForm = document.querySelector(".popup__add-form");

const editFormValidator = new FormValidator(
  formValidationConfig,
  editForm
);
const addFormValidator = new FormValidator(
  formValidationConfig,
  addForm
);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

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
const cardNameInput = popupAddFormElement.querySelector(
  ".form__item_card_name"
);
const cardImageInput = popupAddFormElement.querySelector(
  ".form__item_card_image"
);
const popupOpenImage = document.querySelector(".popup_open-image");
const popupImageCloseButton = popupOpenImage.querySelector(
  ".popup__close-button"
);
const photoGrid = document.querySelector(".photo-grid");


function closePopupByEscButton(event) {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    removeVisibility(openedPopup);
  }
}

const removeVisibility = function (popupElement) {
  popupElement.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupByEscButton);
};

const addVisibility = function (popupElement) {
  popupElement.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupByEscButton);
};

const attachCardData = function (popupElement, card) {
  const popupImage = popupElement.querySelector(".popup__image");
  const popupCaption = popupElement.querySelector(".popup__caption");
  popupElement.classList.add("popup_opened");
  popupImage.src = card.link;
  popupCaption.textContent = card.name;
  popupImage.alt = card.name;
};

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = nameInput.value;
  profileDescriptionElement.textContent = descriptionInput.value;
  removeVisibility(popupEditElement);
}

const renderCard = (cardData, cardsContainer) => {
  const newCard = new Card(cardData, "#template-card", (card) => {
    attachCardData(popupOpenImage, card);
    addVisibility(popupOpenImage);
  });
  cardsContainer.prepend(newCard.createCard());
};

const renderCards = (container, cards) => {
  cards.forEach((item) => {
    renderCard(item, container);
  });
};

renderCards(photoGrid, initialCards);

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const cardName = cardNameInput.value;
  const cardImage = cardImageInput.value;
  renderCard({ name: cardName, link: cardImage }, photoGrid);
  removeVisibility(popupAddElement);
  evt.target.reset();
  addFormValidator.toggleButton();
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
