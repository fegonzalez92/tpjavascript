function convertir() {
    var valore = parseInt(document.getElementById("valor").value);
    var resultado = 0;
    var dolar = 202;
    var euro = 260;
    
    if (document.getElementById("uno").checked){
        resultado = valore * dolar;
        alert("el cambio de dolares a pesos es: $" + resultado.toFixed(2));
    }
    else if (document.getElementById("dos").checked){
        resultado = valore * euro;
        alert("el resultado de euros a pesos es: " + resultado.toFixed(2));
    }
    else {
        alert("tienes que completar todos los requirimientos");
    }
}