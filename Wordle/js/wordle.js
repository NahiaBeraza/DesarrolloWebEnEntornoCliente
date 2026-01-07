// ============================
// ESTADO DEL JUEGO
// ============================
let palabraSecreta = "";
let palabraLista = false;

let filaActual = 0;
let colActual = 0;

// hasta qué fila está bloqueada
let filaBloqueadaHasta = -1;

// grid[fila][col] => input
let grid = [];

// ============================
// API
// ============================
async function obtenerPalabra() {
  const resp = await fetch(
    "https://random-word-api.herokuapp.com/word?length=5&lang=es"
  );
  const data = await resp.json();
  return data[0].toUpperCase();
}

// ============================
// ARRANQUE
// ============================
document.addEventListener("DOMContentLoaded", async () => {
  const filas = document.querySelectorAll("#contenedor_general .fila-inputs");
  grid = Array.from(filas).map(f => f.querySelectorAll("input"));

  palabraSecreta = await obtenerPalabra();
  palabraLista = true;

  console.log("Palabra secreta:", palabraSecreta);

  enfocar(0, 0);
  conectarInputs();
  conectarTecladoVirtual();
});

// ============================
// UTILIDADES
// ============================
function enfocar(f, c) {
  filaActual = Math.max(0, Math.min(5, f));
  colActual = Math.max(0, Math.min(4, c));
  grid[filaActual][colActual].focus();
}

// ============================
// ESCRIBIR / BORRAR
// ============================
function escribirLetra(letra) {
  if (!palabraLista) return;
  if (filaActual <= filaBloqueadaHasta) return;
  if (colActual > 4) return;

  grid[filaActual][colActual].value = letra;

  if (colActual < 4) {
    enfocar(filaActual, colActual + 1);
  }
}

function borrarLetra() {
  if (!palabraLista) return;
  if (filaActual <= filaBloqueadaHasta) return;

  const actual = grid[filaActual][colActual];

  if (actual.value !== "") {
    actual.value = "";
    return;
  }

  if (colActual > 0) {
    enfocar(filaActual, colActual - 1);
    grid[filaActual][colActual].value = "";
  }
}

// ============================
// COMPROBAR PALABRA
// ============================
function filaCompleta() {
  return Array.from(grid[filaActual]).every(i => i.value !== "");
}

function palabraFila() {
  return Array.from(grid[filaActual]).map(i => i.value).join("");
}

function comprobarFila() {
  if (!filaCompleta()) return;

  const intento = palabraFila();
  const secreta = palabraSecreta;

  const conteo = {};
  for (const l of secreta) conteo[l] = (conteo[l] || 0) + 1;

  // VERDES
  for (let i = 0; i < 5; i++) {
    const letra = intento[i];
    const input = grid[filaActual][i];

    input.classList.remove("correcta", "esta", "ausente");

    if (letra === secreta[i]) {
      input.classList.add("correcta");
      conteo[letra]--;
    }
  }

  // AMARILLOS / GRISES
  for (let i = 0; i < 5; i++) {
    const letra = intento[i];
    const input = grid[filaActual][i];

    if (input.classList.contains("correcta")) continue;

    if (conteo[letra] > 0) {
      input.classList.add("esta");
      conteo[letra]--;
    } else {
      input.classList.add("ausente");
    }
  }

  // 🔒 BLOQUEAR FILA
  filaBloqueadaHasta = filaActual;

  // GANAR / PERDER / CONTINUAR
  if (intento === secreta) {
    alert("¡HAS GANADO!");
    return;
  }

  if (filaActual === 5) {
    alert(`Has perdido. La palabra era: ${secreta}`);
    return;
  }

  enfocar(filaActual + 1, 0);
}

// ============================
// INPUTS (IMPIDE ESCRITURA NATIVA)
// ============================
function conectarInputs() {
  for (let f = 0; f < 6; f++) {
    for (let c = 0; c < 5; c++) {
      const input = grid[f][c];

      // ❌ impedir que el navegador escriba solo
      input.addEventListener("keydown", e => e.preventDefault());

      input.addEventListener("focus", () => {
        if (f <= filaBloqueadaHasta) {
          enfocar(filaActual, colActual);
          return;
        }
        filaActual = f;
        colActual = c;
      });
    }
  }
}

// ============================
// TECLADO FÍSICO
// ============================
document.addEventListener("keydown", e => {
  if (!palabraLista) return;

  if (e.key === "Enter") comprobarFila();
  else if (e.key === "Backspace") borrarLetra();
  else if (/^[a-zñ]$/i.test(e.key)) escribirLetra(e.key.toUpperCase());
});

// ============================
// TECLADO VIRTUAL
// ============================
function conectarTecladoVirtual() {
  document.querySelectorAll("#teclado button").forEach(btn => {
    btn.addEventListener("click", () => {
      const t = btn.textContent;

      if (t === "ENTER") comprobarFila();
      else if (t === "⌫") borrarLetra();
      else escribirLetra(t);
    });
  });
}
