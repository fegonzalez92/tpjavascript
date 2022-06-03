/*Variables*/

const btnCierra = document.querySelector('#btn-cierra');
const btnAdelanta = document.querySelector('#btn-adelanta');
const btnRetrocede = document.querySelector('#btn-retrocede');
const imagenes = document.querySelectorAll('#galeria img');
const lightbox = document.querySelector('#contenedor-principal');
const imagenActiva = document.querySelector('#img-activa');
let indiceImagen = 0;

/*Abre el Lightbox*/

const abreLightbox = (event) => {
  imagenActiva.src = event.target.src;
  lightbox.style.display = 'flex';
  indiceImagen = Array.from(imagenes).indexOf(event.target);
};

imagenes.forEach((imagen) => {
  imagen.addEventListener('click', abreLightbox);
});

/*Cierra el Lightbox */

btnCierra.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

/* Adelanta la imagen*/

const adelantaImagen = () => {
  if (indiceImagen === imagenes.length - 1) {
    indiceImagen = -1;
  }
  imagenActiva.src = imagenes[indiceImagen + 1].src;
  indiceImagen++;
};

btnAdelanta.addEventListener('click', adelantaImagen);

/*Retrocede la Imagen*/

const retrocederImagen = () => {
  if (indiceImagen === 0) {
    indiceImagen = imagenes.length;
  }
  imagenActiva.src = imagenes[indiceImagen - 1].src;
  indiceImagen--;
};

btnRetrocede.addEventListener('click', retrocederImagen);

/*buscar imagen*/
var btnBuscar = document.getElementById("cotizador")
btnBuscar.addEventListener('click',buscarImagenConBuscador);

function buscarImagenConBuscador(){
  
  var buscadorTexto = document.getElementById("valor").value
  document.getElementById('busqueda').innerHTML = buscadorTexto

  imagenes.forEach((element) => {
    if (buscadorTexto === element.id) {
      document.getElementById('resultadoBusqueda').src = element.src
    }
  });
  while (listadoImagenes.hasChildNodes()) {
    listadoImagenes.removeChild(listadoImagenes.firstChild);
}
//esto es para poder cargar las imagenes originales sino se encuentra la imagen
if(filtradoImagenes.length === 1) {
    filtradoImagenes = imagenes;
}
}
