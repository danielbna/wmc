// Javascript Nuggets - Callback Hell

// zuerst rot nach 1s - 1ste Ueberschrift; 
// danach blau nach 3s - 2te Ueberschrift; 4s
// und drittes gruen nach 2s - 3te Ueberschrift; 6s
// in sequenz

const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')

const btn = ocument.querySelector('.btn')

btn.addEventListener('click', () => {
    setTimeout(() => { first.style.color = 'red' }, 1000)
    setTimeout(() => { first.style.color = 'blue' }, 3000)
    setTimeout(() => { first.style.color = 'green' }, 2000)
})

// Gibt auch andere Variante wo man das in nur einer Sequenz macht, wobei man das an den ersten Wert anpassen muss, d.h
// wenn man als ersten Wert 1s hat, als 2ten 4s und als dritten 6s. Dann muss man in einer Sequenz von einem zum anderen gehen 
// 1s -> + 3s -> 4s + 2s -> 6s

btn.addEventListener('click', () => {
    setTimeout(() => {
        first.style.color = 'red'
        setTimeout(() => {
            first.style.color = 'blue'
            setTimeout(() => {
                first.style.color = 'green'
            }, 2000)
        }, 3000)
    }, 1000)
})

// Pyramid Art Struktur, und dies macht HardCode mehr lesbar und einfacher zu verstehen