
let a = 0;
let b = 0;
let c = 0;



function calculo() {
    let notas = 0;

    notas = document.querySelector(".numero").value;

    if (notas > 0) {
        a++;
    }

    if (notas < 0) {
        b++;
    }

    if (notas == 0) {
        c++;
    }

    document.querySelector('.numerosMayoresCero').innerHTML = `Numeros Mayores a cero ${a}`
    document.querySelector('.numerosMenoresCero').innerHTML = `Numeros Menores a cero ${b}`
    document.querySelector('.numerosIgualesCero').innerHTML = `Numeros iguales a cero ${c}`
}






