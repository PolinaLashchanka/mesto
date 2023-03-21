import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._popupImage = this._popup.querySelector(".popup__image");
    this._popupCaption = this._popup.querySelector(".popup__caption");
  }
  open({ link, name }) {
    this._popupImage.src = link;
    this._popupCaption.textContent = name;
    this._popupImage.alt = name;
    super.open();
  }
}
