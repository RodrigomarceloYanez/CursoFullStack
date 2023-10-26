// Función que muestra un alert con el mensaje "Bienvenido"
function mostrarAlerta() {
    alert("Bienvenido a la primera pagina de Rodrigo");
  }

// se asigna la función al evento onload del objeto window
window.onload = mostrarAlerta;

// Función alerta con datos del creador del sitio.
function datosAlerta(){
  alert("Rodrigo Yañez.\nrodrigoyanez@gmail.com\nBahia Blanca.")
}

/* // Función que cambia el estilo. funcion sencilla
function cambioEstilo(){
document.body.style.backgroundColor = "black";
document.getElementById("seccion").style.color = "white"; */

 
// Función que cambia el estilo de vizualizacion. 
// se usa variables, condicional y exp booleanas, es mejor ya que permite volver al estilo anterior.
function cambioEstilo() {
  const contenido = document.getElementById("seccion");
  const estiloActual = contenido.style;
  const fondoActual = estiloActual.backgroundColor;

  if (fondoActual === "white" || fondoActual === "") {
      contenido.style.backgroundColor = "black";
      contenido.style.color = "white";
  } else {
      contenido.style.backgroundColor = "white";
      contenido.style.color = "black";
  }
}
