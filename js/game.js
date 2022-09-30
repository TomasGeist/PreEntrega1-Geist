//VARIABLES

let nombreDeUsuario;
let contraseña;
let contador = 0;
let pescadoAlimento = 0;
let peceraComida = 0;
let tiendaManzanas = 999999999999;
let precioManzanas = 5;
let monedaCorales = 100;
// registrarUsuario();
// loguearse();
// resetearContador();


let datosUsuario = [nombreDeUsuario, contraseña];


//DOM



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




// FUNCIONES DE CREACION DE PESCADO

//Esta funcion crea un objeto pescado a partir de un ID

let informacionPescadoId = document.getElementById("informacionPescadoId");
let imgPescado = document.getElementById("imgPescado");

function crearPescado() {
  let id = crearId();
  let nombre = crearNombre();
  let nivel = 0;
  let alimento = 0;
  datosUsuario.push({id, nombre, nivel, alimento})
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
let btnAlimentar = document.getElementById("btnAlimentar");

btnAbrir.addEventListener('click', abrirHuevo);

function abrirHuevo(abrirHuevo) {
  mostrarHuevo.classList.add("none");
  muestraPescado.classList.remove("none");
  crearPescado();
  informacionPescadoId.textContent = "#00" + 
    pescadosCreados[pescadosCreados.length - 1].id;
  informacionPescadoNombre.textContent =
    pescadosCreados[pescadosCreados.length - 1].nombre;
   informacionPescadoNivel.textContent =
    "NIVEL: " + pescadosCreados[pescadosCreados.length - 1].nivel + "/5";
   informacionPescadoAlimento.textContent =
    "ALIMENTOS: " + pescadosCreados[pescadosCreados.length - 1].alimento;
  if (pescadosCreados[pescadosCreados.length - 1].nombre === "Pez Sardina") {
    imgPescado.src = "/assets/imagenes/sardina.png"
  } else if (pescadosCreados[pescadosCreados.length - 1].nombre === "Pez Globo"){
    imgPescado.src = "/assets/imagenes/globo.png";
    imgPescado.classList.add()
  } else if (pescadosCreados[pescadosCreados.length - 1].nombre === "Pez Espada"){
    imgPescado.src = "/assets/imagenes/espada.png";
  } else if (pescadosCreados[pescadosCreados.length - 1].nombre === "Tiburon"){
    imgPescado.src = "/assets/imagenes/tiburon.png";
  } else if (pescadosCreados[pescadosCreados.length - 1].nombre === "Pez Abisal"){
    imgPescado.src = "/assets/imagenes/abisal.png";
  }
  setTimeout(() => {
    muestraPescado.classList.add("none");
    iniciarJuego();
    btnAlimentar.classList.remove('none')
  }, 3000);
  
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


// funciones de inicio de juego

let gameBox = document.getElementById("game-box");
let gameBoxDiv20 = document.createElement("div");
let gameBoxDiv60 = document.createElement("div");
let gameBoxDiv40 = document.createElement("div");
let gameBoxDivInt60 = document.createElement("div");
let gameBoxDivInt40 = document.createElement("div");
let gameBoxDivInt20 = document.createElement("div");
let gameBoxDivInt20P = document.createElement("p");
let gameBoxDivInt40Target = document.createElement("div");
let manzana = document.createElement('img');
let textCantidadManzanas = document.createElement("p");
let btnComprarAlimento = document.createElement("button");

function iniciarJuego() {
  gameBox.appendChild(gameBoxDiv20);
  gameBox.appendChild(gameBoxDiv60);
  gameBox.appendChild(gameBoxDiv40);
  gameBoxDiv20.classList.add("gameBoxDiv20");
  gameBoxDiv60.classList.add("gameBoxDiv60");
  gameBoxDiv40.classList.add("gameBoxDiv40");
  gameBoxDiv40.appendChild(gameBoxDivInt40);
  gameBoxDivInt40.classList.add("gameBoxDivInt40");
  muestraPescado.classList.remove('none')
  gameBoxDiv60.appendChild(muestraPescado);
  muestraPescado.classList.add("muestraPescadoGame");
  gameBoxDiv20.appendChild(gameBoxDivInt20);
  gameBoxDivInt20.appendChild(gameBoxDivInt20P);
  gameBoxDivInt20P.textContent = "Balance: " + monedaCorales;
  btnAlimentar.addEventListener('click', alimentando);
  function alimentando(alimentando) {
    alimentar();
  }
  gameBoxDivInt40.appendChild(gameBoxDivInt40Target);
  gameBoxDivInt40Target.classList.add("gameBoxDivInt40Target");
  gameBoxDivInt40Target.appendChild(manzana);
  manzana.src = "/assets/imagenes/manzana.png";
  gameBoxDivInt40Target.appendChild(textCantidadManzanas);
  textCantidadManzanas.textContent = 'Tienes ' + peceraComida;
  gameBoxDivInt40Target.appendChild(btnComprarAlimento);
  btnComprarAlimento.classList.add('btn', 'btn-chico');
  btnComprarAlimento.textContent = 'Comprar';
  btnComprarAlimento.addEventListener('click', comprando);
  function comprando(comprando) {
    comprarComida();
  }
}


function alimentar() {
  if (peceraComida >= 1) {
    let alimentarPez = confirm("Desea alimentar a este pez?");
    if (alimentarPez === true) {
      peceraComida -= 1;
      pescadosCreados[pescadosCreados.length - 1].alimento += 1;
      monedaCorales += 7;
      informacionPescadoAlimento.textContent =
        "ALIMENTOS: " + pescadosCreados[pescadosCreados.length - 1].alimento;
      gameBoxDivInt20P.textContent = "Balance: " + monedaCorales;
      textCantidadManzanas.textContent = "Tienes " + peceraComida;
    }
  } else {
    alert("No tienes suficiente comida");
  }
}


 function comprarComida() {
  if (monedaCorales >= 5) {
    let compra = confirm("¿Desea comprar 1 manzana?");
    if (compra === true) {
      tiendaManzanas -= 1;
      peceraComida += 1;
      textCantidadManzanas.textContent = "Tienes " + peceraComida;
      monedaCorales -= 5;
      gameBoxDivInt20P.textContent = "Balance: " + monedaCorales;
    }
  } else {
    alert("No tienes corales suficientes");
  }
}



/* function comprarTodo() {
  for (i = 0; i < monedaCorales + i; i++) {
    comprarComida();
    gameBoxDivInt20P.textContent = "Balance: " + monedaCorales;
  }
}

*/