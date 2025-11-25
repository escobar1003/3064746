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
























function fngeo() {
    let datovarible = "";
    datovarible = document.getElementById("txtdato").value;
    console.log("ingrese el dato: ", datovarible);
    salidaparrafo(datovarible);
    alerta(datovarible);
}

function salidaparrafo(datovarible) {
    document.getElementById("pfosalida").innerHTML =
        `el dato ingresado en caja fue: ${datovarible}`;
}

function alerta(datovarible) {
    alert(`el dato ingresado en caja fue: ${datovarible}`);
}

















function fncalcularider() {
    let numero1 = 0;
    let numero2 = 0;
    numero1 = document.querySelector("#txtnum1").value;
    numero2 = document.querySelector(".txtnum2").value;


let rsultadosuma = parseInt(numero1) + parseInt(numero2)

console.log("el resultado de la suma es: ",
    numero1, "+", numero2, "=", rsultadosuma);

    document.getElementById("resultado").innerHTML = 
        `El resultado de la suma es: ${numero1} + ${numero2} = ${rsultadosuma}`;

console.log(`el resultado de la suma es: "
    ${numero1} + ${numero2} = ${rsultadosuma}`);

    alert(`el dato ingresado en caja fue: ${rsultadosuma}`);

   





}




function fncalcularesta() {
let numero1 = 0;
let numero2 = 0;
numero1 = document.querySelector("#txtnum1").value;
numero2 = document.querySelector(".txtnum2").value;

let rsultadoresta = parseInt(numero1) - parseInt(numero2)
console.log("el resultado de la resta es: ",
    numero1, "-", numero2, "=", rsultadoresta);

    document.getElementById("resultado").innerHTML = 
        `El resultado de la resta es: ${numero1} + ${numero2} = ${rsultadoresta}`;

console.log(`el resultado de la resta es: "
    ${numero1} - ${numero2} = ${rsultadoresta}`);    
}




function fncalculamultiplicacion() {
let numero1 = 0;
let numero2 = 0;
numero1 = document.querySelector("#txtnum1").value;
numero2 = document.querySelector(".txtnum2").value;     

let rsultadomulti = parseInt(numero1) * parseInt(numero2)
console.log("el resultado de la multiplicacion es: ",
    numero1, "*", numero2, "=", rsultadomulti);

    document.getElementById("resultado").innerHTML = 
        `El resultado de la multiplicacion es: ${numero1} + ${numero2} = ${rsultadomulti}`;

console.log(`el resultado de la multiplicacion es: "
    ${numero1} * ${numero2} = ${rsultadomulti}`);    
}

function fncalculadivision() {
let numero1 = 0;
let numero2 = 0;
numero1 = document.querySelector("#txtnum1").value;
numero2 = document.querySelector(".txtnum2").value;

let rsultadodivi = parseInt(numero1) / parseInt(numero2)
console.log("el resultado de la division es: ",
    numero1, "/", numero2, "=", rsultadodivi);

console.log(`el resultado de la division es: "
    ${numero1} / ${numero2} = ${rsultadodivi}`);    
}
