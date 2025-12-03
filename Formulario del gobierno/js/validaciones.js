///////////////FUNCION PARA VALIDAR EL FORMULARIO//////////

function validarFormulario(){
    let errores=[];

    //Validar nombre
    const nombre= document.getElementeById("nombre").value; //recoge el valor de nombre (el input)
    const errorNombre = validarNombre(nombre); //lo envia a la funcion de validar nombre para comprobar si está bien

    if(errorNombre !== ""){ //si devuelve la cadena vacia es que esta bien, si devuelve el error lo introduce en el array
        errores.push(errorNombre);  //si el nombre es incorrecto lo introde en el array de errores
    }

    //Validar ... LOS DEMAS

    if (errores.length > 0)
        return false; 
    else{
        return true;
    }

    //Validar apellido

    const apellido= document.getElementeById("primer_apellido").value; //recoge el valor de apellido (el input)
    const errorApellido = validarPrimerApellido(apellido); //lo envia a la funcion de validar apellido para comprobar si está bien

    if(errorNombre !== ""){ 
        errores.push(errorApellido); 
    }

    //Validar apellido 2

    const apellido2= document.getElementeById("segundo_apellido").value; //recoge el valor del apellido2 (el input)
    const errorApellido2 = validarPrimerApellido(apellido2); //lo envia a la funcion de validar apellido2 para comprobar si está bien

    if(errorNombre !== ""){ 
        errores.push(errorApellido2);  
    }

    //Validar fecha nacimiento

    //Validar Tipo de documento

    //validar validar número de documento

    //validar contraseña

    //validar contraseña repetida

    //validar correo

    //validar movil

    //validar número de soporte

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (errores.length > 0)
        return false; 
    else{
        return true;
    }

}

/////////FUNCIONES PARA COMPROBAR SI LOS CAMPOS ESTÁN BIEN/////////

function validarNombre(nombre){ //TAMBIEN PODRIA HACERLO CON TRUE Y FALSE, PERO QUIERO COMPROBAR LOS ERRORES
    let nombreLimpio= nombre.trim(); //quita los espacios tanto por detras como por delante
                                    // " Hola " -> "Hola" // "     " -> ""

    if(nomnbreLimpio === ""){ //Si el nombreLimpio esta vacio significa que el usuario ha introducido mal el nombre
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

function validarFechaNacimiento(fecha){

}

//validarTipoDocumento()

function validarTipoDocumento(tipo){

    // Si el tipo NO es ninguno de los tres está mal
    if (tipo === "DNI" || tipo === "NIE" || tipo === "PASAPORTE") {
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
    if (letraUsuario !== letraCorrecta) {
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

}

//validarContraseñaRepetida()

function validarContraseñaRepetida(contraseñaRepetida, contraseña){
    
    //con la funcion que he creado verifico si la primera contraseña está bien
    let contraseñaCorrecta= validarContraseña(contraseña);

    //si esta vacia devuelvo error
    if(contraseñaCorrecta===""){
        return "La contraseña principal no es correcta.";

    }

    //la contraseñaRepeptida tengo que mirar si esta vacia por eso le elimino los espacios y compruebo
    let contraseñaRepeLimpia=contraseñaRepetida.trim();
    if(contraseñaRepeLimpia===""){
        return "La contraseña repetida no es correcta.";

    }

    //si son diferentes da error
    if(contraseñaRepeLimpia!==contraseñaCorrecta){
        return "Las contraseñas no son iguales";

    }

    //si esta todo bien devuelve vacio.
    return "";

}

//validarCorreo()

function validarCorreo(){

}

//validarMovil()

function validarMovil(){

}

//validarNumeroDeSoporte()

function validarNumeroDeSoporte(){

}

//TAMBIEN MIRAR SI ES MAYOR DE 18 AÑOS