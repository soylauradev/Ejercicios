// Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne , numberTwo) {
    return numberOne>numberTwo ? numberOne:numberTwo
}
console.log(sum(30,18));

/*
function numMayor (a, b){
  return Math.max(a, b)
}

console.log(numMayor(10, 100)) // 100
console.log(numMayor(50, 1)) // 50 

Se puede realizar también de la manera anterior */


/*Completa la función que tomando un array de strings como argumento devuelva 
el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.*/
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(e) {
    return e.reduce((acc, valorActual) => {
        return valorActual.length > acc.length ? valorActual : acc;
    }, ''); // se empieza conun string vacío porque se quiere comparar con el primero y así
}
console.log(findLongestWord(avengers));


/*Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la 
suma de todos los números de la matriz.*/
const numbers = [1, 2, 3, 5, 45, 37, 58];
  function sumNumbers(arr) {
    return arr.reduce((total, num) => total + num, 0);
  
  }
  console.log(sumNumbers(numbers));

/*Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:
const numbers2 = [12, 21, 38, 5, 45, 37, 6]; */

function promedio(e) {
  const sum = e.reduce((tota, num) => total + num, 0); 
  const pro= sum / e.length;
  return pro.toFixed(1);
}

/*Crea una función que reciba por parámetro un array y cuando es un valor 
number lo sume y de lo contrario cuente la longitud del 
string y lo sume. Puedes usar este array para probar tu función:*/
const mix = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function sumaMix(array) {
  const total = array.reduce((acc, actual) => {
  if (typeof actual == 'number') {
  return acc + actual //si es number, se suma al acc
  } else if (typeof actual == 'string') {
    return acc + actual.length; //si es string, se suma la longitud al acc
  } else {
    return acc;
  }
  }, 0);
  return total
}

console.log('SUMA MIX', sumaMix(mix));
//Daba indefinido porque o bien añadimos return después de cada if o encapsulamos todo en una constante.

/*Crea una función que reciba por parámetro un array y compruebe si existen elementos 
duplicados, en caso que existan los elimina para retornar un array sin los elementos 
duplicados. Puedes usar este array para probar tu función:*/
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(param) {
  // insert code
}

/*1. crear una función que haga algo sobre el array 'duplicates'
2. comprobar si existen elementos duplicados, si se repiten los datos
opcion 1. map
opcion 2. filter
opcion 3. bucle (el que sea)
*/

// EJERCIO EXTRA PROPUESTO POR SERGIO

// Desarrollar una calculadora super simple

function multiplicar(num1, num2) {
  return num1 * num2
}

// Añadir metodos de operaciones a el objeto calculadora

/*const calculadora = {
sumar: function (num1, num2) {
}, restar: function (num1, num2) {
},dividir: function (num1, num2){
}, multiplicar: fuction (num1, num2){
}
} */

// + EJERCICIO

const inventario = [
  { nombre: "Camisa", categoria: "Ropa", cantidad: 10, precio: 20 },
  { nombre: "Pantalón", categoria: "Ropa", cantidad: 5, precio: 30 },
  { nombre: "Zapatillas", categoria: "Calzado", cantidad: 8, precio: 50 },
  { nombre: "Sombrero", categoria: "Accesorios", cantidad: 15, precio: 10 }
];



// Función 1: Añadir un Producto
inventario.nombre = 'Falda'
inventario.categoria = 'Ropa'
inventario.cantidad = 4
inventario.precio = 25

console.log(inventario)
// Función 2: Buscar un Producto

let sombrero = inventario.filter(e=> e inventario.nombre('Sombrero')
console.log(sombrero),
// Función 3: Actualizar Stock