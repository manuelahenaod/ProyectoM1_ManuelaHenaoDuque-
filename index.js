const boton = document.getElementById("crear");
const paleta = document.getElementById("paleta");
let colores = [];
let timeoutMensaje;

function mostrarColor(rgb, formato, cantidad) {
  let color;

  if (formato === "hsl") {
    color = colorHSL(rgb);
  } else {
    color = colorHEX(rgb);
  }

  const fila = document.createElement("div");
  fila.classList.add("fila");

  fila.style.backgroundColor = color;
  fila.textContent = color;

  fila.addEventListener("click", () => {
    navigator.clipboard.writeText(color);
    mostrarMensaje("Copiado: " + color);
  });

  switch(cantidad) {
    case "6":
      fila.style.height = "65px";
      break;
    case "8":
      fila.style.height = "48px";
      break;
    case "9":
      fila.style.height = "43px";
      break;
  }

  paleta.appendChild(fila);
}

function colorRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return { r, g, b };
}

function colorHSL({ r, g, b }) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;

  let h = 0;
  let s = d === 0 ? 0 : d / (1 - Math.abs(2 * ((max + min) / 2) - 1));
  let l = (max + min) / 2;

  if (d !== 0) {
    h =
      max === r ? ((g - b) / d + (g < b ? 6 : 0)) :
      max === g ? (b - r) / d + 2 :
                  (r - g) / d + 4;

    h *= 60;
  }

  return `hsl(${Math.round(h)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
}

function colorHEX({ r, g, b }) {
  return "#" + [r, g, b]
    .map(x => x.toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase();
}

function mostrarMensaje(texto) {
  const mensaje = document.getElementById("mensaje");
  
  mensaje.style.display = "block";
  mensaje.textContent = texto;
  mensaje.style.opacity = "1";

  clearTimeout(timeoutMensaje);

  timeoutMensaje = setTimeout(() => {
    mensaje.style.display = "none";
  }, 1500);
}

boton.addEventListener("click", function() {

  const cantidad = document.getElementById("cantidad").value;
  const formato = document.getElementById("formato").value;

  paleta.innerHTML = "";
  colores = [];

  for (let i = 0; i < cantidad; i++) {

    const rgb = colorRGB();
    colores.push(rgb);

    mostrarColor(rgb, formato, cantidad);
  }
});

document.getElementById("formato").addEventListener("change", function() {
  const formato = this.value;
  const cantidad = document.getElementById("cantidad").value;

  paleta.innerHTML = "";

  if (colores.lenght === 0) return;

  colores.forEach(rgb => {
    mostrarColor(rgb, formato, cantidad);
  });
});