const lenguajes = ["js", "php", "html", "css", "python"];
const pantalla = document.getElementById("pantalla");
const resultadoDiv = document.getElementById("resultado");

// Añadir valor al input cuando se presionan los botones
function agregar(valor) {
  pantalla.value += valor;
}

// Limpiar pantalla y resultado
function borrar() {
  pantalla.value = "";
  resultadoDiv.innerHTML = "Resultado aparecerá aquí 👇";
  resultadoDiv.style.color = "#555";
}

// Detectar Enter para calcular también
pantalla.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    calcular();
  }
});

function calcular() {
  const entrada = pantalla.value.trim().toLowerCase();

  // Si el usuario no escribió nada
  if (entrada === "") {
    resultadoDiv.innerHTML = "❌ No escribiste nada.";
    resultadoDiv.style.color = "red";
    return;
  }

  // Si solo contiene letras → verificar lenguaje
  if (/^[a-z]+$/.test(entrada)) {
    if (lenguajes.includes(entrada)) {
      resultadoDiv.innerHTML = `✅ El lenguaje <b>${entrada}</b> ha sido encontrado.`;
      resultadoDiv.style.color = "green";
    } else {
      resultadoDiv.innerHTML = `❌ El lenguaje <b>${entrada}</b> no se encontró.`;
      resultadoDiv.style.color = "red";
    }
    return;
  }

  // Si contiene números u operadores → evaluar operación matemática
  if (/^[0-9+\-*/.() ]+$/.test(entrada)) {
    try {
      const resultado = eval(entrada);
      resultadoDiv.innerHTML = `🧮 Resultado: ${resultado}`;
      resultadoDiv.style.color = "#000";
    } catch {
      resultadoDiv.innerHTML = "❌ Operación no válida.";
      resultadoDiv.style.color = "red";
    }
    return;
  }

  // Si no es ni palabra ni operación válida
  resultadoDiv.innerHTML = "❌ Entrada no reconocida.";
  resultadoDiv.style.color = "red";
}