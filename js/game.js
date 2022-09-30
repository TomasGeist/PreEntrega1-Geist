//VARIABLES

let nombreDeUsuario;
let contraseña;
let contador = 0;
let pescadoAlimento = 0;
let peceraEnergia = 0;
let peceraComida = 0;
let tiendaManzanas = 999999999999;
let precioManzanas = 5;
let monedaCorales = 100;


//FUNCIONES GLOBALES


function registrarUsuario() {
  nombreDeUsuario = prompt("Ingrese un nombre usuario para registrarse");
  contraseña = prompt("Ingrese una contraseña para registrarse");
}

function loguearse() {
  let logUser = prompt("Introduzca su usuario para loguearse");
  let logContraseña = prompt("Introduzca su contraseña para loguearse");

  if (logUser === nombreDeUsuario && logContraseña === contraseña) {
    alert("Bienvenido " + nombreDeUsuario + " Ya podes jugar Coder To Fish");
  } else {
    alert("Nombre o contraseña incorrectos, intentelo nuevamente");
    contador++;
    if (contador === 2) {
      alert("Agotaste los intentos vuelve a recargar la pagina");
    } else {
      loguearse();
    }
  }
}

function resetearContador() {
  if (contador === 2) {
    contador = 0;
  }
}

function comprarComida() {
  if (monedaCorales >= 5) {
    let compra = confirm("¿Desea comprar 1 manzana?");
    if (compra === true) {
      tiendaManzanas -= 1;
      peceraComida += 1;
      monedaCorales -= 5;
    }
  } else {
    alert("No tienes corales suficientes");
  }
}

function alimentar() {
  if (peceraComida >= 1) {
    let alimentarPez = confirm("Desea alimentar a este pez?");
    if (alimentarPez === true) {
      peceraComida -= 1;
      pescadoAlimento += 1;
      peceraEnergia += 1;
      monedaCorales += 7;
    }
  } else {
    alert("No tienes suficiente comida");
  }
}

function venderComida() {
  if (peceraComida >= 1 && peceraEnergia >= 1) {
    let vender = confirm("¿Desea vender 1 alimento?");
    if (vender === true) {
      tiendaManzanas += 1;
      monedaCorales += 3;
      peceraComida -= 1;
      peceraEnergia -= 1;
    }
  } else {
    alert("Debes tener comida y energía para realizar esta accion.");
  }
}

function comprarTodo() {
  for (i = 0; i < monedaCorales + i; i++) {
    comprarComida();
  }
}


// FUNCIONES DE CREACION DE PESCADO

//Esta funcion crea un objeto pescado a partir de un ID

let informacionPescadoId = document.getElementById("informacionPescadoId");
let imgPescado = document.getElementById("imgPescado");

function crearPescado() {
  let id = crearId();
  let nombre = crearNombre();
  let nivel = 0;
  let alimento = 0;
  return pescadosCreados.push({id, nombre, nivel, alimento})
}

// otras funcoines

let crearPescadoBoton = document.getElementById('crear');
let mostrarHuevo = document.getElementById('abrirHuevo');

crearPescadoBoton.addEventListener("click", evento);

function evento(evento) {
  crearPescadoBoton.classList.add("none");
  mostrarHuevo.classList.remove("none");
}


let btnAbrir = document.getElementById('btn-abrir');
let muestraPescado = document.getElementById("muestraPescado");

btnAbrir.addEventListener('click', abrirHuevo);

function abrirHuevo(abrirHuevo) {
  mostrarHuevo.classList.add("none");
  muestraPescado.classList.remove("none");
  crearPescado();
  informacionPescadoId.textContent = "ID: " + 
    pescadosCreados[pescadosCreados.length - 1].id;
  informacionPescadoNombre.textContent =
    "NOMBRE: " + pescadosCreados[pescadosCreados.length - 1].nombre;
   informacionPescadoNivel.textContent =
    "NIVEL: " + pescadosCreados[pescadosCreados.length - 1].nivel;
   informacionPescadoAlimento.textContent =
    "ALIMENTOS: " + pescadosCreados[pescadosCreados.length - 1].alimento;
  if (pescadosCreados[pescadosCreados.length - 1].nombre === "Pez Sardina") {
    imgPescado.src = "/assets/imagenes/sardina.png"
  } else if (pescadosCreados[pescadosCreados.length - 1].nombre === "Pez Globo"){
    imgPescado.src = "/assets/imagenes/globo.png";
  } else if (pescadosCreados[pescadosCreados.length - 1].nombre === "Pez Espada"){
    imgPescado.src = "/assets/imagenes/espada.png";
  } else if (pescadosCreados[pescadosCreados.length - 1].nombre === "Tiburon"){
    imgPescado.src = "/assets/imagenes/tiburon.png";
  } else if (pescadosCreados[pescadosCreados.length - 1].nombre === "Pez Abisal"){
    imgPescado.src = "/assets/imagenes/abisal.png";
  }
  setTimeout(() => {
    muestraPescado.classList.add("none");
  }, 5000);
}



//OBJETOS

const nombres = [
  "Pez Sardina",
  "Pez Sardina",
  "Pez Sardina",
  "Pez Sardina",
  "Pez Sardina",
  "Pez Sardina",
  "Pez Sardina",
  "Pez Sardina",
  "Pez Sardina",
  "Pez Sardina",
  "Pez Sardina",
  "Pez Sardina",
  "Pez Globo",
  "Pez Globo",
  "Pez Globo",
  "Pez Globo",
  "Pez Globo",
  "Pez Globo",
  "Pez Espada",
  "Pez Espada",
  "Pez Espada",
  "Tiburon",
  "Tiburon",
  "Pez Abisal",
];
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const pescadosCreados = []


//declaracion de la clase pescados

class Pescados{
  constructor(id, nombre, nivel, alimento) {
    this._id = id;
    this._nombre = nombre;
    this._nivel = nivel;
    this._alimento = alimento;
  }
}

//Esta funcion crea un Id de pescado y se guarda en el array de pescados creados.

function crearNombre() {
  let nombre = Math.floor(Math.random() * 24);
  let nuevoNombre = nombres[nombre]
  return nuevoNombre;
}

function crearId() {
  let parteUno = Math.floor(Math.random() * 10);
  let parteDos = Math.floor(Math.random() * 25 + 1);
  let parteTres = Math.floor(Math.random() * 10);
  let parteCuatro = Math.floor(Math.random() * 25 + 1);
  let nuevoId = numeros[parteUno] + letras[parteDos] + numeros[parteTres] + letras[parteCuatro];
  return nuevoId;
}









// funciones de spawn




