// Alumno Lucas Robledo
// Comision B

let nombre = prompt("Ingrese su nombre");
let edad = parseInt(prompt("Ingrese su edad"));
let contrasenia = (prompt("Ingrese la contraseña"));



if (nombre == "") {
    console.log("Nombre no puede estar vacio.");
} else if(edad < 18) {
    console.log("Acesso Denegado (Menor a 18 años).");
} else if(contrasenia.length < 6 ){
    console.log("Contraseña Invalida.");
} else{
    console.log("Bienvenido al sistema");
    console.log("Datos ingresados");
    console.log(nombre,edad,contrasenia);
    let edadmas10 = edad + 10;
    console.log("En 10 años tendrias ", edadmas10);

    console.log("Datos ingresados");
    console.log(nombre,edad,contrasenia);

}