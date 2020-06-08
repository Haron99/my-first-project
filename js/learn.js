let formerPrimeMinister = 'Hilary Clinton';
let famousSinger = 'Johnny \'Man in Black\' Cash';

// This is a simple comment
const PI = 3.14;

let a = 15,
    b = 24,
    c = a / b;

let array2 = [
    ['James Brown', '2541-3213', 33243242],
    ['James Brown2', '2541-3213', 33243242]
];

let array = [
    //    0              1          2
    'James Brown', '2541-3213', 33243242
];

//onsole.log( array );
console.log(array2[0][0] + ' ' + array2[0][2]);

/*
 * dsafdasfafdafdfa
 * ddgdgsfsfgsgsdfgsg
 */

//console.log(typeof famousSinger);

let personObject = {
    // Свойство объекта 
    name: 'Martin',
    surname: 'Smith',
    age: 24,
    course: 'Web design and Development'
};

console.log(
    personObject.name +
    ' ' +
    personObject.surname
);

console.log(personObject);




/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */


let userName = document.getElementById('bar1');
let navItems = document.getElementsByClassName('nav_item');

let i;
for (i = 0; i < navItems.length; i++) {

    if (navItems[i].innerHTML === 'tesr') {
        navItems[i].style.display = 'none';
    }

}

















// WebStorm

class House {
    constructor(color, height, doors, windows) {
        this.houseColor = color;
        this.houseHeight = height;
        this.houseDoors = doors;
        this.houseWindows = windows;
    }
    getHouseColor() {
        return this.houseColor;
    }
    setHouseColor(newColor) {
        this.houseColor = newColor;
    }
    getFullInfo() {
        return this.houseColor + " " + this.houseHeight + " " + this.houseDoors + " " + this.houseWindows;
    }
}

let myHouse = new House('red', 180, 2, 5);
myHouse.setHouseColor('blue');

let myVillageHouse = new House('brown', 30, 4, 9);

//console.log( myHouse.getFullInfo() );
//console.log( myVillageHouse.getFullInfo() );

let houseCollection = [myHouse, myVillageHouse];

let i;
for (i = 0; i < houseCollection.length; i++) {
    console.log(houseCollection[i].getFullInfo());

    if (houseCollection[i].getHouseColor() === 'blue') {
        console.log('Нашел синий!');
    }
}






/*
<input type="text" id="username" placeholder="Username">
<input type="email" id="email" placeholder="Email">
<input type="password" id="password" placeholder="Password">
<input type="submit" value="Submit" id="submit">
  
  
class User {
  constructor(userName, email, password) {
    this.userName = userName;
    this.userEmail = email;
    this.userPassword = password;
  }
  setUserName(newUserName) {
    this.userName = newUserName;
  }
  setUserEmail(newUserEmail) {
    this.userEmail = newUserEmail;
  }
  setUserPassword(newUserPassword) {
    this.userPassword = newUserPassword;
  }
}

let userStorage = [];
let submitHolder = document.getElementById('submit');

submitHolder.addEventListener('click', function() {
  let userNameHolder = document.getElementById('username').value;
  let userEmailHolder = document.getElementById('email').value;
  let userPasswordHolder = document.getElementById('password').value;
  
  let user = new User(userNameHolder, userEmailHolder, userPasswordHolder);
  userStorage.push(user);
  console.log(userStorage.length);
});

  */