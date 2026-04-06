const boton = document.getElementById("crear");
const paleta = document.getElementById("paleta");

boton.addEventListener("click", function() {

  const cantidad = document.getElementById("cantidad").value;
  const formato = document.getElementById("formato").value;

  paleta.innerHTML = ""; // limpia la paleta

  for (let i=0; i<cantidad; i++) {
    let color;

    if (formato === "hsl") {
      color = colorHSL();
    } else {
      color = colorHEX();
    }

  const fila = document.createElement("div"); //crea una fila del color en la paleta
  fila.classList.add("fila");
  fila.style.backgroundColor = color;  //permite ver el color de fondo
  fila.textContent = color;  // permite ver el código del color

  fila.addEventListener("click", () => {
  navigator.clipboard.writeText(color);
  mostrarMensaje("Copiado: " + color);
  });  //Función para copiar color

  switch(Number(cantidad)) {
    case 6:
      fila.style.height = "65px";
      break;

    case 8:
      fila.style.height = "48px";
      break;

    case 9:
      fila.style.height = "43px";
      break;
  }
  
  paleta.appendChild(fila); //mete la fila de color en el contenedor principal
  }
});


function colorHSL() {
  const H= Math.floor(Math.random() * 360);
  const S= Math.floor(Math.random() * 100);
  const L= Math.floor(Math.random() * 100); 

  return `hsl(${H}, ${S}%, ${L}%)`;

};


function colorHEX() {
  const digitos = "0123456789ABCDEF";
  let color = "#";

  for (let i=0; i<6; i++) {
    color += digitos [Math.floor(Math.random() * 16)]
  };

  return color;
};

function mostrarMensaje(texto) {
  const mensaje = document.getElementById("mensaje");
  mensaje.textContent = texto;
  mensaje.style.opacity = "1";

  setTimeout(() => {
    mensaje.style.opacity = "0";
  }, 1500);
}