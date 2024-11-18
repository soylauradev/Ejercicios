/*### *Ejercicio 4: Listar nombres y modelos de todas las naves*

#### Enunciado

Queremos una función que recorra todas las películas y liste el 
name y model de cada nave en esa película.*/

const starWarsDatabase = {
movies: [
    {
title: "A New Hope",
release_year: 1977,
characters: [
        { name: "Luke Skywalker", homeworld: "Tatooine", species: "Human" },
        { name: "Darth Vader", homeworld: "Tatooine", species: "Human" },
],
    starships: [
        { name: "X-wing", model: "T-65 X-wing" },
        { name: "TIE Advanced x1", model: "Twin Ion Engine" },
    ],
    },
    {
title: "The Empire Strikes Back",
release_year: 1980,
characters: [
        { name: "Yoda", homeworld: "Dagobah", species: "Unknown" },
        { name: "Han Solo", homeworld: "Corellia", species: "Human" },
],
starships: [
        { name: "Millennium Falcon", model: "YT-1300" },
        { name: "Slave I", model: "Firespray-31" },
],
    },
],
};
console.log("🚀 ~ starWarsDatabase:", starWarsDatabase.movies);

/* Queremos crear una función que recorra todas las películas y liste
el name y model de cada nave en esa película */
//Objetivo: Listar name y model de cada nave en esa película.
//Datos:starWarsDatabase.movies.characters

//PASO 1: Acceder al array de movies.
//PASO 2: Iterar el array con un bucle y sacar la información.
//PASO 3: Listar name y model de cada nave en esa película.

//Variables: peliculas

function listaPeliculas(data) {
    const peliculas = data.movies;

    for (let i = 0; i < peliculas.lengt; i++) {
        console.console.log(listaPeliculas);
        const pelicula = peliculas[i];
        console.log (`Nombre: ${pelicula.name} y modelo: ${pelicula.model}`);
    }
        
    }
listaPeliculas(starWarsDatabase)
