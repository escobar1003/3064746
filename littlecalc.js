function ejecutaroperacion() {
  const input1 = (document.getElementById("input1").value);
  const input2 = (document.getElementById("input2").value);
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

