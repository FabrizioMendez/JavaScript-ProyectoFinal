
// DATOS DE LA PERSONA QUE COMPRA LOS TICKETS
let ticketsPersona = []

let nombre = document.getElementsByClassName("nombre-obras");
let apellido =document.getElementsByClassName("apellido-obras");
let mail = document.getElementsByClassName("mail-obras");
let dia = document.getElementsByClassName("dia-obras");
let horario = document.getElementsByClassName("horario-obras");
let cantidad = document.getElementsByClassName("cantidad-obras");
ticketsPersona.push(nombre, apellido, mail, dia, horario, cantidad);

console.log(ticketsPersona);

// CREACION DEL ARRAY GRAL
let metodoDePagoArray = []

// SELECCION DE TARJETA O EFECTIVO
let pago = true
let metodoDePago = ""
while(pago){
// metodoDePago = prompt("Si quiere comprar con tarjeta, ingrese la palabra: tarjeta \n o sino con efectivo, ingrese la palabra: efectivo").toLowerCase();
if (metodoDePago =="tarjeta"){
    // alert("Seleccionaste el metodo de pago: Tarjeta");
    pago = false
} else if (metodoDePago == "efectivo"){
    // alert("Seleccionaste el metodo de pago: Efectivo.");
    pago = false
}else {
    // alert("Ingrese un dato valido.");
}
}
metodoDePagoArray.push(metodoDePago);
console.log(metodoDePago);
// DATOS DE LA TARJETA O EFECTIVO  Y CANTIDAD DE ENTRADAS
let precioTotal = Number(cantidad) * 1000;
if (metodoDePago == "tarjeta") {
    // let nombreTarjeta = prompt("Ingrese el nombre del titular de la tarjeta: ");
    // let numeroTarjeta = prompt("Ingrese el numero de la tarjeta: ");
    // let fechaTarjeta = prompt("Ingrese la fecha de expiracion de la tarjeta: ");
    // let codigoTarjeta = prompt("Ingrese el codigo de seguridad de la tarjeta: ");
    metodoDePagoArray.push(ticketsPersona, nombreTarjeta, numeroTarjeta, fechaTarjeta, codigoTarjeta, precioTotal);
}else if (metodoDePago == "efectivo") {
    metodoDePagoArray.push(ticketsPersona, precioTotal);
} 
console.log(metodoDePagoArray);