function ejecutaroperacion() {
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
    default:
      resultado = "Operación no válida";
      break;
  }

  resultadoelemento.innerHTML = `El resultado es: ${resultado}`;
}

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

