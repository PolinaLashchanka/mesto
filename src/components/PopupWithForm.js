import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(selector, handleFormSubmit) {
    super(selector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".form");
    this._inputList = this._form.querySelectorAll(".form__item");
    this._button = this._form.querySelector(".button");
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );

    return this._formValues;
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", () => {
      const initialText = this._button.textContent;
      this._button.textContent = "Сохранение...";
      this._handleFormSubmit(this._getInputValues())
        .then(() => this.close())
        .finally(() => {
          this._button.textContent = initialText;
        });
    });
  }

  close() {
    this._form.reset();
    super.close();
  }
}
