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
// Primero se declara la variable y despues se usan, no se usa y despues se crea
var btnBuscar = document.getElementById("cotizador")
// Colocate mal el nombre del input de texto
btnBuscar.addEventListener('click',buscarImagenConBuscador);

function buscarImagenConBuscador(){
  // https://www.youtube.com/watch?v=523ul-u_aFQ
  var buscadorTexto = document.getElementById("valor").value
  document.getElementById('busqueda').innerHTML = buscadorTexto

  imagenes.forEach((element) => {
    if (buscadorTexto === element.id) {
      document.getElementById('resultadoBusqueda').src = element.src
    }
  });
}
