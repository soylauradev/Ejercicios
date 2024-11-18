/* El método push() añade uno o más elementos al final de un array 
y devuelve la nueva longitud del array. */

// 1. Tenemos un array y queremos añadir más elementos. Puede estar vacío.
// 2. Podemos crear una nueva variable para poder añadir elementos indicando push al nombre del array.
// O
// 3. Podemos mencionar la variable que contiene el array y añadirle método push.

/// EJEMPLO 1
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

/// EJEMPLO 2
let frutas = ['kiwi', 'granada'];
frutas.push('platano'); // 3 --> el método devuelve la nueva longitud del array
console.log(frutas); // [ 'kiwi', 'granada', 'platano' ] --> después del método añade el elemento al array
console.log(frutas.length)


