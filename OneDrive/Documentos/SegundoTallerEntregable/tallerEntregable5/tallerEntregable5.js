let vagon1 = [];
let vagon2 = [];
let vagon3 = [];
let vagon4 = [];
let vagon5 = [];
let vagon6 = [];
let vagon7 = [];
let vagon8 = [];
let vagon9 = [];
let vagon10 = [];
let persona1 = 0
let persona2 = 0
let persona3 = 0
let persona4 = 0
let persona5 = 0
let persona6 = 0
let persona7 = 0
let persona8 = 0
let persona9 = 0
let persona10 = 0



function pasajero() {

    let nombres = document.querySelector(".nombre");
    let id = document.querySelector(".id");
    let vagon = document.querySelector(".vagon");
    let usuario = { nombre: nombres.value, id: id.value, vagon: vagon.value }

    if (vagon.value == 1 && persona1 < 10) {
        vagon1.push(usuario)
        document.querySelector(".vagon1 tbody").innerHTML += `<tr class="cc${id.value}"><td>${usuario.nombre}</td><td>${usuario.id}</td></tr>`
        persona1++
    }
    if (vagon.value == 2 && persona2 < 10) {
        vagon2.push(usuario)
        document.querySelector(".vagon2 tbody").innerHTML += `<tr class="cc${id.value}"><td>${usuario.nombre}</td><td>${usuario.id}</td></tr>`
        persona2++
    }
    if (vagon.value == 3 && persona3 < 10) {
        vagon3.push(usuario)
        document.querySelector(".vagon3 tbody").innerHTML += `<tr class="cc${id.value}"><td>${usuario.nombre}</td><td>${usuario.id}</td></tr>`
        persona3++
    }
    if (vagon.value == 4 && persona4 < 10) {
        vagon4.push(usuario)
        document.querySelector(".vagon4 tbody").innerHTML += `<tr class="cc${id.value}"><td>${usuario.nombre}</td><td>${usuario.id}</td></tr>`
        persona4++
    }
    if (vagon.value == 5 && persona5 < 10) {
        vagon5.push(usuario)
        document.querySelector(".vagon5 tbody").innerHTML += `<tr class="cc${id.value}"><td>${usuario.nombre}</td><td>${usuario.id}</td></tr>`
        persona5++
    }
    if (vagon.value == 6 && persona6 < 10) {
        vagon6.push(usuario)
        document.querySelector(".vagon6 tbody").innerHTML += `<tr class="cc${id.value}"><td>${usuario.nombre}</td><td>${usuario.id}</td></tr>`
        persona6++
    }
    if (vagon.value == 7 && persona7 < 10) {
        vagon7.push(usuario)
        document.querySelector(".vagon7 tbody").innerHTML += `<tr class="cc${id.value}"><td>${usuario.nombre}</td><td>${usuario.id}</td></tr>`
        persona7++
    }
    if (vagon.value == 8 && persona8 < 10) {
        vagon8.push(usuario)
        document.querySelector(".vagon8 tbody").innerHTML += `<tr class="cc${id.value}"><td>${usuario.nombre}</td><td>${usuario.id}</td></tr>`
        persona8++
    }
    if (vagon.value == 9 && persona9 < 10) {
        vagon9.push(usuario)
        document.querySelector(".vagon9 tbody").innerHTML += `<tr class="cc${id.value}"><td>${usuario.nombre}</td><td>${usuario.id}</td></tr>`
        persona9++
    }
    if (vagon.value == 10 && persona10 < 10) {
        vagon10.push(usuario)

        persona10++
    }
}

function borrar() {
    let id = document.querySelector(".id").value;
    document.querySelector(`.cc${id}`).innerHTML = ''

}






