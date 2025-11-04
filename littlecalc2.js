
let numero1 = "";
let numero2 = "";
let operacionSeleccionada = "";
let entrandoEn = "numero1"; 


function agregarNumero(digito) {
  const pantalla = document.getElementById("pantalla");

  // si ya se presionó "=" y hay resultado, empezar a escribir nuevo
  if (entrandoEn === "reiniciar") {
    borrar();
  }


  if (entrandoEn === "numero1") {
    numero1 += String(digito);
    pantalla.value = numero1;

    document.getElementById("input1").value = numero1;
  } else {
    numero2 += String(digito);
    pantalla.value = numero1 + simboloOperacion(operacionSeleccionada) + numero2;
    document.getElementById("input2").value = numero2;
  }
}


function seleccionarOperacion(op) {

  if (!numero1) return;

  operacionSeleccionada = op;
  entrandoEn = "numero2";

  const pantalla = document.getElementById("pantalla");
  pantalla.value = numero1 + simboloOperacion(op);


  const sel = document.getElementById("operacion");
  if (sel) sel.value = op;
}


function simboloOperacion(op) {
  if (op === "sumar") return "+";
  if (op === "restar") return "-";
  if (op === "multiplicar") return "×";
  if (op === "dividir") return "÷";
  return "";
}


function borrar() {
  numero1 = "";
  numero2 = "";
  operacionSeleccionada = "";
  entrandoEn = "numero1";
  document.getElementById("pantalla").value = "";
  document.getElementById("resultado").innerHTML = "Resultado aparecerá aquí 💫";
 
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
  const sel = document.getElementById("operacion");
  if (sel) sel.value = "sumar";
}


function ejecutaroperacion() {

  document.getElementById("input1").value = numero1;
  document.getElementById("input2").value = numero2;
  if (document.getElementById("operacion")) {
    document.getElementById("operacion").value = operacionSeleccionada || "sumar";
  }


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

  
  document.getElementById("pantalla").value = resultado;
  numero1 = String(resultado);
  numero2 = "";
  operacionSeleccionada = "";
  entrandoEn = "reiniciar";
}

//para declarar ariables de usa let var o const

//con % en una division lo que se obtiene es el residuo


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
