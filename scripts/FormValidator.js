class FormValidator {
    constructor(config, form) {
        this._config = config;
        this._form = form;
        this._button = this._form.querySelector(".form__submit-button");
    }

    _disableSubmit(event) {
        event.preventDefault();
      }

    toggleButton() {
        const isFormValid = this._form.checkValidity();
      
        this._button.disabled = !isFormValid;
        this._button.classList.toggle(this._config.inactiveButtonClass, !isFormValid);
      };

    _validateFormInput(event) {
        const input = event.target;
        const inputId = input.id;
        const errorElement = document.querySelector(`#${inputId}-error`);
      
        if (!input.validity.valid) {
          errorElement.classList.add(this._config.errorClass);
          errorElement.textContent = input.validationMessage;
          input.classList.add(this._config.inputErrorClass);
        } else {
          errorElement.classList.remove(this._config.errorClass);
          errorElement.textContent = "";
          input.classList.remove(this._config.inputErrorClass);
        }
      };

    _addInputListeners() {
        this._form.addEventListener("input", (event) => {
            this._validateFormInput(event);
            this.toggleButton();
          });
      }

    _enableFormValidation() {
        this._form.addEventListener("submit", this._disableSubmit);
    
        this._addInputListeners();
    }

    enableValidation() {
        this._enableFormValidation();
      }
}

export default FormValidator;