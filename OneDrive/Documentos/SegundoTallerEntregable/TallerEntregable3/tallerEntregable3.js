


function venta() {
    let producto = document.querySelector(".producto").value;
    let valor = Number(document.querySelector(".valor").value);
    desValor = Math.fround(valor * 0.07)
    ValDesc = Math.fround(valor - desValor)


    document.querySelector('.table tbody').innerHTML += `<td>${producto}</td><td>${valor}</td> <td>${desValor}</td> <td>${ValDesc}</td>`
}





