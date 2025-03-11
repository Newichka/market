// const cards = document.querySelectorAll('.card');
let icon='<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#FFFFFF" class="bi bi-bootstrap" viewBox="0 0 16 16"><path d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z"/><path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3z"/></svg>'
// let icon = './bootstrap.svg';
const cardDataOsnova = [
  {title: 'Вывески', price: 'От 5000 руб', svg: icon, png: src='./png/1841.png', style: 'background-color: rgba(53, 47, 47, 0.75)'},
  {title: 'Объёмные буквы', price: 'От 60 руб/см', svg: icon, png: src='"https://papik.pro/uploads/posts/2023-03/1677754698_papik-pro-p-bukva-k-krasivaya-risunok-obemnaya-20.jpg"', style: 'background-color: rgba(80, 59, 45, 0.75)'},
  {title: 'Гибкий неон', price: 'От 2000 руб', svg: icon, png: src='./pngUslugi/18438.png', style: 'background-color: rgba(94, 19, 19, 0.75)'},
  {title: 'Согласование рекламы', price: 'От 1000 руб', svg: icon, png: src='"https://i.pinimg.com/736x/cc/e1/ac/cce1acd019607c0ae4d3b62db7b85b7f.jpg"', style: 'background-color: rgba(190, 180, 36, 0.75)'},
  {title: 'Брендирование транспорта', price: 'От 1500 руб', svg: icon, png: src='"https://png.pngtree.com/element_origin_min_pic/16/11/10/33c89242a87cefcb564adbdcfa1f4f8e.jpg"', style: 'background-color: rgba(135, 82, 158, 0.75)'},
  {title: 'Стенды', price: 'От 1000 руб', svg: icon, png: src='"https://static.baza.farpost.ru/v/1521438603967_bulletin"', style: 'background-color: rgba(53, 47, 47, 0.75)'},
  {title: 'УФ печать', price: 'От 500 руб', svg: icon, png: src='"https://roskard.ru/wp-content/uploads/2020/05/a42f7cef815663279db6c2e35af2e9ab-640x640.jpg"', style: 'background-color: rgba(157, 18, 150, 0.75)'},
  {title: 'Широкоформатная печать', price: 'От 300 руб', svg: icon, png: src='./pngUslugi/18444.png', style: 'background-color: rgba(42, 191, 194, 0.75)'},
  {title: 'Наклейки', price: 'От 10 руб/шт', svg: icon, png: src='./png/1847.png', style: 'background-color: rgba(42, 104, 16, 0.75)'},
  {title: 'Таблички', price: 'От 300 руб', svg: icon, png: src='./png/18412.png', style: 'background-color: rgba(103, 197, 206, 0.75)'},
  {title: 'Фрезеровкв', price: 'От 30 руб', svg: icon, png: src='./png/1846.png', style: 'background-color: rgba(194, 119, 49, 0.75)'},
  {title: 'Панелькронштейны', price: 'От 8000 руб', svg: icon, png: src='./png/18431.png', style: 'background-color: rgba(85, 11, 64, 0.75)'},
];

const cardDataRecklama = [
  {title: 'Вывески', price: 'От 5000 руб', svg: icon, href:"./Viveski.html", png: src='./png/1841.png', style: 'background-color: rgba(53, 47, 47, 0.75)'},
  {title: 'Интерьерные вывески', price: 'От 5000 руб', svg: icon, href:"#", png: src='./pngUslugi/18424.png', style: 'background-color: rgba(95, 42, 34, 0.75)'},
  {title: 'Объёмные буквы', price: 'От 60 руб/см', svg: icon, href:"#", png: src='"https://papik.pro/uploads/posts/2023-03/1677754698_papik-pro-p-bukva-k-krasivaya-risunok-obemnaya-20.jpg"', style: 'background-color: rgba(80, 59, 45, 0.75)'},  
  {title: 'Согласование рекламы', price: 'От 1000 руб', svg: icon, href:"#", png: src='"https://i.pinimg.com/736x/cc/e1/ac/cce1acd019607c0ae4d3b62db7b85b7f.jpg"', style: 'background-color: rgba(190, 180, 36, 0.75)'},
  {title: 'Световые короба', price: 'От 9000 руб/м', svg: icon, href:"#", png: src='./pngUslugi/18433.png', style: 'background-color: rgba(32, 38, 90, 0.75)'},
  {title: 'Гибкий неон', price: 'От 2000 руб', svg: icon, href:"#", png: src='./pngUslugi/18438.png', style: 'background-color: rgba(96, 35, 35, 0.75)'},
  {title: 'Панелькронштейны', price: 'От 8000 руб', svg: icon, href:"#", png: src='./pngUslugi/18431(1).png', style: 'background-color: rgba(34, 65, 94, 0.75)'},
  {title: 'Крышные установки', price: 'От 15000 руб', svg: icon, href:"#", png: src='./pngUslugi/Rectangle4.png', style: 'background-color: rgba(43, 105, 114, 0.75)'},
  {title: 'Оформление витрин', price: 'От 1000 руб', svg: icon, href:"#", png: src='./pngUslugi/18434.png', style: 'background-color: rgba(35, 102, 93, 0.75)'},
  {title: 'Пилоны и стеллы', price: 'От 30000 руб', svg: icon, href:"#", png: src='./pngUslugi/18425.png', style: 'background-color: rgba(34, 63, 135, 0.75)'},
  {title: 'Брендирование транспорта', price: 'От 1500 руб', svg: icon, href:"#", png: src='./pngUslugi/Rectangle4(1).png', style: 'background-color: rgba(135, 82, 158, 0.75)'},
  {title: 'Живая реклама (пайетки)', price: 'От 10000 руб', svg: icon, href:"#", png: src='./pngUslugi/18427.png', style: 'background-color: rgba(129, 46, 46, 0.75)'},
  {title: 'Стенды', price: 'От 1000 руб', svg: icon, href:"#", png: src='./pngUslugi/18410.png', style: 'background-color: rgba(37, 78, 108, 0.75)'},
  {title: 'Таблички', price: 'От 300 руб', svg: icon, href:"#", png: src='./pngUslugi/18412(1).png', style: 'background-color: rgba(38, 145, 143, 0.75)'},
  {title: 'Тонкие световые панели', price: 'От 1500 руб', svg: icon, href:"#", png: src='./pngUslugi/18436.png', style: 'background-color: rgba(44, 111, 45, 0.75)'},
  {title: 'Сервиснове обслуживание', price: 'От 1000 руб', svg: icon, href:"#", png: src='./pngUslugi/18430.png', style: 'background-color: rgba(57, 108, 37, 0.75)'},
  {title: 'Лазерная резки и гравировка', price: 'От 50 руб м.п.', svg: icon, href:"#", png: src='./pngUslugi/Rectangle4(2).png', style: 'background-color: rgba(38, 58, 145, 0.75)'},
  {title: 'Фрезеровка', price: 'От 30 руб', svg: icon, href:"#", png: src='./pngUslugi/1846(1).png', style: 'background-color: rgba(111, 89, 44, 0.75)'},
];


const cardDataPechati = [
  {title: 'Интерьерная печать', price: 'От 350 руб', svg: icon, png: src='./pngUslugi/18468.png', style: 'background-color: rgba(129, 46, 46, 0.75)'},
  {title: 'УФ печать', price: 'От 500 руб', svg: icon, png: src='./pngUslugi/1849.png', style: 'background-color: rgba(67, 37, 108, 0.75)'},
  {title: 'Стикеры', price: 'От 10 руб/см', svg: icon, png: src='pngUslugi/1847(1).png', style: 'background-color: rgba(38, 145, 40, 0.75)'},  
  {title: 'Плоттерная резка', price: 'От 500 руб', svg: icon, png: src='pngUslugi/18456.png', style: 'background-color: rgba(111, 75, 44, 0.75)'},
];

const cardDataPoligraf = [
  {title: 'Бейджи', price: 'От 250 руб', svg: icon, png: src='./pngUslugi/Rectangle4(3).png', style: 'background-color: rgba(33, 57, 93, 0.75)'},
  {title: 'Календари', price: 'От 200 руб', svg: icon, png: src='./pngUslugi/18451.png', style: 'background-color: rgba(90, 32, 32, 0.75)'},
  {title: 'Пластиковые карты', price: 'От 20 руб', svg: icon, png: src='./pngUslugi/18450.png', style: 'background-color: rgba(75, 72, 72, 0.75)'},  
  {title: 'Меню для кафе и ресторанов', price: 'От 500 руб', svg: icon, png: src='./pngUslugi/18449.png', style: 'background-color: rgba(94, 73, 34, 0.75)'},
  {title: 'Сувенирная продукция', price: 'От 200 руб', svg: icon, png: src='./pngUslugi/18441.png', style: 'background-color: rgba(43, 56, 114, 0.75)'},
  {title: 'Пакеты', price: 'От 10 руб', svg: icon, png: src='./pngUslugi/18443.png', style: 'background-color: rgba(100, 102, 35, 0.75)'},
  {title: 'Оперативная цифровая печать', price: 'От 500 руб', svg: icon, png: src='./pngUslugi/18445.png', style: 'background-color: rgba(34, 135, 73, 0.75)'},  
  {title: 'Офсетная печать', price: 'От 1000 руб', svg: icon, png: src='./pngUslugi/18444.png', style: 'background-color: rgba(67, 66, 77, 0.75)'},
];







cardDataOsnova.map((item, index) => {
  const row = document.querySelector('.bodyOsnova');
  if (row) {
    const colDiv = document.createElement('div');
    colDiv.className = 'col-6 col-lg-3 mb-3';
    row.appendChild(colDiv);

    const cardHtml = `
      <div class="card text-bg-dark">

        <img src=${item.png} class="card-img" alt="Изображение">
        <div class="card-img-overlay d-sm-flex justify-content-sm-between justify-content-center align-content-center"
          style="${item.style}">
          <div class="mb-sm-1 mt-4 align-content-center align-content-sm-end svg" style="text-align: center;">
            ${item.svg}
          </div>
          <div class="align-content-center align-content-sm-end ta">
            <h4 class="TextCard">${item.title}</h4>
            <span class="textPrice">${item.price}</span>
          </div>
        </div>
      </div>
    `;
    colDiv.innerHTML = cardHtml;
  }
});

cardDataRecklama.map((item, index) => {
  const rowR = document.querySelector('.bodyCardUslugiRecklama');
  if (rowR) {
    const colDivR = document.createElement('div');
    colDivR.className = 'col-6 col-lg-3 mb-3';
    rowR.appendChild(colDivR);

    const cardHtmlR = `
      <div class="card text-bg-dark">
      <a href="${item.href}">
        <img src=${item.png} class="card-img" alt="Изображение">
        <div class="card-img-overlay d-sm-flex justify-content-sm-between justify-content-center align-content-center"
          style="${item.style}">
          <div class="mb-sm-1 mt-4 align-content-center align-content-sm-end svg" style="text-align: center;">
            ${item.svg}
          </div>
          <div class="align-content-center align-content-sm-end ta">
            <h4 class="TextCard">${item.title}</h4>
            <span class="textPrice">${item.price}</span>
          </div>
        </div>
        </a>
      </div>
    `;
    colDivR.innerHTML = cardHtmlR;
  }
});

cardDataPechati.map((item, index) => {
  const rowP = document.querySelector('.cardPechati');
  if (rowP) {
    const colDivP = document.createElement('div');
    colDivP.className = 'col-6 col-lg-3 mb-3';
    rowP.appendChild(colDivP);

    const cardHtmlP = `
      <div class="card text-bg-dark">
        <img src=${item.png} class="card-img" alt="Изображение">
        <div class="card-img-overlay d-sm-flex justify-content-sm-between justify-content-center align-content-center"
          style="${item.style}">
          <div class="mb-sm-1 mt-4 align-content-center align-content-sm-end svg" style="text-align: center;">
            ${item.svg}
          </div>
          <div class="align-content-center align-content-sm-end ta">
            <h4 class="TextCard">${item.title}</h4>
            <span class="textPrice">${item.price}</span>
          </div>
        </div>
      </div>
    `;
    colDivP.innerHTML = cardHtmlP;
  }
});


cardDataPoligraf.map((item, index) => {
  const rowPf = document.querySelector('.cardPoligraf');
  if (rowPf) {
    const colDivPf = document.createElement('div');
    colDivPf.className = 'col-6 col-lg-3 mb-3';
    rowPf.appendChild(colDivPf);

    const cardHtmlPf = `
      <div class="card text-bg-dark">
        <img src=${item.png} class="card-img" alt="Изображение">
        <div class="card-img-overlay d-sm-flex justify-content-sm-between justify-content-center align-content-center"
          style="${item.style}">
          <div class="mb-sm-1 mt-4 align-content-center align-content-sm-end svg" style="text-align: center;">
            ${item.svg}
          </div>
          <div class="align-content-center align-content-sm-end ta">
            <h4 class="TextCard">${item.title}</h4>
            <span class="textPrice">${item.price}</span>
          </div>
        </div>
      </div>
    `;
    colDivPf.innerHTML = cardHtmlPf;
  }
});

let element = document.getElementById('recipient-phone');
let maskOptions = {
    mask: '+{7}(#00) 000-00-00',
    definitions: {
        '#': /[01234569]/
    },
    // lazy: false,
    placeholderChar: ' '
};
IMask(element, maskOptions);




// Get the buttons and main elements
const buttons = document.querySelectorAll('.navbar-nav li a');
const mainElements = document.querySelectorAll('.main1,.main2,.main3');
const head2 = document.querySelector('.header2');
const navbarToggler = head2.querySelector('.navbar-toggler');
const navbarTogglerText = navbarToggler.querySelector('span');

// Add event listeners to the buttons
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    // Get the target main element based on the button's text
    let targetMain;
    if (button.textContent === 'Производство рекламы') {
      targetMain = '.main1';
    } else if (button.textContent === 'Печать') {
      targetMain = '.main2';
    } else if (button.textContent === 'Полиграфические услуги') {
      targetMain = '.main3';
    }

    // Check if we're on a mobile screen
    if (window.innerWidth < 576) { // adjust the screen size threshold as needed
      // Hide all main elements
      mainElements.forEach((main) => {
        main.style.display = 'none';
      });

      // Show the target main element
      document.querySelector(targetMain).style.display = 'block';

      // Update the active button
      buttons.forEach((btn) => {
        btn.classList.remove('active');
      });
      button.classList.add('active');

      // Update the navbar-toggler button text
      navbarTogglerText.textContent = button.textContent;
    }
  });
});

// Update the active button on page load
const activeButton = buttons.find((button) => {
  const targetMain = button.textContent === 'Производство рекламы'? '.main1' : '.main2';
  return document.querySelector(targetMain).style.display === 'block';
});
if (activeButton) {
  activeButton.classList.add('active');
  navbarTogglerText.textContent = activeButton.textContent;
}


// const head22 = document.querySelector('.header2');
// console.log('head22:', head22); // check if head2 is correctly selected

// const navbarNav = head22.querySelector('.navbar-collapse');
// console.log('navbarNav:', navbarNav); // check if navbarNav is correctly selected

// const navLinks = navbarNav.querySelectorAll('.nav-link');
// console.log('navLinks:', navLinks); // check if navLinks is an array with the expected links

// navLinks.forEach((link) => {
//   if (link.tagName === 'A') {
//     link.addEventListener('click', () => {
//       console.log('Link clicked!'); // check if the event listener is triggered
//       setTimeout(() => {
//         navbarNav.classList.remove('show');
//         console.log('Removing show class...');
//       }, 100);
//     });
//   }
// });