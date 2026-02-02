// Javascript Nuggets
// async / await'
// async must be present, always returns a promise
// await waits till promise is settled
// error handling - try/catch block

// async await laesst uns es leichter schreiben anstatt endlose nested Callbacks

const example = async () => {
    return 'hjello there'
}

// console.log(example()) // beim cnsole log kann man sehen "_Proto" ist Promise, und das ist immer eine Promise

async function someFunc() {
    const result = await example(); // await wartet auf Promise und dann, da muss man keine .thens verwenden sondern awaited einfach Value
    console.log(result) // zuerst result wird gelogged und erst danach das hello world, also ist der code synchron zu ihrer Linie
    console.log('hello world')
}

const users = [
    { id: 1, name: 'john' },
    { id: 2, name: 'susan' },
    { id: 3, name: 'anna' }
]

const articles = [
    { Userid: 1, articles: ['one', 'two', 'three'] },
    { Userid: 2, articles: ['four', 'five'] },
    { Userid: 3, articles: ['six', 'seven', 'eight', 'nine'] }
]

getUser('susan')
    .then((user) => console.log(user))
    .catch((err) => console.log(err)) // falls Promise durchgeht dann wird der User ausgegebn und falls nicht catch er den error und gibt die error Message aus

getUser('susan')
    .then((user) => getArticles(user.id))
    .then((articles) => console.log(articles)) // gibt dann in der Console nur die Artikeln aus
    .catch((err) => console.log(err)) // aber das alles geht einfach mit async await

//const getData = async () => {
//    const user = await getUser('john')
//    console.log(user)
//} // da muss man nicht die ganzen .thens verwenden da das async await das schon von alleine macht

const getData = async () => {
    const user = await getUser('john')
    if (user) {
        const articles = await getArticles(user.id)
        console.log(articles) // gibt dann alle Artikeln aus und wenn man dies nun vergleicht mit dem programmierten oben bei getUser und die ganzen thens
        // ist diese Funktion bei weitem mehr lesbar und einfacher zu verstehen da man keine .thens trainieren/nesten muss
    }
}

const getData_2version = async () => {
    try {
        const user = await getUser('johs')
        const articles = await getArticles(user.id)
        } // dieses mal machen wir das ganze in einem try block
     catch (error) {
        console.log(error)
    } // falls try block failed catcht er von alleine den error und gibt ihn dann aus
}

function getUser(name) {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => user.name === name)

        if (user) {
            return resolve(user)
        }
        else {
            reject(`No such user with name: ${name}`) // wenn keine IDs gefunden, dann rejected er Promise und gibt aus was falsch ist bzw die error Message
        }
    })
}

function getArticles(userId) {
    return new Promise((resolve, reject) => {
        const userArticles = articles.find((user) => user.userId === userId)

        if (userArticles) {
            return resolve(userArticles.articles)
        } else {
            reject(`Wrong ID`) // wenn keine IDs gefunden, dann rejected er Promise und gibt aus was falsch ist bzw die error Message
        }
    })
}