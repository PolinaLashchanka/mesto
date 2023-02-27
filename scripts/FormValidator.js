class FormValidator {
    constructor(config, form) {
        this._config = config;
        this._form = form;
    }

    _disableSubmit(event) {
        event.preventDefault();
      }

    _toggleButton(form, submitButton, config) {
        const isFormValid = form.checkValidity();
      
        submitButton.disabled = !isFormValid;
        submitButton.classList.toggle(config.inactiveButtonClass, !isFormValid);
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
          });
      }

    _enableFormValidation() {
        const submitButton = this._form.querySelector(this._config.submitButtonSelector);
        this._form.addEventListener("submit", this._disableSubmit);
        this._form.addEventListener("input", () => {
          this._toggleButton(this._form, submitButton, this._config);
        });
    
        this._addInputListeners();
    }

    enableValidation() {
        this._enableFormValidation();
      }
}

export default FormValidator;