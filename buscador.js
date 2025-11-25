// ==================================
// 🧮 CALCULADORA CON SWITCH
// ==================================
function ejecutarOperacion() {
  const input1 = document.getElementById('input1').value;
  const input2 = document.getElementById('input2').value;
  const operacion = document.getElementById('operacion').value;
  const resultadoElemento = document.getElementById('resultado');
  let resultado;

  switch (operacion) {
    case 'sumar':
      resultado = sumarNumeros(input1, input2);
      break;
    case 'restar':
      resultado = restarNumeros(input1, input2);
      break;
    case 'multiplicar':
      resultado = multiplicarNumeros(input1, input2);
      break;
    default:
      resultadoElemento.innerHTML = "Operación no válida";
      return;
  }

  resultadoElemento.innerHTML = "Resultado: " + resultado;
}

function sumarNumeros(a, b) {
  return parseFloat(a) + parseFloat(b);
}

function restarNumeros(a, b) {
  return parseFloat(a) - parseFloat(b);
}

function multiplicarNumeros(a, b) {
  return parseFloat(a) * parseFloat(b);
}

// ==================================
// 🔍 BÚSQUEDA INTERACTIVA EN ARREGLOS
// ==================================
var lenguajes = ["JavaScript", "Python", "PHP", "C++"];
var precios = [10, 20, 50, 80, 12];

// Buscar si el lenguaje existe (.find)
function buscarLenguaje() {
  var valor = document.getElementById("valorBusqueda").value;
  var busqueda = lenguajes.find(lenguaje => lenguaje.toLowerCase() === valor.toLowerCase());

  if (busqueda) {
    document.getElementById("busqueda").innerHTML = "✅ Lenguaje encontrado: " + busqueda;
  } else {
    document.getElementById("busqueda").innerHTML = "❌ No se encontró el lenguaje '" + valor + "'";
  }
}

// Buscar índice de un lenguaje (.findIndex)
function buscarIndice() {
  var valor = document.getElementById("valorBusqueda").value;
  var indice = lenguajes.findIndex(lenguaje => lenguaje.toLowerCase() === valor.toLowerCase());

  if (indice !== -1) {
    document.getElementById("busqueda").innerHTML = "📍 El índice de '" + valor + "' es: " + indice;
  } else {
    document.getElementById("busqueda").innerHTML = "❌ No se encontró el lenguaje '" + valor + "'";
  }
}

// Verificar si hay un precio mayor o igual al valor ingresado (.some)
function buscarPrecio() {
  var valor = parseFloat(document.getElementById("valorBusqueda").value);

  if (isNaN(valor)) {
    document.getElementById("busqueda").innerHTML = "⚠️ Por favor, ingresa un número válido.";
    return;
  }

  var existe = precios.some(precio => precio >= valor);

  if (existe) {
    document.getElementById("busqueda").innerHTML = "💰 Sí hay precios mayores o iguales a " + valor;
  } else {
    document.getElementById("busqueda").innerHTML = "🚫 No hay precios mayores o iguales a " + valor;
  }
}