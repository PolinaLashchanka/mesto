import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(selector, handleFormSubmit) {
    super(selector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".form");
  }

  _getInputValues() {
    this._inputList = this._form.querySelectorAll(".form__item");

    this._formValues = {};
    this._inputList.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );

    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", () =>
      this._handleFormSubmit(this._getInputValues())
    );
  }

  close() {
    this._form.reset();
    super.close();
  }
}
