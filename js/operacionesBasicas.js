// Accedemos al parrafo
const parrafo = document.querySelector("#idParrafo");
console.log(parrafo);

// Accedemos a cada boton por medio de la API DOM
const btnSumar = document.querySelector("#idBtnSumar");
const btnRestar = document.querySelector("#idBtnRestar");
const btnMultiplicar = document.querySelector("#idBtnMultiplicar");
const btnDividir = document.querySelector("#idBtnDividir");

//Agregamos el evento click a los botones y se le asigna la función que realizará la operación
btnSumar.addEventListener("click", sumar);
btnRestar.addEventListener("click", restar);
btnMultiplicar.addEventListener("click", multiplicar);
btnDividir.addEventListener("click", dividir);

// Creamos la variable que tendrá el resultado
let resultado;


//funciones de operaciones
function sumar() {
    let numero1 = parseInt(prompt("Ingrese el primer número"));
    let numero2 = parseInt(prompt("Ingrese el segundo número"));
    resultado = numero1 + numero2;
    parrafo.innerHTML = `${numero1} + ${numero2} = ${resultado}`;
}

function restar() {
    let numero1 = parseInt(prompt("Ingrese el primer número"));
    let numero2 = parseInt(prompt("Ingrese el segundo número"));
    resultado = numero1 - numero2;
    parrafo.innerHTML = `${numero1} - ${numero2} = ${resultado}`;
}

function multiplicar() {
    let numero1 = parseInt(prompt("Ingrese el primer número"));
    let numero2 = parseInt(prompt("Ingrese el segundo número"));
    resultado = numero1 * numero2;
    parrafo.innerHTML = `${numero1} * ${numero2} = ${resultado}`;
}

function dividir(){
    let numero1 = parseInt(prompt("Ingrese el primer número a dividir"));
    let numero2 = parseInt(prompt("Ingrese el segundo número a dividir"));
    let mensaje;
    
    if(numero2 != 0){
        resultado = numero1 / numero2;
        mensaje = `${numero1} / ${numero2} = ${resultado}`;
    } else {
        mensaje = `El valor ${numero1} / ${numero2} no se puede dividir`
    }

    parrafo.innerHTML = mensaje;
}