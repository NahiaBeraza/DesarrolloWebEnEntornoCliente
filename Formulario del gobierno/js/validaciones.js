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

}

/////////FUNCIONES PARA COMPROBAR SI LOS CAMPOS ESTÁN BIEN/////////

function validarNombre(nombre){ //TAMBIEN PODRIA HACERLO CON TRUE Y FALSE, PERO QUIERO COMPRAR LOS ERRORES
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

//NO COMRPUEBO EL SEGUNDO APELLIDO YA QUE NO ES OBLIGATORIO EN EL FORMULARIO

//validarFechaNacimiento()

//validarTipoDocumento()

//valdarNDocumento()

//validarContraseña()

//validarContraseñaRepetida()

//validarCorreo()

//validarMovil()

//validarNumeroDeSoporte()

