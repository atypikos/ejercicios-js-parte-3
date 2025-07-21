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

function cadena(texto) {
        return texto
        .split(' ') //split(' ') divide el texto en un array de palabras.
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)) //map(...) recorre cada palabra.
        .join(' '); //join(' ') vuelve a unir las palabras con espacios.
}

console.log(cadena("por ejemplo quiero estas en mayúsculas"));

// 1. Escribe una función que tome un array de números como argumento y devuelva la suma de todos sus elementos.
// 2. Escribe una función que tome un array de números como argumento y devuelva el promedio de todos sus elementos.
// 3. Escribe una función que tome un array de números como argumento y devuelva el array ordenado de forma ascendente.
// 4. Escribe una función que tome un array de números y un número como argumentos, y devuelva un nuevo array con los elementos mayores al número dado.
// 5. Escribe una función que tome dos arrays como argumentos y devuelva un nuevo array con todos los elementos de ambos arrays.
// 6. Escribe una función que tome un array de números como argumento y devuelva el número máximo dentro del array.
// 7. Escribe una función que tome un array de números como argumento y devuelva el número mínimo dentro del array.
// 8. Escribe una función que tome un array y un elemento como argumentos, y devuelva la cantidad de veces que el elemento aparece en el array.
// 9. Escribe una función que tome un array como argumento y devuelva un nuevo array sin elementos duplicados.
// 10. Escribe una función que tome un array como argumento y devuelva un nuevo array con los elementos en orden inverso.