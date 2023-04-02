import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { formValidationConfig } from "../utils/constants.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupWithDeleteButton from "../components/PopupWithDeleteButton.js";
import "./index.css";

const editForm = document.querySelector(".popup__edit-form");
const addForm = document.querySelector(".popup__add-form");
const editAvatarForm = document.querySelector(".popup__edit-avatar-form");

const editFormValidator = new FormValidator(formValidationConfig, editForm);
const addFormValidator = new FormValidator(formValidationConfig, addForm);
const editAvatarFormValidator = new FormValidator(
  formValidationConfig,
  editAvatarForm
);

editFormValidator.enableValidation();
addFormValidator.enableValidation();
editAvatarFormValidator.enableValidation();

const popupOpenEditButtonElement = document.querySelector(
  ".profile__edit-button"
);
const popupOpenAddButtonElement = document.querySelector(
  ".profile__add-button"
);

const popupOpenEditAvatarButtonElement = document.querySelector(
  ".profile__avatar_edit-button"
);

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-62/",
  headers: {
    authorization: "e2f559fb-ddf4-4c99-8ad8-fe195d8e449b",
    "content-type": "application/json",
  },
});

function handleEditFormSubmit(userData) {
  editPopup.renderSubmiting(true);
  api
    .editProfile({ name: userData.userName, about: userData.userDescription })
    .then((res) => {
      userInfo.setUserInfo(res);
      editPopup.close();
    })
    .catch((err) => console.log(err))
    .finally(() => editPopup.renderSubmiting(false));
}

function handleEditAvatarFormSubmit(userData) {
  editAvatarPopup.renderSubmiting(true);
  api
    .editAvatar({ avatar: userData.avatarLink })
    .then((res) => {
      userInfo.setUserInfo(res);
      editAvatarPopup.close();
    })
    .catch((err) => console.log(err))
    .finally(()=> editAvatarPopup.renderSubmiting(false));
}

const imgPopup = new PopupWithImage(".popup_open-image");
const editPopup = new PopupWithForm(
  ".popup_edit-profile",
  handleEditFormSubmit
);
const addPopup = new PopupWithForm(".popup_add-card", handleAddFormSubmit);
const deleteCardPopup = new PopupWithDeleteButton(".popup_delete-card", api);
const editAvatarPopup = new PopupWithForm(
  ".popup_edit-avatar",
  handleEditAvatarFormSubmit
);

imgPopup.setEventListeners();
editPopup.setEventListeners();
addPopup.setEventListeners();
deleteCardPopup.setEventListeners();
editAvatarPopup.setEventListeners();

const userInfo = new UserInfo({
  name: ".profile__name",
  description: ".profile__description",
  avatar: ".profile__avatar_image",
});

const section = new Section({ renderer: cardRenderer }, ".photo-grid");

function attachCardData(popup, card) {
  popup.open(card);
}

function cardRenderer(cardData) {
  const newCard = new Card(
    cardData,
    "#template-card",
    (card) => {
      attachCardData(imgPopup, card);
    },
    (id, card) => deleteCardPopup.open(id, card),
    api
  );
  const element = newCard.createCard(userInfo.getUserInfo());

  return element;
}

function handleAddFormSubmit({ cardName, cardImage }) {
  addPopup.renderSubmiting(true);
  api
    .addNewCard({ name: cardName, link: cardImage })
    .then((res) => {
      section.addItem(cardRenderer(res));
      addPopup.close();
      addFormValidator.toggleButton();
    })
    .catch((err) => console.log(err))
    .finally(() => addPopup.renderSubmiting(false));
}

popupOpenEditButtonElement.addEventListener("click", (ev) => {
  editPopup.open();
  const userData = userInfo.getUserInfo();
  editPopup.setInputValues(userData);
  ev.stopPropagation();
});

popupOpenAddButtonElement.addEventListener("click", () => addPopup.open());

popupOpenEditAvatarButtonElement.addEventListener("click", () =>
  editAvatarPopup.open()
);

api
  .getInitialCards()
  .then((data) => {
    section.renderItems(data.reverse());
  })
  .catch((err) => console.log(err));

api
  .getUserInfo()
  .then((res) => userInfo.setUserInfo(res))
  .catch((err) => console.log(err));
