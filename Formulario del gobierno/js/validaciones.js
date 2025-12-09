///////////////FUNCION PARA VALIDAR EL FORMULARIO//////////

function validarFormulario(){
    let errores=[];

    //Validar nombre
    const nombre= document.getElementById("nombre").value; //recoge el valor de nombre (el input)
    const errorNombre = validarNombre(nombre); //lo envia a la funcion de validar nombre para comprobar si está bien

    if(errorNombre !== ""){ //si devuelve la cadena vacia es que esta bien, si devuelve el error lo introduce en el array
        errores.push(errorNombre);  //si el nombre es incorrecto lo introde en el array de errores
    }

    //Validar apellido

    const apellido= document.getElementById("primer_apellido").value; //recoge el valor de apellido (el input)
    const errorApellido = validarPrimerApellido(apellido); //lo envia a la funcion de validar apellido para comprobar si está bien

    if(errorApellido !== ""){ 
        errores.push(errorApellido); 
    }

    //Validar apellido 2

    const apellido2= document.getElementById("segundo_apellido").value; //recoge el valor del apellido2 (el input)
    const errorApellido2 = validarSegundoApellido(apellido2); //lo envia a la funcion de validar apellido2 para comprobar si está bien

    if(errorApellido2 !== ""){ 
        errores.push(errorApellido2);  
    }

    //Validar fecha nacimiento
    const fecha= document.getElementById("fecha").value; 
    const errorFecha = validarFechaNacimiento(fecha);

    if(errorFecha !== ""){ 
        errores.push(errorFecha);  
    }

    //Validar Tipo de documento
    const documento= document.getElementById("tipo_documento").value; 
    const errorDocumento = validarTipoDocumento(documento);

    if(errorDocumento !== ""){ 
        errores.push(errorDocumento);  
    }

    //validar validar número de documento
    const nDocumento= document.getElementById("numero_documento").value; 
    const errorNumDocumento = validarNDocumento(nDocumento);

    if(errorNumDocumento !== ""){ 
        errores.push(errorNumDocumento);  
    }

    //validar contraseña

    const contrasena= document.getElementById("contrasena").value; 
    const errorContrasena = validarContraseña(contrasena);

    if(errorContrasena !== ""){ 
        errores.push(errorContrasena);  
    }

    //validar contraseña repetida
    const contrasenaRepe= document.getElementById("contrasena2").value; 
    const errorContrasenaRepe = validarContraseñaRepetida(contrasenaRepe, contrasena);

    if(errorContrasenaRepe !== ""){ 
        errores.push(errorContrasenaRepe);  
    }

    //validar correo

    const correo= document.getElementById("correo").value; 
    const errorCorreo = validarCorreo(correo);

    if(errorCorreo !== ""){ 
        errores.push(errorCorreo);  
    }

    //validar movil
    const telefono= document.getElementById("telefono").value; 
    const errorTelefono = validarMovil(telefono);

    if(errorTelefono !== ""){ 
        errores.push(errorTelefono);  
    }

    //validar número de soporte

    const soporte= document.getElementById("soporte").value; 
    const errorsoporte = validarNumeroDeSoporte(soporte);

    
    if(errorsoporte !== ""){ 
        errores.push(errorsoporte);  
    }

    //Validar checkbox

    const condiciones = document.getElementById("condiciones").checked;
    const privacidad = document.getElementById("privacidad").checked;
    const errorCheck = validarCheckBox(condiciones, privacidad);

    if(errorCheck!==""){
        errores.push(errorCheck);
    }

    //////ERRORESSSS

    let cajaErrores = document.getElementById("errores");

    console.log(errores);
    console.log("Errores:", errores);


    if (errores.length > 0) {
        cajaErrores.style.display = "block";  // SOLO mostrar la caja
        return false; // NO enviar formulario
    } else {
        cajaErrores.style.display = "none";   // Ocultar si todo está bien
        return true; // enviar formulario
    }

}

/////////FUNCIONES PARA COMPROBAR SI LOS CAMPOS ESTÁN BIEN/////////

function validarNombre(nombre){ //TAMBIEN PODRIA HACERLO CON TRUE Y FALSE, PERO QUIERO COMPROBAR LOS ERRORES
    let nombreLimpio= nombre.trim(); //quita los espacios tanto por detras como por delante
                                    // " Hola " -> "Hola" // "     " -> ""

    if(nombreLimpio === ""){ //Si el nombreLimpio esta vacio significa que el usuario ha introducido mal el nombre
        return "El nombre no es correcto"; //devuelve el error, que se comprobara en validarFormulario y se introducira en el array

    }else{
        return ""; //devuelve cadena vacia, pero significa que esta correcto.
    }

}

function validarPrimerApellido(apellido){ //es igual que la funcion validarNombre()
    let apellidoLimpio = apellido.trim();

    if(apellidoLimpio===""){
        return "El apellido no es correcto."

    }else{
        return"";
    }
}


//REVISAR Y PREGUNTAR
function validarSegundoApellido(apellido){ //es igual que la funcion validarNombre()
    let apellidoLimpio = apellido.trim();

    if(apellidoLimpio===""){
        return "El segundo apellido no es correcto."

    }else{
        return"";
    }
}

//validarFechaNacimiento()

///LO HE BUSCADOOOO
function validarFechaNacimiento(fecha) {

    // 1) Comprobar longitud exacta dd/mm/aaaa → 10 caracteres
    if (fecha.length !== 10 || fecha.charAt(2) !== "/" || fecha.charAt(5) !== "/") {
        return "La fecha debe tener el formato dd/mm/aaaa.";
    }

    // 2) Separar partes
    let partes = fecha.split("/");
    let dia = parseInt(partes[0]);
    let mes = parseInt(partes[1]);
    let anio = parseInt(partes[2]);

    // 3) Validar numéricos
    if (isNaN(dia) || isNaN(mes) || isNaN(anio)) {
        return "La fecha contiene valores no numéricos.";
    }

    // 4) Validar rangos
    if (dia < 1 || dia > 31) return "El día no es válido.";
    if (mes < 1 || mes > 12) return "El mes no es válido.";
    if (anio < 1900 || anio > 2025) return "El año no es válido.";

    // 5) Fecha actual del ejercicio
    let diaActual = 28;
    let mesActual = 1;
    let anioActual = 2025;

    // 6) Comprobar que no sea futura
    if (
        anio > anioActual ||
        (anio === anioActual && mes > mesActual) ||
        (anio === anioActual && mes === mesActual && dia > diaActual)
    ) {
        return "La fecha de nacimiento no puede ser futura.";
    }

    // 7) Calcular edad
    let edad = anioActual - anio;

    // Ajustar si aún no ha cumplido este año
    if (mesActual < mes || (mesActual === mes && diaActual < dia)) {
        edad--;
    }

    if (edad < 18) {
        return "Debe ser mayor de edad.";
    }

    return "";
}


//validarTipoDocumento()

function validarTipoDocumento(tipo){

    // Si el tipo NO es ninguno de los tres está mal
    if (tipo === "DNI" || tipo === "NIE" || tipo === "Pasaporte") {
        return ""; // válido
    }

    return "El tipo de documento es incorrecto"; // NO válido
}

//valdarNDocumento() //el número del dni

function validarNDocumento(dni){ //validar DNI

    //Compruebo si el dni tiene 9 caracteres
    if (dni.length != 9){
        return "El DNI debe de tener 9 caracteres";
    }

    //separo los números de la letra
    let numeros = dni.slice(0, 8); //cojo los números desde la posicion 0 hasta la 8
    let letra = dni.slice(8); //cojo la última posicion

    //compruebo que los primeros 8 caracteres SON números
    for (let i = 0; i < numeros.length; i++) {
        let caracter = numeros[i]; //Busco letra por letra
        
        if (!"0123456789".includes(caracter)) { //comprobar si alguno de los números está en esa "sentencia"
            return "No es un número"; // si alguno no es número
        }
    }

    //convertir los números a un solo número entero
    let numeroEntero = parseInt(numeros);

    //letras que puede tener un dni
    let letras = "TRWAGMYFPDXBNJZSQVHLCKE";

    //calcular la letra usando el % 23
    let resto = numeroEntero % 23;
    let letraCorrecta = letras.slice(resto, resto + 1); 
    //las letras que he metido en la variable LETRAS estan en orden (T=0, R=1, etc)
    //cogemos el hondarra para buscar la letra que tendria ese dni
    //LO DE SLICE: si el resto seria 10 seria: slice(10,10+1)-> estoy haria que empezaria en el índice 10 y acabaria en el 11 (sin incluirlo)
    //así devuelve una sola letra

    //comparo la letra correcta con la del usuario
    if (letra !== letraCorrecta) {  
        return "La letra no es correcta";
    }

    //si no hay nada mal devolvemos vacio para cotejarlo con el validarFormulario()
    return "";

}


//validarContraseña()

function validarContraseña(contraseña){
    let contraseñaLimpia = contraseña.trim();

    //comprobar si está vacia
    if(contraseñaLimpia===""){
        return "La contraseña no es correcta."

    }

    //comprobar si su longitud es de 12 o más
    if(contraseñaLimpia.length<12){
        return "La contraseña debe de tener más de 12 caracteres."
    }

    //comprobar si tiene un número
    let tieneNumero = false;

    for (let i = 0; i <contraseñaLimpia.length; i++) { //voy a recorrer para mirar si contiene un número

        let caracter = contraseñaLimpia[i]; // miramos cada letra

        // si algún caracter es uno de los números, devuelve que tiene número
        if ("0123456789".includes(caracter)) {
            tieneNumero = true;
            break; // no hace falta seguir buscando y salimos
        }
    }

    // después del bucle, comprobar si NO tenía número
    if (!tieneNumero) {
        return "La contraseña debe tener al menos un número";
    }

    //comprobar que contenga un caracter especial

    let tieneSimbolo=false;

    for(let i=0; i<contraseñaLimpia.length; i++){

        let letra= contraseñaLimpia[i];

        if("!@#%^&*".includes(letra)){
            tieneSimbolo=true;
            break;
        }
    }

    if(!tieneSimbolo){
        return "La contraseña debe de tener un al menos un simbolo.";
    }

    return "";

}

//validarContraseñaRepetida()

function validarContraseñaRepetida(contraseñaRepetida, contraseña){
    
    //con la funcion que he creado verifico si la primera contraseña está bien
    let contraseñaCorrecta= validarContraseña(contraseña);

    //si esta vacia devuelvo error
    if (contraseñaCorrecta !== "") {
        return "La contraseña principal no es correcta.";
    }

    //la contraseñaRepeptida tengo que mirar si esta vacia por eso le elimino los espacios y compruebo
    let contraseñaRepeLimpia=contraseñaRepetida.trim();
    if(contraseñaRepeLimpia===""){
        return "La contraseña repetida no es correcta.";

    }

    //si son diferentes da error
    if(contraseñaRepeLimpia!== contraseña){
        return "Las contraseñas no son iguales";

    }

    //si esta todo bien devuelve vacio.
    return "";

}

//validarCorreo()

function validarCorreo(correo){
    let correoLimpio= correo.trim();
    if(correoLimpio===""){
        return "El correo e incorrecto."
    }

    const patron = RegExp("[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}");
    //la he sacado de stack overflow: https://es.stackoverflow.com/questions/453176/como-validar-correctamente-un-email-con-expresiones-regulares

    if (!patron.test(correoLimpio)){
        return "El correo no es correcto";
    }

    return "";
}

//validarMovil()

function validarMovil(telefono){

    //quito los espacios por delante y por detras
    let teleLimpio = telefono.trim();

    //comprobar si está vacio
    if (teleLimpio === "") {
        return "Telefono no es correcto.";
    }

    //comprobar si su longitud es menor de 9
    if (teleLimpio.length < 9) {
        return "La longitud del telefono no es correcta.";
    }

    //comprobar primer caracter
    let primero = teleLimpio.charAt(0);

    if (!"6789+".includes(primero)) {
        return "El teléfono debe comenzar por 6, 7, 8, 9 o +.";
    }

    //si empieza por +, lo quito para comprobar los demas
    if (primero === "+") {
        teleLimpio = teleLimpio.slice(1); //quito solo el primer caracter
    }

    //comprobar que TODOS los caracteres restantes sean números
    for (let i = 0; i < teleLimpio.length; i++) {
        let caracter = teleLimpio[i];

        if (!"0123456789".includes(caracter)) {
            return "El teléfono solo puede contener números.";
        }
    }

    //si todo está bien devuelve vacio
    return "";
}

//Validar número soporte
function validarNumeroDeSoporte(numero){ 
    let numeroLimpio = numero.trim();

    if(numeroLimpio===""){
        return "El número de soporte no es correcto."

    }else{
        return"";
    }
}

//Validar checkbox
function validarCheckBox(condiciones, privacidad){

    if (!condiciones || !privacidad){  
        return "Se deben de aceptar ambas declaraciones.";
    }

    return "";
}
    
