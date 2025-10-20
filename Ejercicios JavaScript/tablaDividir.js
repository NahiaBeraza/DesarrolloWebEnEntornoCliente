const mostrarTabla = (event) => {
  event.preventDefault();
  const numero = Number(document.getElementById('numero').value);

  if (numero >= 1 && numero <= 10) {
    let tabla = document.getElementById('tabla');
    tabla.innerHTML = `<h2>Tabla de dividir del número ${numero}</h2>`;
    let tablaDividir = '';

    for (let i = 1; i <= 10; i++) {
      let resultado = (numero / i).toFixed(2);
      tablaDividir += `<li>${numero} ÷ ${i} = ${resultado}</li>`;
    }

    tabla.innerHTML += `<ul>${tablaDividir}</ul>`;
  } else {
    document.getElementById('numero').value = '';
    alert('El número introducido debe estar entre 1 y 10 (ambos inclusive)');
  }
};