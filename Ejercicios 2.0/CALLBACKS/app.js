function accionDePersona (callback){
    const nombre = 'Sergio'
    callback(nombre)
}

function saludar(nombre) {
    console.log(`Hola soy ${nombre}`) 
}

accionDePersona(saludar)

// OTRA ACTIVIDAD
function accionDePersona2 (callback){
    const nombre = 'Laura'
    callback(nombre)
}

function despedir(nombre) {
    console.log(`Soy ${nombre} y me voy, adiós`)
}

accionDePersona2(despedir)

/*Crea una función que procese la edad de un usuario y 
determine si es mayor o menor de edad. 
La función debe recibir el nombre y la edad del usuario, 
así como un callback para manejar el resultado. 
El callback debe recibir el nombre del usuario y 
un mensaje indicando “mayor de edad” o “menor de edad”, 
y mostrar el resultado en la consola. 
Utiliza esta función para verificar la edad de al menos dos usuarios, 
uno mayor de edad y uno menor. */

// 1. Crear una función para saber si un usuario es menor o mayor de edad.
// 2. Función debe recibir nombre, edad y callback.
// 3. El callback debe recibir nombre y mensaje indicando mayor o menor.
// 4. Mostrar resultado en consola.

function edadUsuario (nombre, edad, callback){
    let usuario1 = 18
    if(edad >= usuario1){
        callback(true, nombre)
    } else {
        callback(false, nombre)
    }
}

function comprobarMayorEdad(nombre) {
    console.log(`${nombre} es mayor de edad`);

}
function comprobarMenorEdad(nombre) {
    console.log(`${nombre} es menor de edad`);
}

comprobarUsuario(Luisa, 24, "Mayor de edad") {
    if("Mayor de edad") {
        comprobarMayorEdad
    } else {
        comprobarMenorEdad
    }
}

