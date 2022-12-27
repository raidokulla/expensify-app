// Arr destructuring

const address = ['Urb Lomas de Marbella', 'Marbella', 'Malaga', '29603']

const [, city] = address

console.log(`You are in ${city}`)

const item = ['Coffe (hot)', '2EUR', '2.50EUR', '2.75']

const [product, , mediumPrice]= item

console.log(`A medium ${product} costs ${mediumPrice}`)


// Obj destructuring

// const person = {
//   name: 'Raido',
//   age: 34,
//   location: {
//     city: 'Marbella',
//     temp: '16'
//   }
// }

// const { name = 'Mikk', age } = person

// console.log(`${name} is ${age}.`)

// const { city, temp: temperature } = person.location

// if (person.location.city && person.location.temp)

//   console.log(`It's ${temperature} in ${city}`)

//   const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
//   }

//   const { name: publisherName = 'Self-Published' } = book.publisher

//   console.log(publisherName)