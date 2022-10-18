let aux = 0;
let auxn = ""
let aux1 = 1000;
let auxn1 = ""
function datos() {
    let nombre = document.querySelector(".nombre").value;
    let edad = document.querySelector(".edad").value;
    nombreEdad(nombre, edad);

    if (parseInt(document.querySelector(".edad").value) >= aux) {
        aux = parseInt(document.querySelector(".edad").value)
        auxn = document.querySelector(".nombre").value


    }
    if (parseInt(document.querySelector(".edad").value) <= aux1) {
        aux1 = parseInt(document.querySelector(".edad").value)
        auxn1 = document.querySelector(".nombre").value

    }
    document.querySelector('.personaMayor').innerHTML = `${auxn}, ${aux}`
    document.querySelector('.personaMenor').innerHTML = `${auxn1}, ${aux1}`
}
function nombreEdad(nombre, edad) {
    document.querySelector('.nombreEdad').innerHTML += `<tr><td>${nombre}</td><td>${edad}</td></tr>`;

}










