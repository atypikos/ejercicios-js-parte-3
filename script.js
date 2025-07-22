// Números:
// 1. Escribe una función que tome dos números como argumentos y devuelva su suma.

function sumar (a,b) {
    return a + b;
}

let resultadoSuma = sumar(3,10);
    console.log(resultadoSuma);
    
// 2. Escribe una función que tome dos números como argumentos y devuelva su resta.

function restar (a,b) {
    return a - b;
}

let resultadoResta = restar(3,10);
    console.log(resultadoResta);

// 3. Escribe una función que tome dos números como argumentos y devuelva su producto.

function multiplicar (a,b) {
    return a * b;
}

let resultadoMultiplicar = multiplicar(3,3);
    console.log(resultadoMultiplicar);

// 4. Escribe una función que tome dos números como argumentos y devuelva su división.
function division (a,b) {
    return a / b;
}

let resultadoDivision = division(3,3);
    console.log(resultadoDivision);

// 5. Escribe una función que tome un número base y un exponente y devuelva el resultado de elevar el número base a la potencia dada.

function potencia (a,b) {
    return a ** b;
}

let resultadoPotencia = potencia(3,3);
    console.log(resultadoPotencia);

// 6. Escribe una función que tome dos números como argumentos y devuelva el resto de la división del primer número entre el segundo.
function resto (a,b) {
    return a % b;
}

let resultadoResto = resto(4,3);
    console.log(resultadoResto);

// 7. Escribe una función que tome un número como argumento y devuelva su raíz cuadrada.

function raiz (a) {
    return Math.sqrt(a);
}

let resultadoRaiz = raiz(12);
    console.log(resultadoRaiz);


// 8. Escribe una función que tome un número como argumento y devuelva su valor absoluto.

function abs (a) {
    return Math.abs(a);
}

let resultadoAbs = abs(12);
    console.log(resultadoAbs);

// 9. Escribe una función que tome un número decimal como argumento y devuelva el número redondeado al entero más cercano.

function redondear (a) {
    return Math.round(a);
}

let resultadoRedondear = redondear(33,3);
    console.log(resultadoRedondear);

// 10. Escribe una función que genere y devuelva un número aleatorio entre 0 y 1.

function random () {
    return Math.random();
}

let resultadoRandom = random();
    console.log(resultadoRandom);

// 1. Escribe una función que tome dos cadenas de texto como argumentos y devuelva su concatenación.

let concatenar = function (texto1, texto2) {
    return texto1 + texto2;
}

let resultadoConcatenar = concatenar ("hola mundo", " estoy bien")
console.log(resultadoConcatenar);


// 2. Escribe una función que tome una cadena de texto como argumento y devuelva su longitud.

let cadena = function (textoCadena) {
    return textoCadena.length;
}

let textoCadena = "esto es una prueba";
console.log(cadena(textoCadena));

// 3. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en mayúsculas.

let cadenaCaps = function(caps) {
    return caps.toUpperCase();

}

let caps = "this text is gonna be capsed";

console.log(cadenaCaps(caps));

// 4. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en minúsculas.

let lowerCase = function(lower) {
    return lower.toLowerCase();
}

let lower = "THIS iS a F meSS";
console.log(lowerCase(lower));

// 5. Escribe una función que tome una cadena de texto y un índice como argumentos, y devuelva el carácter en esa posición.

let posicion = function (texto1, i) {
    return texto1[i];
}

let textoPosicion = posicion("Este es el texto", 3);
console.log(textoPosicion);


// 6. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena invertida.

let invertido = function (cadena) {
    return cadena.split("").reverse().join("");
}

let cadenaFinal = "CaleroIndaHouse";
console.log(invertido(cadenaFinal));

// 7. Escribe una función que tome una cadena de texto y un carácter como argumentos, y devuelva la cantidad de veces que el carácter aparece en la cadena.

let caracter = function (texto1, char) {
    let contador = 0;
    for (let i = 0; i < texto1.length; i++) {
        if (texto1[i] === char) {
            contador++;
        }
    }
    return contador;
}

let frase = "hey que tal";
let encontrar = "e";
const MATCH = caracter(frase,encontrar);
console.log(MATCH);

// 8. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena sin espacios en blanco.

let espacios = function (textoTest) {
    return textoTest.replace(/\s/g, "");
}

let frase2 = "dios, me voy a quedar sin ningún espacio en esta frase";
console.log(espacios(frase2));


// 9. Escribe una función que tome una cadena de texto como argumento y devuelva true si es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda), o false si no lo es.

let palindromo = function (palabra) {
    let invertida = palabra.split("").reverse().join("");
    if (palabra === invertida) {
        return true;
    } else {
        return false;
    }
}

let testeoPal = "hola";

console.log(palindromo(testeoPal));
// 10. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena con la primera letra de cada palabra en mayúscula.    

function cadena3(texto) {
        return texto
        .split(' ') //split(' ') divide el texto en un array de palabras.
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)) //map(...) recorre cada palabra.
        .join(' '); //join(' ') vuelve a unir las palabras con espacios.
}

console.log(cadena3("por ejemplo quiero estas en mayúsculas"));

// 1. Escribe una función que tome un array de números como argumento y devuelva la suma de todos sus elementos.

function array1(numeros) {
    let suma = 0 
    for (let i = 0; i < numeros.length ; i++) {

    suma = suma + numeros[i];
    }
    return suma;
}

console.log(array1([1, 3, 5, 6, 10]));

// 2. Escribe una función que tome un array de números como argumento y devuelva el promedio de todos sus elementos.

function array2(promedio) {
    let div = 0;

    for (let i = 0; i < promedio.length ; i++) {
    
        div = div + promedio[i] / promedio.length;
    }

    return div;
}

console.log(array2([3, 5, 2,]));

// 3. Escribe una función que tome un array de números como argumento y devuelva el array ordenado de forma ascendente.

function array3(ascendance) {

    return ascendance.sort((a, b) => a - b);

}

console.log(array3([1, 3, 5, 10, 2, 3, 4]));

// 4. Escribe una función que tome un array de números y un número como argumentos, y devuelva un nuevo array con los elementos mayores al número dado.


function array4(numeros, numero) {

    return numeros.filter(elemento => elemento > numero);
}

let numeros = [3, 2, 10, 25, 32, 8];
let resultado = array4(numeros,9);

console.log(resultado);

// 5. Escribe una función que tome dos arrays como argumentos y devuelva un nuevo array con todos los elementos de ambos arrays.

function array5(array1, array2) {
    return array1.concat(array2);
}

console.log(array5([1,2,3,5,6], [3,5,6,6,7]));

// 6. Escribe una función que tome un array de números como argumento y devuelva el número máximo dentro del array.

function array6(maximos) {
    return Math.max(...maximos);
}

console.log(array6([1,3,29,3,5,4]));

// 7. Escribe una función que tome un array de números como argumento y devuelva el número mínimo dentro del array.

function array7(minimos) {
    return Math.min(...minimos);
}

console.log(array7([1,9,229,30,2,4]));

// 8. Escribe una función que tome un array y un elemento como argumentos, y devuelva la cantidad de veces que el elemento aparece en el array.

function array8(numeros, elemento) {
    let contador = 0; // empezamos en 0

    // Recorremos el array desde el primer elemento hasta el último
    for (let i = 0; i < numeros.length; i++) {
        // Si el elemento actual del array es igual al elemento que buscamos...
        if (numeros[i] === elemento) {
            contador++; // ... sumamos 1 al contador
        }
    }

    return contador; // devolvemos el total de veces que lo encontramos
}

// Ejemplo: contamos cuántas veces aparece el número 2
console.log(array8([1, 5, 3, 2, 4, 2], 2)); 


// 9. Escribe una función que tome un array como argumento y devuelva un nuevo array sin elementos duplicados.

function array9(sinDuplicar) {
    return [...new Set(sinDuplicar)];
}

console.log(array9([1, 2, 3, 2, 4, 1]));

// 10. Escribe una función que tome un array como argumento y devuelva un nuevo array con los elementos en orden inverso.

function array10(reverse) {
    return [...reverse].reverse();
}

console.log(array10([1,3,5,4,10]));


// 1. Escribe una función que tome un objeto literal con una propiedad "nombre" y devuelva el valor de esa propiedad.

let namerino = {
    nombre: "Sergi"
};


console.log(namerino.nombre);

// 2. Escribe una función que tome un objeto literal con una propiedad "edad" y un número como argumentos, y actualice el valor de la propiedad "edad" con el número dado.

function actualizarEdad(objeto, nuevaEdad) {
    objeto.edad = nuevaEdad;
}

let persona = {
    edad: 32
};

actualizarEdad(persona, 40);

console.log(persona.edad);

// 3. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y agregue una nueva propiedad al objeto con la cadena de texto como nombre y un valor inicial de null.

let cadenaTexto = {
    texto: "varText",
    varText: null

};

// 4. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y elimine la propiedad del objeto con el nombre dado.

let cadenaTexto2 = {
    texto: "varText",
    hola: "hi",
};

console.log(cadenaTexto2);

function eliminar(object,property){
    delete object[property];
}

eliminar(cadenaTexto2, "texto");

console.log(cadenaTexto2);

// 5. Escribe una función que tome un objeto literal como argumento y devuelva la cantidad de propiedades que tiene.

let devolver = {
    propiedad1: "hola",
    propiedad2: "hola2",
    propiedad3: "hola3"
}

console.log(devolver);

function counter() {
    return Object.keys(devolver).length;

}

console.log(counter());

// 6. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y devuelva true si el objeto tiene una propiedad con ese nombre, o false si no la tiene.


// 7. Escribe una función que tome un objeto literal como argumento y devuelva un array con todos los valores de sus propiedades.
// 8. Escribe una función que tome dos objetos literales como argumentos y devuelva true si tienen las mismas propiedades y los mismos valores en esas propiedades, o false si son diferentes.
// 9. Escribe una función que tome un objeto literal como argumento y devuelva una copia exacta de ese objeto.
// 10. Escribe una función que tome dos objetos literales como argumentos y devuelva un nuevo objeto con todas las propiedades de ambos objetos. Si hay propiedades con el mismo nombre, el valor del segundo objeto deberá prevalecer.