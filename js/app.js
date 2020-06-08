//const { user } = require('./classes/User');

const storesDatePlaceholder = document.getElementById('date');

setInterval( function(){
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
    if(dateSeconds < 10)
        dateSeconds = "0" + dateSeconds;

    // Обновляем содержимое блока новыми велечинами    
    storesDatePlaceholder.innerHTML = "Текущее время: " + dateHours + ":" + dateMinutes + ":" + dateSeconds;
}, 1000 );

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
  