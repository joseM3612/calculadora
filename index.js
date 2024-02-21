
const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
})

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
})

document.addEventListener('click', (e) => {
    if(e.target.matches('.del')){
        display.borrar();
    }
    if(e.target.matches('.reset')){
        display.borrarTodo();
    }
    if(e.target.matches('#btnMode')){
        mode();
    }
})
