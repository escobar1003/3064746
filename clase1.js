function fngeo() {
    let datovarible = "";
    datovarible = document.getElementById("txtdato").value;
    console.log("ingrese el dato: ", datovarible);
}

function fncalcularider() {
    let numero1 = 0;
    let numero2 = 0;
    numero1 = document.querySelector("#txtnum1").value;
    numero2 = document.querySelector(".txtnum2").value;


let rsultadosuma = parseInt(numero1) + parseInt(numero2)
console.log("el resultado de la suma es: ",
    numero1, "+", numero2, "=", rsultadosuma);

console.log(`el resultado de la suma es: "
    ${numero1} + ${numero2} = ${rsultadosuma}`);

}


function fncalcularesta() {
let numero1 = 0;
let numero2 = 0;
numero1 = document.querySelector("#txtnum1").value;
numero2 = document.querySelector(".txtnum2").value;

let rsultadoresta = parseInt(numero1) - parseInt(numero2)
console.log("el resultado de la resta es: ",
    numero1, "-", numero2, "=", rsultadoresta);

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

