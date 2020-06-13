//const { user } = require('./classes/User');

const storesDatePlaceholder = document.getElementById('date');

setInterval(function () {
  // Инициализируем объект Date и делаем доступным
  // из переменной date
  let date = new Date();

  // Обращаемся к методам объекта,
  // собирая все в переменные
  // -- переменные перезаписываются ежесекундно 
  let dateHours = date.getHours();
  let dateMinutes = date.getMinutes();
  let dateSeconds = date.getSeconds();

  // Проверяем секунды на < 10,
  // чтобы добавить 0 впереди
  if (dateSeconds < 10)
    dateSeconds = "0" + dateSeconds;

  // Обновляем содержимое блока новыми велечинами    
  storesDatePlaceholder.innerHTML = "Текущее время: " + dateHours + ":" + dateMinutes + ":" + dateSeconds;
}, 1000);

function setCookie(cookieName, cookieValue, exdays) {
  let date = new Date();
  date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);

  let expires = 'expires=' + date.toUTCString();
  document.cookie = cookieName + '=' + cookieValue + ';' + expires + ';path=/';
}

function getCookie(cookieName) {
  let name = cookieName + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

function setDiclaimer(cookieName, cookieValue, exdays) {
  let disclaimer = document.getElementById('disclaimer_wrapper');
  disclaimer.style.display = 'none';
  setCookie(cookieName, cookieValue, exdays);
}

//document.cookie = "agree=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

window.onload = function () {
  if (getCookie('agree')) {
    let disclaimer = document.getElementById('disclaimer_wrapper');
    disclaimer.style.display = 'none';
  }
};

let json = [{
  "name": "Блуждающая земля(2019)",
  "img": "img/блуждающая земля.jpg",
  "description": "В ближайшем будущем становится известно, что Солнце скоро погаснет, что разрушит Солнечную систему. Тогда человечество запускает масштабный проект под названием «Блуждающая Земля»,цель которого - с помощью огромных двигателей по всему миру сдвинуть Землю и полететь искать новое пристанище. Через 17 лет путешествия земляне приближаются к Юпитеру. Гравитация гигантской планеты меняет траекторию Земли, вызывает глобальные землетрясения и ставит под угрозу весь проект по...",
  "country": "Китай",
  "release": 2019,
  "duration": "125 мин. / 02:05",
  "url": "1.html"
},
{
  "name": "",
  "img": "",
  "description": "",
  "country": "",
  "release": "",
  "duration": "",
  "url": ""
}];

try {
  const submit = document
  .getElementById('submit')
  .addEventListener('click', function () {
    
    const searchValue = document.getElementById('search').value;
    const insertBefore = document.getElementById('submit');
    const abc = document.getElementById('abc');
    

    json.forEach(obj => {
      if (searchValue === obj.name) {
        let newDiv = document.createElement("div");
        newDiv.innerHTML =
          `<div class="row p-5">
            <h4>${obj.name}</h4>
				   </div>
				<div class="row">
					<div class="col-3 p-5">
          <img src="${obj.img}" class="nov-4 nov-24">
          <a href="${obj.url}" class="btn-red">Смотреть онлайн</a>
					</div>
					<div class="col-7 col-black p-5 col-A8">
            <p>
            ${obj.description}
            </p>
						<br>
						<p>Год выпуска: <ins class="nov-3"> ${obj.release}</ins></p>
						<p>Страна:<ins class="nov-3">${obj.country}</ins></p>
						<p>Продолжительность: ${obj.duration}</p>
					</div>
				</div>`;

        if(abc) abc.appendChild(newDiv, insertBefore);
      }
    });
  });
}
catch(e) {
  console.error('Review the code');
}