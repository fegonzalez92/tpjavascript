let arrayfrutal = ["cereza","piña","banana","mango","kiwi"]

let frutaEliminar = prompt("agregue la fruta que desea eliminar:")
frutaEliminar = frutaEliminar.toLocaleLowerCase()
let indiceFruta = arrayfrutal.indexOf(frutaEliminar)
if(indiceFruta>0){
    arrayfrutal.splice(indiceFruta,1)
} 
console.table(arrayfrutal)