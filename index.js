const boton = document.getElementById("crear");
const paleta = document.getElementById("paleta");

boton.addEventListener("click", function() {

  const cantidad = document.getElementById("cantidad").value;
  const formato = document.getElementById("formato").value;

});

function colorHSL() {
  const H= Math.floor(Math.random() * 360);
  const S= Math.floor(Math.random() * 100);
  const L= Math.floor(Math.random() * 100); 

  return `hsl(${H}, ${S}%, ${L}%)`;

}

console.log ("color", colorHSL());

function colorHEX() {
const digitos = "0123456789ABCDEF";
let color = "#";

for (let i=0; i<6; i++) {
  color += digitos [Math.floor(Math.random() * 16)]
};

return color;
};

console.log ("color", colorHEX());
