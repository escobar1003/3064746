var nombre="rider benavides";
var nombes=["rider benavides","juan lopez","manolo garcia","jose martin", 35, true];

var lenguajes= new Array("rider", "geovany", "benavides", "java");

var lenguajes= new array ("php", "js", "ruby", "java");

var elemento= parseInt(prompt("que elemento del array quieres?", 0));

(elemento) > nombres.length

? alert("introduce un numero menor que" + nombres.length)
: alert("el usuario seleccionado es" + nombres[elemento]);

//para recorrer un array usamos for

for(var i=0; i<lenguajes.length; i++){
    document.write("<li>" + lenguajes[i] + "</li>");
}
document.write("</ul>");

lenguajes.forEach((elementosdelarraylenguajes, indice) => {
    document.write("<li>" + indice + " - " + elementosdelarraylenguajes + "</li>");
});


while (i < lenguajes.length) {
    document.write("<li>" + lenguajes[i] + "</li>");
    i++;
}
document.write("</ul>");

//for: "Cuenta del 0 hasta el final del array y muestra cada elemento" 
// while: "Mientras no llegues al final del array, muestra el elemento actual y avanza al siguiente"

for (let lenguaje in lenguajes) {
    document.write("<li>" + lenguajes[lenguaje] + "</li>");
}
document.write("</ul>");

for (const lenguaje of lenguajes) {
    document.write("<li>" + lenguaje + "</li>");
}

















