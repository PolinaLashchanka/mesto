export default class Popup {
  constructor(selector) {
    this._popup = document.querySelector(selector);
    this._boundFunction = this._handleEscClose.bind(this);
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._boundFunction);
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._boundFunction);
  }

  setEventListeners() {
    const closeButton = this._popup.querySelector(".popup__close-button");
    closeButton.addEventListener("click", () => this.close());
    this._popup.addEventListener(
      "click",
      this._closePopupByClickOnOverlay.bind(this)
    );
  }

  _closePopupByClickOnOverlay(event) {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }
}
