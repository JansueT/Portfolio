const menuIconElement = document.getElementById('menu_icon');
const menuElement = document.getElementById('menu');
const closeMenuElement = document.getElementById('close_menu_icon');
const links = document.getElementsByClassName('nav_items');
const logo = document.querySelector('.header_logo');

menuIconElement.addEventListener('click', () => {
  menuIconElement.classList.add('hide_menu');
  menuElement.classList.add('cansu_menu');
  document.body.style.overflowY = 'hidden';
  closeMenuElement.classList.remove('hide_menu');
  logo.classList.add('hide_menu');
});

closeMenuElement.addEventListener('click', () => {
  menuIconElement.classList.remove('hide_menu');
  document.body.style.overflowY = 'scroll';
  closeMenuElement.classList.add('hide_menu');
  menuElement.classList.remove('cansu_menu');
  logo.classList.remove('hide_menu');
});

for (let i = 0; i < links.length; i += 1) {
  links[i].addEventListener('click', () => {
    document.body.style.overflowY = 'scroll';
    menuIconElement.classList.remove('hide_menu');
    menuElement.classList.remove('cansu_menu');
    closeMenuElement.classList.add('hide_menu');
    logo.classList.remove('hide_menu');
  });
}

const smallElement = document.getElementById('error');
const emailElement = document.getElementById('email_id');
const formElement = document.getElementById('form_id');

formElement.addEventListener('submit', (event) => {
  if (emailElement.value.toLowerCase() !== emailElement.value) {
    event.preventDefault();
    smallElement.innerText = 'please type all email charaters in lowercase. form was not submitted';
  }
});

const formInput = document.getElementById('form_id');

const store = (key, value) => {
  localStorage.setItem(key, value);
};

const saveForm = (event) => {
  const data = {};
  event.preventDefault();
  if (formInput.elements.name.value) {
    data.name = formInput.elements.name.value;
  }
  if (formInput.elements.email.value) {
    data.email = formInput.elements.email.value;
  }
  if (formInput.elements.text.value) {
    data.text = formInput.elements.text.value;
  }
  store('data', JSON.stringify(data));
  window.localStorage.setItem('formdata', data);
};
formInput.elements.name.addEventListener('input', saveForm);
formInput.elements.email.addEventListener('input', saveForm);
formInput.elements.text.addEventListener('input', saveForm);

const showSavedData = () => {
  if (localStorage.getItem('data')) {
    const userData = JSON.parse(localStorage.getItem('data'));
    formInput.elements.name.value = userData.name;
    formInput.elements.email.value = userData.email;
    formInput.elements.text.value = userData.text;
  }
};

showSavedData();

formInput.addEventListener('submit', saveForm);
