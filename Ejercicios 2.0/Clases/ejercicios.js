/***Instrucciones:**

1. Crea una clase llamada `Vehiculo`.
2. El constructor debe recibir dos propiedades: `marca` y `modelo`.
3. Agrega un método `detalles()` que muestre en la consola la marca y el modelo del vehículo (ejemplo: "Marca: Toyota, Modelo: Corolla").
4. Crea dos instancias de la clase `Vehiculo` y llama al método `detalles()` para cada una. */

class Vehiculo {
    constructor (marca, modelo) {
        this.marca = marca;
        this.modelo =modelo;
    }
}

}
const vehiculo1 = new vehiculo("Toyota", "Corolla");
const vehiculo2 = new vehiculo ("Honda", "Civic");
vehículo1.detalles();
vehículo2.detalles();
detalles(); {
    console.log("Marca:", this.marca, "Modelo", this.modelo);