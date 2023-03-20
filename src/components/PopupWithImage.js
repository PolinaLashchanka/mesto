import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  open({ link, name }) {
    const popupImage = this._popup.querySelector(".popup__image");
    const popupCaption = this._popup.querySelector(".popup__caption");
    popupImage.src = link;
    popupCaption.textContent = name;
    popupImage.alt = name;
    super.open();
  }
}
