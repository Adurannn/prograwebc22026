
// //Sirve para imprimir mensajes en la consola.
// /*Pero si ocupamos 
// muchos 
// comentarios*/
// console.log("Me muestra informacion"); //Esto es similar al print


// //las variables
// let nombre = "Mario"; //Tipo String

// let edad = 40;//Number o integer

// let salario = 1000.05; //Decimal

// let estados = true; //Booolena

// let valorSinNada = null;

// let valorSinDefinir = undefined;
// //Genera estructuras const


// console.log(nombre) ;
// console.log("Mi nombre es: " + nombre) ;//Concatenar con el signo de mas(+)


// //Operadores aritmeticos
// let suma =  6 +8;
// let resta = 8 -3;
// let multiplicar = 8*9;
// let dividir = 32/4;

// //Operados con comparacion
// console.log(5>3);
// console.log(1<9);
// console.log(5 == 5);
// console.log(5 >= 5 );
// console.log(6 <= 6);
// console.log(6 != 16);
// console.log(6 == "6");
// console.log(6 === "6");
// console.log(6 !== "6");



//////////////////
//Operadores logicos
// console.log(AND)
console.log(false && true);

// console.log(OR)
console.log(true || false);

//Condicion if???

let notas = 80;

if (notas >= 70) {
    console.log("Curso aprobado");
}

//Else if

let notass = 60;

if (notass >= 70) {
    console.log("Curso aprobado");
}
else {
    console.log("No aprobo");
}


//if Else if

let nota = 70;

if (nota >= 80) {
    console.log("Curso aprobado con buena nota");
}
else if (nota >= 70) {
    console.log("Curso aprobado con nota aprobatorio");
}
else {
    console.log("No aprobo");
}

//Swicth o case

let opciones = 22;

switch (opciones) {
    case 1:
        console.log("Opcion 1");
        break;

    case 2:
        console.log("Opcion 2");
        break;

    default:
        console.log("Opcion no valida");

}



let contador = 23;

while (contador <= 30) {
    console.log(contador);
    contador++; //= contador = contador + 1
}


do {
    console.log(contador);
    contador++; //= contador = contador + 1
} while (contador <= 40);


for (let index = 0; index < 30; index++) {
    console.log(index);

}

//Los arreglos
let nombreArreglo = ["Mario", "Alberto", "Isaac"];
console.log(nombreArreglo);

nombreArreglo.forEach(element => {
    console.log("Su nombre es: " + element)
});

//Funciones

function saludos() {
    console.log("Bienvenido al sistema");
}

saludos();


function saludosPersonalizados(parametroNombre) {
    console.log("Bienvenido al sistema, usuario: " + parametroNombre);
}

saludosPersonalizados("Profe Mario");

function saludosPersonalizadosRetorno(parametroNombre) {
    return "Bienvenido al sistema, usuario: " + parametroNombre;
}

console.log(saludosPersonalizadosRetorno("Profe Mario"));

//El objeto
//llave y valor
let estudiante = {
    "id": 1111,
    "nombre": "Profe Mario",
    "edad": 44
};

console.log(estudiante);
console.log(estudiante.nombre);