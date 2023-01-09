const menuIconElement = document.getElementById('menu_icon');
const menuElement = document.getElementById('menu');
const closeMenuElement = document.getElementById('close_menu_icon');
const links = document.getElementsByClassName('nav_items');
const logo = document.querySelector('.header_logo');
// const btnGreenPopup = document.querySelector('.btngreen');

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

const projects = [
  {
    id: 1,
    image: '#',
    title: 'Multi-Post Stories Gain+Glory',
    explantion: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
    and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    mechanizations: {
      mech0: 'Rubi on rails',
      mech1: 'css',
      mech2: 'JavaScript',
      mech3: 'html',
    },
    linkL: '#',
    linkS: 'https://github.com/JansueT',
  },
  {
    id: 2,
    image: '#',
    title: 'Multi-Post Stories Gain+Glory',
    explantion: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
    and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    mechanizations: {
      mech0: 'Rubi on rails',
      mech1: 'css',
      mech2: 'JavaScript',
      mech3: 'html',
    },
    linkL: '#',
    linkS: 'https://github.com/JansueT',
  },
  {
    id: 3,
    image: '#',
    title: 'Multi-Post Stories Gain+Glory',
    explantion: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
    and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    mechanizations: {
      mech0: 'Rubi on rails',
      mech1: 'css',
      mech2: 'JavaScript',
      mech3: 'html',
    },
    linkL: '#',
    linkS: 'https://github.com/JansueT',
  },
  {
    id: 4,
    image: '#',
    title: 'Multi-Post Stories Gain+Glory',
    explantion: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
    and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    mechanizations: {
      mech0: 'Rubi on rails',
      mech1: 'css',
      mech2: 'JavaScript',
      mech3: 'html',
    },
    linkL: '#',
    linkS: 'https://github.com/JansueT',
  },
  {
    id: 5,
    image: '#',
    title: 'Multi-Post Stories Gain+Glory',
    explantion: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
    and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    mechanizations: {
      mech0: 'Rubi on rails',
      mech1: 'css',
      mech2: 'JavaScript',
      mech3: 'html',
    },
    linkL: '#',
    linkS: 'https://github.com/JansueT',
  },
  {
    id: 6,
    image: 'Snapshoot Portfolio.png',
    title: 'Multi-Post Stories Gain+Glory',
    explantion: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
    and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    mechanizations: {
      mech0: 'Rubi on rails',
      mech1: 'css',
      mech2: 'JavaScript',
      mech3: 'html',
    },
    linkL: '#',
    linkS: 'https://github.com/JansueT',
  },
];

const cards = () => {
  const card = projects.map(
    (item) => ` <div class='card'>
            <div class='imgplacesholder'></div>
            <div class='container'>
                <h2 class='popup_engin engin' >
                   ${item.title}
                </h2>
                <ul class='eylem'>
                    <li class='irem'>
                        <button type='button' class='btn1'>
                        ${item.mechanizations.mech0}
                        </button>
                    </li>
                    <li class='irem'>
                        <button type='button' class='btn1'>
                        ${item.mechanizations.mech1}
                            </button>
                        </li>
                        <li class='irem'>
                            <button type='button' class='btn1'>
                            ${item.mechanizations.mech2}
                            </button>
                        </li>
                        <li class='irem'>
                            <button type='button' class='btn1'>
                            ${item.mechanizations.mech3}
                            </button>
                        </li>
                    </ul>
                <button type='button' onclick='popupDetails(${item.id})'  class='btngreen'>
                 See Project
                </button>
              </div>  
            </div>`,
  );
  return card;
};
window.addEventListener('load', () => {
  document.getElementById('cards_container').innerHTML = cards().join('');
});
const check1 = { title1: 'Keeping track of hundreds of components' };
const popupContainer = document.getElementById('popup_window_container');
// const poWindow = document.getElementById('popup_window');
// eslint-disable-next-line no-unused-vars
const closeWindow = () => {
  popupContainer.innerHTML = '';
  popupContainer.style.padding = '0';
  document
    .getElementsByClassName('popup_engin')[0]
    .classList.remove('popup_engin');
};

// eslint-disable-next-line no-unused-vars
const popupDetails = (projectId) => {
  if (projectId == null) return;
  let check = projects.filter((elem) => elem.id === projectId);
  check = check.shift();
  const popupWindow = `<div id='popup_window' class='popup_window' >
    <div class='container'>
        <img class='popup_x' id='close_popup' onclick='closeWindow()' src='/images/x.png' alt='close-icon'>
        <img class='popup_img'  src='/images/Snapshoot Portfolio.png' alt='Snapshoot' />
        <h2 class='popup_engin engin'>
            ${check1.title1}
        </h2>
        <ul class='eylem'>
            <li class='irem'>
                <button type='button' class='btn1'>
                ${check.mechanizations.mech0}
                </button>
            </li>
            <li class='irem'>
                <button type='button' class='btn1'>
                ${check.mechanizations.mech1}
                    </button>
                </li>
                <li class='irem'>
                    <button type='button' class='btn1'>
                    ${check.mechanizations.mech2}
                    </button>
                </li>
                <li class='irem'>
                            <button type='button' class='btn1'>
                            ${check.mechanizations.mech3}
                            </button>
                        </li>
            </ul>
            <p class='popup_p'>${check.explantion}</p>
        <div class='popup_buttoms'>
            <a href='#' target='_blank' class='btngreen1'>
            <span>See Live</span> <img src='./images/see live icon.png' alt='see-live-icon'>
            </a>
            <a href='#' target='_blank'  class='btngreen1'>
            See Source <img src='./images/github.png' alt='github-icon'>
            </a>
        </div>
    </div>
  </div>`;
  popupContainer.innerHTML = popupWindow;
  popupContainer.style.padding = '25px 15px';
};

const bodyElement = document.getElementById('body');

setTimeout(() => {
  if (document.getElementById('popup_window') === null) {
    bodyElement.style.overflow = 'auto';
  } else {
    bodyElement.style.overflow = 'hidden';
  }
}, 1);

const smallElement = document.getElementById('error');
const emailElement = document.getElementById('email_id');
const formElement = document.getElementById('form_id');

formElement.addEventListener('submit', (event) => {
  if (emailElement.value.toLowerCase() !== emailElement.value) {
    event.preventDefault();
    smallElement.innerText = 'please type all email charaters in lowercase. form was not submitted';
  }
});

