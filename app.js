//let parrafo = document.querySelector("p");
//parrafo.innerHTML = "Indica un número entre el 1 y el 10"

//Declaración de función para crear una 

//Cambio de la declaración de variables con una función que haga la misma acción reduciendo el código
//elemento, texto --> parametros
/*
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
*/
//la función condiciones iniciales le va a dar el número secreto a la variable y empezar a contar los intentos
let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); //objeto
    elementoHTML.innerHTML = texto;
    return;
}

/*
function intentoDeUsuario() {
    alert("Click desde el botón");
    return;
}
*/

//Cambia de nombre la función tanto en JS como en HTML

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    /*
    console.log(intentos)
    console.log(typeof(numeroSecreto));
    console.log(numeroSecreto);
    console.log(typeof(numeroDeUsuario));
    console.log(numeroDeUsuario);
    */ //Sirve para mostrar en la consola el tipo de dato de cada variable
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos === 1)?"vez":"veces"}`);
        //remover el disabled del botón Nuevo Juego para que comience un nuevo juego
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        // El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    } 
    return;   
}

//Limpiar campo de caja de texto 
function limpiarCaja() {
    /*forma larga
    let valorCaja = document.querySelector("#valorUsuario");
    valorCaja.value = ""
    */
   document.querySelector("#valorUsuario").value = "";
}

//Generar Número Secreto Aleatorio - Arrays
function generarNumeroSecreto() {
    // return Math.floor(Math.random()*10)+1; en vez de retornar se va a declarar una variable
    // let numeroGenerado = Math.floor(Math.random()*10)+1; se declara la variable numeroMaximo

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);

    //Si ya sorteamos todos los números
    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
    } else {
        // Si el número generado está incluido en la lista -> Metodo Include: Recorrer todo el arreglo y ver si el valor ya está incluido
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
        //push lo coloca al final de la lista
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado; 
        }
    }
}

//Mostrar condiciones iniciales
function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto");
    //asignarTextoElemento("p", "Indica un número entre el 1 y el 10"); se reemplaza con Template Strings la variable declarada
    asignarTextoElemento("p", `Indica un número entre el 1 y el ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

//Reiniciar Juego
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    /* 
    Indicar mensaje de intervalor de números
    Generar numero secreto aleatorio
    Inicializar el número de intentos
    */
    condicionesIniciales();
    //Deshabilitar el botón de Nuevo juego - setAttribute
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();