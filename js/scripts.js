const producto = {
    remera: 100,
    buzo: 300,
}

let compra = prompt('que desea comprar? remera, buzo')

if (compra == "remera") {
    alert('el costo de las remeras es de: ' + (producto.remera));
}

else if (compra == "buzo") {
    alert('el costo de los buzos es de: ' + (producto.buzo));
}

let cantidad = parseInt(prompt('que cantidad desea llevar'));

if (cantidad >= 5) {
    alert('llevando mas de 5 productos obtiene un 10% de descuento')
}

else ('')

let resultado

if (compra == "remera") {
    for (let i = 1; i <= cantidad; i++) {
        resultado = i*producto.remera;
    }
}

else if (compra == "buzo") {
    for (let i = 1; i <= cantidad; i++) {
        resultado = i*producto.buzo;
    }
}

let desc = resultado*0.10
let pagar = resultado - desc

alert('el total a pagar es de: ' + pagar)

let medioDePago = prompt('abona en efectivo o tarjeta'); 

if (medioDePago == "tarjeta") {
    alert('tiene hasta 3 cuotas sin interes, puede hasta 12')
}
    
else {
    alert('serian $' + pagar)
}

let cuotas = parseInt(prompt('en cuantas cuotas desea abonar?'))
let interes = 0.15;
let pagoEnCuotas = pagar/cuotas;
let totalAPagar = pagar*interes + pagoEnCuotas;

if (cuotas != 3) {
    totalAPagar;
    alert('con un recargo del 15%, le quedarian ' + cuotas + ' cuotas ' + 'con un valor de $' + totalAPagar)
}

else {
    alert('le quedarian ' + cuotas + ' cuotas ' + 'con un valor de $' + pagoEnCuotas);
}


alert('gracias por su compra')
