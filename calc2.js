const display = document.getElementById("display");
const resultadoDiv = document.getElementById("resultado");

const lenguajes = ["js", "php", "html", "css", "python"];
const precios = [10, 20, 50, 80, 12];

// === Funciones de la calculadora ===
function agregar(valor) {
  display.value += valor;
}

function limpiar() {
  display.value = "";
  resultadoDiv.innerHTML = "🧮 Resultado aparecerá aquí.";
  resultadoDiv.style.color = "black";
}

function calcular() {
  try {
    const resultado = eval(display.value);
    resultadoDiv.innerHTML = `🧮 Resultado: ${resultado}`;
    resultadoDiv.style.color = "black";
  } catch {
    resultadoDiv.innerHTML = "❌ Error en la operación.";
    resultadoDiv.style.color = "red";
  }
}

// === Búsqueda de lenguaje al escribir ===
display.addEventListener("input", () => {
  const texto = display.value.toLowerCase();
  if (lenguajes.includes(texto)) {
    resultadoDiv.innerHTML = `✅ El lenguaje <b>${texto}</b> ha sido encontrado.`;
    resultadoDiv.style.color = "green";
  }
});

// === Funciones de búsqueda por botones ===
function buscarPHP() {
  const encontrado = lenguajes.find(l => l === "php");
  if (encontrado) {
    resultadoDiv.innerHTML = `✅ Se encontró el lenguaje <b>${encontrado}</b>.`;
    resultadoDiv.style.color = "green";
  } else {
    resultadoDiv.innerHTML = "❌ No se encontró PHP.";
    resultadoDiv.style.color = "red";
  }
}

function buscarJS() {
  const indice = lenguajes.findIndex(l => l === "js");
  if (indice !== -1) {
    resultadoDiv.innerHTML = `🔢 El lenguaje <b>JS</b> está en la posición ${indice}.`;
    resultadoDiv.style.color = "blue";
  } else {
    resultadoDiv.innerHTML = "❌ No se encontró JS.";
    resultadoDiv.style.color = "red";
  }
}

function buscarPrecio() {
  const hayMayor = precios.some(p => p >= 20);
  if (hayMayor) {
    resultadoDiv.innerHTML = "💰 Sí hay precios mayores o iguales a 20.";
    resultadoDiv.style.color = "purple";
  } else {
    resultadoDiv.innerHTML = "❌ No hay precios mayores o iguales a 20.";
    resultadoDiv.style.color = "red";
  }
}