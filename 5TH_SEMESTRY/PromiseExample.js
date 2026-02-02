// Javascript Nugfets - Promises Example
// .first - nach 1s erstes rot;
// .second - nach 3s zweites blau; 4s
// .third - nach 2s drittes gruen; 6s
// in sequenz

const button = document.querySelector('.button')

button.addEventListener('click', () => {
    addColor(1000, '.first', 'red')
        .then(() => addColor(3000, '.second', 'blue')
            .then(() => addColor(2000, '.third', 'green')
                .catch((err) => console.log(err))
})

function addColor(time, selector, color, data) {
    const element = document.querySelector(selector) // Element wird selected
    return new Promise((resolve, reject) => {
        if (element) {
            setTimeout(() => { // setzen einen Timer
                element.style.color = color // Farbe wird geplaced / geaendert
                //resolve(data)
            }, time)
        }
        else {
            reject(`There is no such element : "${selector}"`)
        }
    })
}

// ist besser als "Nesting" wie bei Callback Hell
// bei der Callback Funktion kann man meherere .thens trainieren aber da wir keine Daten durchgeben brauchen wir keinen resolve
// nie vergessen falls wir Daten zurueckgeben oder nicht muessen wir die Promise rejecten or resolven!