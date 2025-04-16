
let country = 'INDIA'

let array = country.split('');
array.splice(3,0,'ONES')
country = array.join('')
console.log(country)