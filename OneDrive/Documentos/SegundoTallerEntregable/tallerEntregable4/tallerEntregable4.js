function respuesta() {
    let presente = 1;
    let antes = 0;
    let numero = Number(document.querySelector(".numero").value);
    let resultado;
    for (let i = 1; i <= numero; i++) {
        resultado = presente + antes;
        antes = presente;
        presente = resultado;
        document.querySelector('.table tbody').innerHTML += `<td>${resultado}</td>`
    }

}