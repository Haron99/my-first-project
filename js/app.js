

let storesDatePlaceholder = document.getElementById('date');

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
