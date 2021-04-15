var nro1 = document.getElementById("input-1");
var nro2 = document.getElementById("input-2");
var btn = document.getElementById("enviar");
var resultado = document.getElementById("resultado");
btn.addEventListener("click", function () {
    var n1 = nro1.value;
    var n2 = nro2.value;
    resultado.innerHTML = aleatorio(n1, n2);
});

function aleatorio(n1, n2) {
    return Math.floor(Math.random() * (parseInt(n2) - (parseInt(n1) - 1))) + parseInt(n1);

}