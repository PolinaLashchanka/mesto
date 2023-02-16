const formValidationConfig = {
  formSelector: ".form",
  inputSelector: ".form__item",
  errorClass: "form__item_error_visible",
  submitButtonSelector: ".form__submit-button",
  inactiveButtonClass: "form__submit-button_disabled",
  inputErrorClass: "form__item_type_error",
};

function disableSubmit(event) {
  event.preventDefault();
}

function validateFormInput(event, config) {
  const input = event.target;
  const inputId = input.id;
  const errorElement = document.querySelector(`#${inputId}-error`);

  if (!input.validity.valid) {
    errorElement.classList.add(config.errorClass);
    errorElement.textContent = input.validationMessage;
    input.classList.add(config.inputErrorClass);
  } else {
    errorElement.classList.remove(config.errorClass);
    errorElement.textContent = "";
    input.classList.remove(config.inputErrorClass);
  }
}

function addInputListeners(form, config) {
  const inputList = Array.from(form.querySelectorAll(config.inputSelector));
  inputList.forEach((input) => {
    input.addEventListener("input", (event) => {
      validateFormInput(event, config);
    });
  });
}

function toggleButton(form, config) {
  const buttonSubmit = form.querySelector(config.submitButtonSelector);
  const isFormValid = form.checkValidity();

  buttonSubmit.disabled = !isFormValid;
  buttonSubmit.classList.toggle(config.inactiveButtonClass, !isFormValid);
}

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((form) => {
    enableFormValidation(form, config);
  });

  function enableFormValidation(form, config) {
    form.addEventListener("submit", disableSubmit);
    form.addEventListener("input", () => {
      toggleButton(form, config);
    });

    addInputListeners(form, config);
  }
}

enableValidation(formValidationConfig);
