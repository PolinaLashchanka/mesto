

// function disableSubmit(event) {
//   event.preventDefault();
// }

// function validateFormInput(event, config) {
//   const input = event.target;
//   const inputId = input.id;
//   const errorElement = document.querySelector(`#${inputId}-error`);

//   if (!input.validity.valid) {
//     errorElement.classList.add(config.errorClass);
//     errorElement.textContent = input.validationMessage;
//     input.classList.add(config.inputErrorClass);
//   } else {
//     errorElement.classList.remove(config.errorClass);
//     errorElement.textContent = "";
//     input.classList.remove(config.inputErrorClass);
//   }
// }

// function addInputListeners(form, config) {
//   const inputList = Array.from(form.querySelectorAll(config.inputSelector));
//   inputList.forEach((input) => {
//     input.addEventListener("input", (event) => {
//       validateFormInput(event, config);
//     });
//   });
// }

// function toggleButton(form, submitButton, config) {
//   const isFormValid = form.checkValidity();

//   submitButton.disabled = !isFormValid;
//   submitButton.classList.toggle(config.inactiveButtonClass, !isFormValid);
// };

// function enableValidation(config) {
//   const formList = Array.from(document.querySelectorAll(config.formSelector));

//   formList.forEach((form) => {
//     enableFormValidation(form, config);
//   });

//   function enableFormValidation(form, config) {
//     const submitButton = form.querySelector(config.submitButtonSelector);
//     form.addEventListener("submit", disableSubmit);
//     form.addEventListener("input", () => {
//       toggleButton(form, submitButton, config);
//     });

//     addInputListeners(form, config);
//   }
// }

// enableValidation(formValidationConfig);
