function suma (numbUno, numbDos){
    return numbUno + numbDos
}
function resta (numbUno, numbDos){
    return numbUno - numbDos
}
function multiplicar (numbUno, numbDos){
    return numbUno * numbDos
}
function division (numbUno, numbDos){
    return numbUno / numbDos
}
function calculadora (numbUno, numbDos, operacion){
    let total
    if (operacion == "suma"){
        total=suma (numbUno, numbDos)
    }else if (operacion == "resta"){
        total=resta (numbUno, numbDos)
    }else if (operacion == "multiplicar"){
        total=multiplicar (numbUno, numbDos)
    }else if (operacion == "division"){
        total=division (numbUno, numbDos)
    }else{
        alert ("no entendi")
    }
    return total
}
let valor = calculadora (10,13,"multiplicar")
console.log (valor)