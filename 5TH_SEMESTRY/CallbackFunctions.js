function makeUppercase(value) {
    console.log(value.toUpperCase())
}

// makeUppercase('peter')

function reverseString(value) {
    console.log(value.split('').reverse().join('')) // Value wird gesplitted um ein Array daraus zu kreieren, danach reversed also umgedreht und letztenendes zusammengefuegt
}

function handleName(name, cb) {
    const fullName = `${name} smith`
    cb (fullName) // Funktion wird invoked
}

handleName('peter', makeUppercase)
handleName('peter', reverseString) // jetzt logisch dass der Output was anderes wird da der Input bzw das Argument jetzt der reverseString ist anstatt makeUpperCase

// anstatt die Funktion selbst als Argument fuer die Callback Funktion zu benutzen mittels makeUppercase()
// benutzt man die Funktion alleine ohne Parantheses also ohne den Klammern als reine Funktion ohne jegliche Values

// man kann ja einfach nur das value.toUpperCase anstatt die Callback Funktion verwenden
// d.h man muss keine Referenz erstellen

handleName('susan', function (value) {
    console.log(value) // Console logging Value als cb funktion
})

// ODER

handleName('susan', (value) => console.log(value)) // als arrow Funktion

// werden oft in array methoden, setTimeouts, event Listeners etc verwenden

const btn = document.querySelector('.btn')

btn.addEventListener('click', function() {
    console.log() // wird erst invoked wenn man den Button drueckt
})

// anstatt Funktionen selbst aufzurufen kann man diese gleich als Argument weitergeben wie bei dem EventListener zb. 