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


let database =
  '{"name":"Блуждающая земля(2019)", "img": "img/блуждающая земля.jpg","Description":"В ближайшем будущем становится известно, что Солнце скоро погаснет, что разрушит Солнечную систему. Тогда человечество запускает масштабный проект под названием «Блуждающая Земля»,цель которого - с помощью огромных двигателей по всему миру сдвинуть Землю и полететь искать новое пристанище. Через 17 лет путешествия земляне приближаются к Юпитеру. Гравитация гигантской планеты меняет траекторию Земли, вызывает глобальные землетрясения и ставит под угрозу весь проект по...","country":"Китай","release":"2019","Duration":"125 мин. / 02:05","link": "1.html"}\n' +
  '{"name":"Люди в чёрном:Интерншл(2019)", "img": "img/люди в чёрном.jpg","Description":"Люди в черном, тайная организация на страже покоя и безопасности Земли, уже не раз защищали  нас от нападения отбросов Вселенной. На этот раз самая большая опасность для мирового  сообщества, которой агентам предстоит противостоять - шпион в их рядах. Смотреть онлайн Люди в черном: Интернэшнл (2019) в хорошем качестве бесплатно...","release": 2019,"country":"США","Duration":"125 мин. / 02:05","link": "2.html"}\n' +
  '{"name":"Призрак(2015)", "img": "img/призрак.jpg","Description":"Еще вчера Юрий Гордеев - амбициозный авиаконструктор и любимец женщин - был в шаге от своего триумфа. Его самолет ЮГ-1 должен был стать настоящим прорывом в отечественной авиации. Но сегодня его никто не видит и не слышит, и конкурент по бизнесу беспрепятственно закрывает его компанию. Все потому, что Юра разбился в автокатастрофе и стал призраком. Школьник Ваня Кузнецов был пустым местом всегда. Жертва гиперопеки матери, объект насмешек одноклассников,он боится даже...","release": 2015,"country":"Россия","Duration":"114 мин. / 01:54","link": "3.html"}\n' +
  '{"name":"Аквамен (2018)", "img": "img/akvamen.jpg","Description":"Семья смотрителя моряка отличается от простых смертных особым наследием. Супруга является изгнанной королевой Атлантиды, скрывающейся от заклятых врагов. Справедливая неземная красавица воспитывает сына согласно человеческим законам и правилам водного царства. Благодаря мудрым родителям силач «Аквамен» вырастает храбрым и умелым воином. Перед смертью мать завещает наследнику титул правителя семи морей. Гордый сын, несмотря на материнский завет, отказывается возвращаться в ее бывшие владения и отстаивать права на престол.","country":"Австралия,США","release": 2018,"Duration":"114 мин. / 01:54","link": "1.1.html"}\n' +
  '{"name":"Железный человек 3 (2013)", "img": "img/ironmen.jpg","Description":"Когда мир Старка рушится на его глазах по вине неизвестных противников, Тони жаждет найти виновных и привлечь их баллы. Оказавшись в безвыходной ситуации, Старк может рассчитывать только на себя и свою изобретательность, чтобы защитить тех, кто ему дорог. Это становится настоящим испытанием для героя, которому придется не только сражаться с коварным врагом, но и разобраться в себе, чтобы найти ответ на вопрос, который давно его тревожит: что важнее - человек или костюм?","country":"США","release": 2013,"Duration":"02:11:00","link": "2.1.html"}\n' +
  '{"name":"Аладдин (2019)", "img": "img/aladin.jpg","Description":"Сюжет фильма "Аладдин" разворачивается в загадочном городе под названием Аграба. Там живёт главный герой, которого зовут Аладдин. Он местный воришка и просто пытается выжить в этом трудном мире. И вот ему удаётся познакомится с девушкой по имени Жасмин. Оказывается, что она дочка самого короля, от которого она решила сбежать. В итоге их поймали вместе и теперь главному герою грозит смертельная опасность. Но вдруг к нему обращается старик, который заявляет, что есть пещера с сокровищами и если он поможет ему их достать, то","country":"США","release": 2019,"Duration":"114 мин. / 01:54","link": "3.1.html"}';

let databaseSplit = database.split("\n");

const submit = document
  .getElementById("submit")
  .addEventListener("click", function () {
    const searchValue = document.getElementById("searche").value;
    const insertBefore = document.getElementById('submite');

    let arr = [];

    for (let values in databaseSplit) {
      let tempObj = JSON.parse(databaseSplit[values]);
      arr.push(tempObj);
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name === searcheValue) {
        let newDiv = document.createElement("div");
        newDiv.innerHTML = 
        `<div class="row p-5">
        <h4>${arr[i].name}</h4>
				</div>
				<div class="row">
					<div class="col-3 p-5">
          <img src="${arr[i].img}" class="nov-4 nov-24">
          <a href="${arr[i].link}" class="btn-red">Смотреть онлайн</a>
					</div>
					<div class="col-7 col-black p-5 col-A8">
            <p>
            ${arr[i].Description}
            </p>
						<br>
						<p>Год выпуска: <ins class="nov-3"> ${arr[i].release}</ins></p>
						<p>Страна:<ins class="nov-3">${arr[i].country}</ins></p>
						<p>Продолжительность: ${arr[i].Duration}</p>
					</div>
				</div>`;

        document.body.appendChild(newDiv, insertBefore);
      }
    }
  });