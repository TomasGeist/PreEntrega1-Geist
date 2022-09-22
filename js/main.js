let nombreDeUsuario;
let contraseña;
let contador = 0;
let pescadoAlimento = 0;
let peceraEnergia = 0;
let peceraComida = 0;
let tiendaManzanas = 999999999999;
let precioManzanas = 5;
let monedaCorales = 100;



function registrarUsuario() {
  nombreDeUsuario = prompt("Ingrese un nombre usuario");
  contraseña = prompt("Ingrese una contraseña");
}

function loguearse() {
  let logUser = prompt("Introduzca su usuario");
  let logContraseña = prompt("Introduzca su contraseña");

  if (logUser === nombreDeUsuario && logContraseña === contraseña) {
     alert("Bienvenido " + nombreDeUsuario + " Ya podes jugar Coder To Fish")
  } else {
    alert("Nombre o contraseña incorrectos, intentelo nuevamente");
    contador++
    if (contador === 2) {
      alert("Agotaste los intentos vuelve a recargar la pagina");
    } else {
    loguearse()
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
    alert("No tienes corales suficientes")
  }
}

function alimentar(){
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
  if (peceraComida >= 1 && peceraEnergia >=1) {
    let vender = confirm("¿Desea vender 1 alimento?")
    if (vender === true) {
      tiendaManzanas += 1;
      monedaCorales += 3;
      peceraComida -= 1;
      peceraEnergia -= 1;
    }
  } else {
    alert("Debes tener comida y energía para realizar esta accion.")
  }
}

function comprarTodo() {
  for (i = 0; i < monedaCorales + i; i++){
    comprarComida()
  }
}

  registrarUsuario();
  loguearse();
  resetearContador();
  comprarComida()
  alimentar();
