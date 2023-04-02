import Popup from "./Popup.js";

export default class PopupWithDeleteButton extends Popup {
  constructor(selector, api) {
    super(selector);
    this._submitButton = this._popup.querySelector('.popup__submit-button');
    this._card = {};
    this._api = api;
  }

  setEventListeners() {
    super.setEventListeners();
    this._submitButton.addEventListener("click", () => {
        this._api.deleteCard(this._id).then(() => {
          this._card.remove();
        }).catch((err) => console.log(err));
        this.close();
    }
      
    );
  }

  open(id, card) {
    this._id = id;
    this._card = card;
    super.open();
  } 
}