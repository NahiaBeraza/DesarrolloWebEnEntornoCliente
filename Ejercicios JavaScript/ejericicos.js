function calcularPrecioConIVA(precio, iva) {
    const cantidadIVA = (precio * iva) / 100;
    const precioTotal = precio + iva;

    console.log("Precio del producto: " + precio + "€");
    console.log("IVA (" + iva + "%): " + cantidadIVA + "€");
    console.log("Precio total a pagar: " + precioTotal + "€");

    return precioTotal;
}


function areaYperimetroCuadrado(lado){
    area = lado*lado;
    perimetro= lado*4;

    console.log("Area del cuadrado: "+ area);
    console.log("Perimetro del cuadrado: "+ perimetro);
}

function cociente(numUno, numDos){
    if (numDos==0){
        console.log("NO se puede dividir entre 0");

    }else{
        let cociente=numUno/numDos;
        console.log("El cociente es: "+ cociente)
    }
}

function diferenciaNumeros(numUno, numDos){
    let max=0;
    let min=100000;

    if(numUno>max){
        max=numUno;
    }
    if(numDos>max){
        max=numDos
    }
    if(numUno<min){
        min=numUno;
    }
    if(numDos<min){
        min=numDos
    }
    console.log("La diferencia entre los números es: "+ max-min);

}

function calcularTotalCompra(cantidad, precio) {
  let totalSinDescuento = cantidad * precio;
  let totalFinal;

  if (cantidad > 10 && precio > 40) {
    let descuento = totalSinDescuento * 0.15;
    totalFinal = totalSinDescuento - descuento;
    console.log("Se aplica el 15% de descuento.");
    console.log("Descuento: " + descuento + "€");

  } else {
    totalFinal = totalSinDescuento;
    console.log("ℹNo se aplica descuento.");
  }

  console.log("Total a pagar: " + totalFinal + "€");
  return totalFinal;
}

function numeroEntre(){
    let numero = (prompt("Teclea un número entre 1 y 5:"));

    if(numero>=1 && numero<=5){
        print("Número tecleado es: "+ numero);
    }else{
        numeroEntre();
    }
}

function numeroPrimo(){
    let numero = (prompt("Teclea un número"));

    let aux=2;
    while(numero%aux!=0){
        aux++;
    }

    if(aux==x){
        return true;
    }else{
        return false;
    }


}

function numerosTecleados(){
    let numeros = [];
    let num;

    while(num>0){
        num = prompt("Introduce un número positivo:");
        if (num > 0) {
            numeros.push(entrada);
        }else{
        }
    }

    if (numeros.length > 0) {

        let maximo = Math.max(numeros);
        let minimo = Math.min(numeros);

        console.log("MAX:", maximo);
        console.log("MIN:", minimo);
    } else {
        console.log("Los números no son validos.");
    }
}

function diasSemana(){
  let diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    let numero = parseInt(prompt("Introduce un número entre 0 y 6:"));

    return diasSemana[numero];
}

function sumaLista(lista){
    let suma;
    for( num in lista){
        suma=suma+lista[num];
    }
    
    return suma;
}

function vocalOno(){
    //NO ENTIENDO LO DE USAR ARRAYS

    letra = letra.toLowerCase();
    return letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'; ///devuelve directamente true 

}

function cadena( letras){
    return letras.join('-');
}

function precio(){
    
}