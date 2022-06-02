saludandoAndo()
function saludandoAndo(nombre){
    alert("hola " + nombre + " como estas!")
    console.log("se ejecuta la funcion")
    prompt("te gusto la funcion /nSI/NO")
}

let nombre2 = prompt ("dime tu nombre")
saludandoAndo (nombre2)

function multiple () {
    if (edad>=18){ 
       alert("hola " + nombre + " como estas!") 
    }
    else { 
        alert("debes ser mayor de edad")
    }
    console.log(nombre + "vive en" + domicilio)
}