import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { initialCards, formValidationConfig } from "../utils/constants.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

import "./index.css";

const editForm = document.querySelector(".popup__edit-form");
const addForm = document.querySelector(".popup__add-form");

const editFormValidator = new FormValidator(formValidationConfig, editForm);
const addFormValidator = new FormValidator(formValidationConfig, addForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

const popupOpenEditButtonElement = document.querySelector(
  ".profile__edit-button"
);
const popupOpenAddButtonElement = document.querySelector(
  ".profile__add-button"
);

function handleEditFormSubmit(userData) {
  userInfo.setUserInfo(userData);
  editPopup.close();
}

const imgPopup = new PopupWithImage(".popup_open-image");
const editPopup = new PopupWithForm(
  ".popup_edit-profile",
  handleEditFormSubmit
);
const addPopup = new PopupWithForm(".popup_add-card", handleAddFormSubmit);

imgPopup.setEventListeners();
editPopup.setEventListeners();
addPopup.setEventListeners();

const userInfo = new UserInfo({
  name: ".profile__name",
  description: ".profile__description",
});

function attachCardData(popup, card) {
  popup.open(card);
}

function cardRenderer(cardData) {
  const newCard = new Card(cardData, "#template-card", (card) => {
    attachCardData(imgPopup, card);
  });
  const element = newCard.createCard();

  return element;
}

const section = new Section(
  { items: initialCards.reverse(), renderer: cardRenderer },
  ".photo-grid"
);
section.renderItems();

function handleAddFormSubmit({ cardName, cardImage }) {
  section.addItem(cardRenderer({ name: cardName, link: cardImage }));
  addPopup.close();
  addFormValidator.toggleButton();
}

popupOpenEditButtonElement.addEventListener("click", (ev) => {
  editPopup.open();
  const userData = userInfo.getUserInfo();
  editPopup.setInputValues(userData);
  ev.stopPropagation();
});

popupOpenAddButtonElement.addEventListener("click", () => addPopup.open());
