/* ===== variables globales (para que tus funciones usen numero1/numero2) ===== */
let numero1 = "";
let numero2 = "";
let operacionSeleccionada = "";
let entrandoEn = "numero1"; // controla si estamos escribiendo el primer o segundo número

/* ===== funciones auxiliares: para llenar la "pantalla" sin tocar tu lógica ===== */
function agregarNumero(digito) {
  const pantalla = document.getElementById("pantalla");

  // si ya se presionó "=" y hay resultado, empezar a escribir nuevo
  if (entrandoEn === "reiniciar") {
    borrar();
  }

  // añade dígito al campo actual
  if (entrandoEn === "numero1") {
    numero1 += String(digito);
    pantalla.value = numero1;
    // mantener los inputs que tu JS utiliza (compatibilidad)
    document.getElementById("input1").value = numero1;
  } else {
    numero2 += String(digito);
    pantalla.value = numero1 + simboloOperacion(operacionSeleccionada) + numero2;
    document.getElementById("input2").value = numero2;
  }
}

/* seleccionar operación desde los botones (+ - × ÷) */
function seleccionarOperacion(op) {
  // si no hay numero1, no permitir seleccionar (opcional)
  if (!numero1) return;

  operacionSeleccionada = op;
  entrandoEn = "numero2";
  // actualizar pantalla con símbolo
  const pantalla = document.getElementById("pantalla");
  pantalla.value = numero1 + simboloOperacion(op);

  // mantener el select oculto que usa tu JS
  const sel = document.getElementById("operacion");
  if (sel) sel.value = op;
}

/* convertir nombre de operación en símbolo visual */
function simboloOperacion(op) {
  if (op === "sumar") return "+";
  if (op === "restar") return "-";
  if (op === "multiplicar") return "×";
  if (op === "dividir") return "÷";
  return "";
}

/* borrar todo */
function borrar() {
  numero1 = "";
  numero2 = "";
  operacionSeleccionada = "";
  entrandoEn = "numero1";
  document.getElementById("pantalla").value = "";
  document.getElementById("resultado").innerHTML = "Resultado aparecerá aquí 💫";
  // limpiar los inputs (compatibilidad con tu JS)
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
  const sel = document.getElementById("operacion");
  if (sel) sel.value = "sumar";
}

/* ===== tu función principal (la que dijiste que no cambie): la dejamos igual ===== */
function ejecutaroperacion() {
  // para compatibilidad, rellenamos #input1 #input2 y #operacion con los valores actuales
  document.getElementById("input1").value = numero1;
  document.getElementById("input2").value = numero2;
  if (document.getElementById("operacion")) {
    document.getElementById("operacion").value = operacionSeleccionada || "sumar";
  }

  // convertimos a números usando parseFloat tal como tú hacías
  const input1 = parseFloat(document.getElementById("input1").value);
  const input2 = parseFloat(document.getElementById("input2").value);
  const operacion = document.getElementById("operacion").value;
  const resultadoelemento = document.getElementById("resultado");
  let resultado;

  switch (operacion) {
    case "sumar":
      resultado = input1 + input2;
      break;
    case "restar":
      resultado = input1 - input2;
      break;
    case "multiplicar":
      resultado = input1 * input2;
      break;
    case "dividir":
      resultado = input1 / input2;
      break;
    default:
      resultado = "Operación no válida";
      break;
  }

  resultadoelemento.innerHTML = `El resultado es: ${resultado}`;

  // actualizamos la pantalla con el resultado y preparamos para seguir operando
  document.getElementById("pantalla").value = resultado;
  numero1 = String(resultado);
  numero2 = "";
  operacionSeleccionada = "";
  entrandoEn = "reiniciar";
}

/* ===== tus funciones de salida (las dejé exactamente como en tu JS original) ===== */
function fnsalidasuma(rsultadosuma) {
    document.getElementById("resultado").innerHTML = 
        `El resultado de la suma es: ${numero1} + ${numero2} = ${rsultadosuma}`;
}

function fnsalidaresta(resultadoresta) {
    document.getElementById("resultado").innerHTML = 
        `El resultado de la resta es: ${numero1} - ${numero2} = ${resultadoresta}`;
}

function fnsalidamultiplicacion(resultadomultiplicacion) {
    document.getElementById("resultado").innerHTML = 
        `El resultado de la multiplicación es: ${numero1} * ${numero2} = ${resultadomultiplicacion}`;
}
