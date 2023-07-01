//*Referencias al DOM
//TODO:operar sobre un resultado anterior

const calculadoraNumeros = document.querySelectorAll('.numero');
const calculadoraOperadores = document.querySelectorAll('.operador');
const calculadoraIgual = document.getElementById('igual');
const calculadoraReset = document.getElementById('reset1');
const operacion = document.getElementById('operacion');
const calculadoraBorrar = document.querySelector('.borrar');
const valorActual = document.getElementById('valor-actual');
const valorAnterior = document.getElementById('valor-anterior');

//* Variables

let resultado;

//* Calculus

const calculo = {
    valor1:'',
    valor2:''

};

//* Listener a los botones con numeros

calculadoraNumeros.forEach((element)=>{
    element.addEventListener('click', e =>{
        guardamosPrimerNumero(e)
            }
        )
    }
)

const guardamosPrimerNumero = (e)=>{
    valorActual.innerText = valorActual.innerText + e.target.innerText
}


//* Listener a los operadores 

calculadoraOperadores.forEach((element)=>{
    element.addEventListener('click', e=>{
        operacion.innerText = e.target.innerText
        calculo.valor1 = valorActual.innerText
        valorAnterior.innerText = valorActual.innerText
        valorActual.innerText = ''
    })
})

//* Listener al igual y solucion

calculadoraIgual.addEventListener('click', e =>{
    solucion()
})

const solucion = ()=>{
    calculo.valor1 = calculo.valor1 * 1
    calculo.valor2 = valorActual.innerText * 1
    console.log(calculo.valor2)

    if ( operacion.innerText == '/' ){
        valorAnterior.innerText = calculo.valor1 / calculo.valor2
    }
    else if ( operacion.innerText == 'X'){
        valorAnterior.innerText = calculo.valor1 * calculo.valor2
    }
    else if ( operacion.innerText == '-'){
        valorAnterior.innerText = calculo.valor1 - calculo.valor2
    }
    else if ( operacion.innerText == '+'){
        valorAnterior.innerText = calculo.valor1 + calculo.valor2
    }
    valorActual.innerText = ''
    operacion.innerText = ''
};

//* Listener y funcion de reset

calculadoraReset.addEventListener( 'click', e =>{
    valorAnterior.innerText = ''
    valorActual.innerText = ''
    operacion.innerText = ''
    calculo.valor1 = ''
    calculo.valor2 = ''
    resultado = ''
})

//* Listener y funcion de borrar 

calculadoraBorrar.addEventListener('click', e=>{
    valorActual.innerText = valorActual.innerText.slice(0,-1)
})