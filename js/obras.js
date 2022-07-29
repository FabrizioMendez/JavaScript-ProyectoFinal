// ____________
// CODIGO NUEVO
// ____________
// ARRANCAMOS CON UN ARRAY PARA GUARDAR LOS DATOS DE LA PERSONA QUE COMPRA LAS ENTRADAS
let ticketsPersona = [];
// DEFINIMOS LAS VARIABLES DE LOS NOMBRES CONECTADNDOLO AL HTML
let nombreObras = "";
let apellidoObras = "";
let mailObras = "";
let diaObras = "";
let horarioObras = "";
let nombreTarjeta = "";
let numeroTarjeta = "";
let fechaTarjeta = "";
let codigoTarjeta = "";
// --------------------
// ESTO NO SE PORQUE SE PONE ACA PERO UENO
// ------------------------------
let boton = document.getElementById("guardar-obras");
// ------------------------------------------
// ACA PONEMOS QUE EL IMPUT DE CADA CELDA ES EL DEL HTML DESEADO
// --------------------------------------------------------------
let inputNombre = document.getElementById("nombre-obras");
let inputApellido = document.getElementById("apellido-obras");
let inputMail = document.getElementById("mail-obras");
let inputDia = document.getElementById("dia-obras");
let inputHorario = document.getElementById("horario-obras");
let inputNombreTarjeta = document.getElementById("nombre-tarjeta");
let inputNumeroTarjeta = document.getElementById("numero-tarjeta");
let inputFechaTarjeta = document.getElementById("fecha-tarjeta");
let inputCodigoTarjeta = document.getElementById("codigo-tarjeta");
// --------------------------------------------
// AHORA PONEMOS EL EVENT LISTENER A LOS IMPUTS
// --------------------------------------------
inputNombre.addEventListener("input", () => {
  nombreObras = inputNombre.value;
});
inputApellido.addEventListener("input", () => {
  apellidoObras = inputApellido.value;
});
inputMail.addEventListener("input", () => {
  mailObras = inputMail.value;
});
inputDia.addEventListener("input", () => {
  diaObras = inputDia.value;
});
inputHorario.addEventListener("input", () => {
  horarioObras = inputHorario.value;
});
inputNombreTarjeta.addEventListener("input", () => {
  nombreTarjeta = inputNombreTarjeta.value;
});
inputNumeroTarjeta.addEventListener("input", () => {
  numeroTarjeta = inputNumeroTarjeta.value;
});
inputFechaTarjeta.addEventListener("input", () => {
  fechaTarjeta = inputFechaTarjeta.value;
});
inputCodigoTarjeta.addEventListener("input", () => {
  codigoTarjeta = inputCodigoTarjeta.value;
});
// CREAMOS EL ARRAY DE LAS ENTRADAS
let entradasCompradas = [];
// DATOS DE LA TARJETA O EFECTIVO  Y CANTIDAD DE ENTRADAS
let cantidad = document.getElementById("cantidad-entradas").value;
let metodoDePago = document.getElementById("metodo-de-pago").value;
let precioTotal = Number(cantidad) * 1000;
if (metodoDePago == "credito" || "debito") {
  let nombreTarjeta = document.getElementById("nombre-tarjeta");
  let numeroTarjeta = document.getElementById("numero-tarjeta");
  let fechaTarjeta = document.getElementById("fecha-tarjeta");
  let codigoTarjeta = document.getElementById("codigo-tarjeta");
  entradasCompradas.push(
    nombreTarjeta,
    numeroTarjeta,
    fechaTarjeta,
    codigoTarjeta,
    precioTotal
  );
} else if (metodoDePago == "efectivo") {
  entradasCompradas.push(precioTotal);
}

// -------------------------------------------
// AHORA LE DECIMOS AL BOTON QUE HAGA LO SUYO
// -------------------------------------------
boton.addEventListener("click", (e) => {
  e.preventDefault();
  ticketsPersona.push(
    nombreObras,
    apellidoObras,
    mailObras,
    diaObras,
    horarioObras,
    nombreTarjeta,
    numeroTarjeta,
    fechaTarjeta,
    codigoTarjeta
  );
  entradasCompradas.push(
    nombreTarjeta,
    numeroTarjeta,
    fechaTarjeta,
    codigoTarjeta,
    precioTotal
  );
  console.log(ticketsPersona, entradasCompradas);
  console.log(cantidad);
});
