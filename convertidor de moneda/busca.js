 /*buscar imagen*/

 btnBuscar.addEventListener("buscarImagen");
 var btnBuscar = document.getElementById("Buscar")
 
 var value = document.getElementById("buscador")
   imagenes.forEach((element) => {
   if (value==element.id){
     console.log(element)
   }
   return;  
 });