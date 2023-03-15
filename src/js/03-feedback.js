import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('[name="email"]');
const textarea = document.querySelector('[name="message"]');

form.addEventListener('submit', onSubmitForm);
form.addEventListener('input', throttle(onTextareaInput, 500));

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

function onSubmitForm(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
}

function onTextareaInput(event) {
  formData.email = input.value;
  formData.message = textarea.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

populateTextarea();

function populateTextarea() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedData) {
    input.value = savedData.email;
    textarea.value = savedData.message;
  }
}
