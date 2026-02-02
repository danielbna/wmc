// Javascript Nuggets - Promises

// async await
// consume/use promises

// Pending, Rejected, FulFilled

// Promises sind Dinge die einen Wert zurueckgeben

// zb. wenn man Fast Food kauft bekommt man eine Rechnung, und sobald das Essen fertig ist, geht man mit der Rechnung hin und bekommt das bezahlte Essen
// man kann auch abgelehnt werden also rejected aus einem Grund
// heisst Promise sind sozusagen eine Rechnung dass du was bekommen wirst
// bsp: http request, du bekommst deine Antwort nicht direkt, erst wenn der Server antwortet bekommst du entweder deine Website gezeigt oder einen Fehler

const value = 2

const promise = new Promise((resolve, reject) => { // die zwei Argumente sind sogar Funktionen selbst
    const random = Math.floor(Math.random * 3);
    console.log(random)
    if (random === value) {
        resolve('you guessed correctly')
    }
    else {
        reject('wrong number')
    }
}) 

console.log(promise)

promise.then((data) => console.log(data)).catch((err) => console.log(err))

// es ist immer pending, und dann entweder man kommt zu fulfilled, oder zu rejected. Sobald man einer der beiden Endstatus erreicht kann man nicht mehr zurueck zu pending.