// Obtenemos el button y lo almacenamos en una variable llamada "btn"
var btnSumar = document.getElementById("btnSumar");
var btnRestar = document.getElementById("btnRestar");
var btnMultiplicar = document.getElementById("btnMultiplicar");
var btnDividir = document.getElementById("btnDividir");
/* Obtenemos el div que muestra el resultado y lo
almacenamos en una variable llamada "resultado" */
var alerta =document.getElementById("alerta");
var resultado = document.getElementById("resultado");
/* Obtenemos los dos input y los almacenamos en
variables "inputUno" y "inputDos" */
var inputUno = document.getElementById("input-uno");
var inputDos = document.getElementById("input-dos");
// Añadimos el evento click a la variable "btn"
btnSumar.addEventListener("click", function () {
    /* Obtenemos el valor de cada input accediendo a
    su atributo "value" */
    var n1 = inputUno.value;
    var n2 = inputDos.value;
    resultado.innerHTML = suma(n1, n2);
    alerta.innerHTML=" ";
    /* Llamamos a una función que permite realizar la
    suma de los números y los mostramos al usuario" */
    if (isNaN(parseInt(n1)) || isNan(parseInt(n2))) {
        alerta.innerHTML = "Ingrese 2 numeros validos";
    }
    


});
btnRestar.addEventListener("click", function () {
    var n1 = inputUno.value;
    var n2 = inputDos.value;
    resultado.innerHTML = resta(n1, n2);
    alerta.innerHTML=" ";
    if (isNaN(parseInt(n1)) || isNan(parseInt(n2))) {
        alerta.innerHTML = "Ingrese 2 numeros validos";
    }
    

});
btnMultiplicar.addEventListener("click", function () {
    var n1 = inputUno.value;
    var n2 = inputDos.value;
    resultado.innerHTML = multiplicacion(n1, n2);
    alerta.innerHTML=" ";
    if (isNaN(parseInt(n1)) || isNan(parseInt(n2))) {
        alerta.innerHTML = "Ingrese 2 numeros validos";
    }
    

});
btnDividir.addEventListener("click", function () {
    var n1 = inputUno.value;
    var n2 = inputDos.value;
    resultado.innerHTML = division(n1, n2);
    alerta.innerHTML=" ";
    if (parseInt(n2) == 0) {
        alerta.innerHTML = "Vuelva a ingresar el segundo numero, no puede ser cero";
    }else if (isNaN(parseInt(n1)) || isNan(parseInt(n2))) {
        alerta.innerHTML = "Ingrese 2 numeros validos";
    }
    

});
/* Función que retorna la suma de dos números */
function suma(n1, n2) {
    // Es necesario aplicar parseInt a cada número
    return parseInt(n1) + parseInt(n2);
}
function resta(n1, n2) {
    return parseInt(n1) - parseInt(n2);
}
function multiplicacion(n1, n2) {
    return parseInt(n1) * parseInt(n2);

}
function division(n1, n2) {
    return parseInt(n1) / parseInt(n2);
}