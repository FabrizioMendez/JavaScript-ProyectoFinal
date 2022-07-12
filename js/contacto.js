let nombre = document.getElementsByClassName("nombre-contacto");
let apellido = document.getElementsByClassName("apellido-contacto");
let edad = document.getElementsByClassName("edad-contacto");
let mail = document.getElementsByClassName("mail-contacto");
class Usuario{
    constructor(nombre, apellido, edad, mail){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = Number (edad);
        this.mail = mail
    }
    calcularTiempo (edad){
        var today = new Date();
        var year = today.getFullYear();
        var nace = year - edad;
        var tiempo = nace - 1938;
        console.log("Un dato para que tengas presente: esta obra transcurre entre el dia de hoy y anecdotas de hace " + tiempo + " años antes de que nazcas.");
    }
}

let usuario1 = new Usuario ();
usuario1.calcularTiempo(usuario1.edad);