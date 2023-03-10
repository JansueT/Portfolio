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

const store = (key, value) => {
  localStorage.setItem(key, value);
};

const saveForm = (event) => {
  const formdata = {};
  event.preventDefault();
  if (formElement.elements.name.value) {
    formdata.name = formElement.elements.name.value;
  }
  if (formElement.elements.email.value) {
    formdata.email = formElement.elements.email.value;
  }
  if (formElement.elements.text.value) {
    formdata.text = formElement.elements.text.value;
  }
  store('formdata', JSON.stringify(formdata));
};

formElement.elements.name.addEventListener('input', saveForm);
formElement.elements.email.addEventListener('input', saveForm);
formElement.elements.text.addEventListener('input', saveForm);

const showSavedData = () => {
  if (localStorage.getItem('formdata') !== true) return;
  const userData = JSON.parse(localStorage.getItem('formdata'));
  formElement.elements.name.value = userData.name;
  formElement.elements.email.value = userData.email;
  formElement.elements.text.value = userData.text;
};

showSavedData();
