// _____________
// CODIGO NUEVO
// _____________
// DEFINIMOS LAS VARIABLES DE LOS NOMBRES CONECTADNDOLO AL HTML
let nombreContacto = "";
let apellidoContacto = "";
let edadContacto = "";
let mailContacto = "";

// --------------------
// ESTO NO SE PORQUE SE PONE ACA PERO UENO
// ------------------------------
let boton = document.getElementById("guardar-contacto");
// --------------------------------------------------------------
// ACA PONEMOS QUE EL IMPUT DE CADA CELDA ES EL DEL HTML DESEADO
// --------------------------------------------------------------
let inputNombre = document.getElementById("nombre-contacto");
let inputApellido = document.getElementById("apellido-contacto");
let inputEdad = document.getElementById("edad-contacto");
let inputMail = document.getElementById("mail-contacto");
// --------------------------------------------
// AHORA PONEMOS EL EVENT LISTENER A LOS IMPUTS
// --------------------------------------------
inputNombre.addEventListener("input", () => {
  nombreContacto = inputNombre.value;
});
inputApellido.addEventListener("input", () => {
  apellidoContacto = inputApellido.value;
});
inputEdad.addEventListener("input", () => {
  edadContacto = inputEdad.value;
});
inputMail.addEventListener("input", () => {
  mailContacto = inputMail.value;
});
// _____________________
// ACA MANDAMOS EL JSON
// _____________________
// -------------------------------------------
// AHORA LE DECIMOS AL BOTON QUE HAGA LO SUYO
// -------------------------------------------
boton.addEventListener("click", () => {
  alert(
    nombreContacto +
      " " +
      apellidoContacto +
      " " +
      edadContacto +
      " " +
      mailContacto
  );
  const usuario = {
    nombreContacto: nombreContacto,
    apellidoContacto: apellidoContacto,
    edadContacto: edadContacto,
    mailContacto: mailContacto,
  };
  const enJSON = JSON.stringify(usuario);
  localStorage.setItem("usuario", enJSON);
});
