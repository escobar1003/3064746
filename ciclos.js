// Arreglo de lenguajes
var lenguajes = ["js", "php", "html", "css", "python"];
var precios = [10, 20, 50, 80, 12];

// Esperar a que el HTML cargue antes de acceder a los elementos
document.addEventListener("DOMContentLoaded", function() {
  // Capturar elementos
  var boton = document.getElementById("btnBuscar");
  var texto = document.getElementById("texto");
  var resultado = document.getElementById("resultado");

  // Acción al hacer clic
  boton.addEventListener("click", function() {
    var termino = texto.value.toLowerCase();

    // Buscar si el lenguaje está en el arreglo
    var busqueda = lenguajes.find(lenguaje => lenguaje == termino);

    if (busqueda) {
      resultado.innerHTML = "✅ El lenguaje <b>" + busqueda + "</b> está en la lista.";
      resultado.style.color = "green";
    } else {
      resultado.innerHTML = "❌ No se encontró el lenguaje.";
      resultado.style.color = "red";
    }

    // Ejemplo adicional con precios
    var hayPrecioMayor20 = precios.some(precio => precio >= 20);
    console.log("¿Hay precios >= 20? " + hayPrecioMayor20);
  });
});
 



var precios= [10, 20, 50, 80, 12]; 
var busqueda = lenguajee.find(lenguaje=> lenguaje=="php"); 
var busqueda = lenguajes.findindex(lenguaje=> lenguaje=="js"); 
var busqueda = precios.some(precio=>precio>= 20); 
document.write(busqueda);