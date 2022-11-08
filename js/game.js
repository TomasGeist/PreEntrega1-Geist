//VARIABLES

let nombreDeUsuario;
let contraseña;
let contador = 0;
let pescadoAlimento = 0;
let peceraComida = 0;
let tiendaManzanas = 999999999999;
let precioManzanas = 5;
let monedaCorales = 100;
let staking = false;
//registrarUsuario();
//loguearse();
//resetearContador();

let datosUsuario = [];

//FUNCIONES GLOBALES

let form = document.querySelector("form");
let btnSubmit = document.querySelector("#submit");

/* form.addEventListener("submit", (login) => {
  login.preventDefault();
  let user = document.querySelector("#user").value;
  let pass = document.querySelector("#pass").value;
  datosUsuario.push(user,pass)
});
*/

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

function registrarUsuario() {
  nombreDeUsuario = prompt("Ingrese un nombre usuario para registrarse");
  contraseña = prompt("Ingrese una contraseña para registrarse");
}

function loguearse() {
  let logUser = prompt("Introduzca su usuario para loguearse");
  let logContraseña = prompt("Introduzca su contraseña para loguearse");

  /* if (logUser === nombreDeUsuario && logContraseña === contraseña) {
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
  */
}

function resetearContador() {
  if (contador === 2) {
    contador = 0;
  }
}

// FUNCIONES DE CREACION DE PESCADO

//Esta funcion crea un objeto pescado a partir de un ID

let informacionPescadoId = document.getElementById("informacionPescadoId");
let imgPescado = document.getElementById("imgPescado");
let pescadoStorage;

function crearPescado() {
  let id = crearId();
  let nombre = crearNombre();
  let nivel = 0;
  let alimento = 0;
  datosUsuario.push({ id, nombre, nivel, alimento });
  localStorage.setItem(
    "mi-pescado",
    JSON.stringify({ id, nombre, nivel, alimento })
  );
  pescadoStorage = JSON.parse(localStorage.getItem("mi-pescado"));
  return pescadosCreados.push({ id, nombre, nivel, alimento });
}

// otras funcoines

let crearPescadoBoton = document.getElementById("crear");
let mostrarHuevo = document.getElementById("abrirHuevo");
let imgHuevo = document.getElementById("img-huevo");

crearPescadoBoton.addEventListener("click", evento);

function evento(evento) {
  if (JSON.parse(localStorage.getItem("mi-pescado"))) {
    crearPescadoBoton.classList.add("none");
    muestraPescado.classList.add("none");
    btnAlimentar.classList.remove("none");
    pescadosCreados.push(JSON.parse(localStorage.getItem("mi-pescado")));
    datosUsuario.push(JSON.parse(localStorage.getItem("mi-pescado")));

    informacionPescadoId.textContent =
      "#00" + pescadosCreados[pescadosCreados.length - 1].id;
    informacionPescadoNombre.textContent =
      pescadosCreados[pescadosCreados.length - 1].nombre;
    informacionPescadoNivel.textContent =
      "NIVEL: " + pescadosCreados[pescadosCreados.length - 1].nivel + "/5";
    informacionPescadoAlimento.textContent =
      "ALIMENTOS: " + pescadosCreados[pescadosCreados.length - 1].alimento;

    if (pescadosCreados[pescadosCreados.length - 1].nombre === "Pez Sardina") {
      imgPescado.src = "/assets/imagenes/sardina.png";
    } else if (
      pescadosCreados[pescadosCreados.length - 1].nombre === "Pez Globo"
    ) {
      imgPescado.src = "/assets/imagenes/globo.png";
      imgPescado.classList.add();
    } else if (
      pescadosCreados[pescadosCreados.length - 1].nombre === "Pez Espada"
    ) {
      imgPescado.src = "/assets/imagenes/espada.png";
    } else if (
      pescadosCreados[pescadosCreados.length - 1].nombre === "Tiburon"
    ) {
      imgPescado.src = "/assets/imagenes/tiburon.png";
    } else if (
      pescadosCreados[pescadosCreados.length - 1].nombre === "Pez Abisal"
    ) {
      imgPescado.src = "/assets/imagenes/abisal.png";
    }

    iniciarJuego();
  } else {
    crearPescadoBoton.classList.add("none");
    mostrarHuevo.classList.remove("none");
  }
}

let btnAbrir = document.getElementById("btn-abrir");
let muestraPescado = document.getElementById("muestraPescado");
let btnAlimentar = document.getElementById("btnAlimentar");

btnAbrir.addEventListener("click", abrirHuevo);

function abrirHuevo(abrirHuevo) {
  btnAbrir.classList.add("none");
  imgHuevo.classList.add("movimientoHuevo");
  setTimeout(() => {
    mostrarHuevo.classList.add("none");
    muestraPescado.classList.remove("none");
    crearPescado();
    informacionPescadoId.textContent =
      "#00" + pescadosCreados[pescadosCreados.length - 1].id;
    informacionPescadoNombre.textContent =
      pescadosCreados[pescadosCreados.length - 1].nombre;
    informacionPescadoNivel.textContent =
      "NIVEL: " + pescadosCreados[pescadosCreados.length - 1].nivel + "/5";
    informacionPescadoAlimento.textContent =
      "ALIMENTOS: " + pescadosCreados[pescadosCreados.length - 1].alimento;
    if (pescadosCreados[pescadosCreados.length - 1].nombre === "Pez Sardina") {
      imgPescado.src = "/assets/imagenes/sardina.png";
    } else if (
      pescadosCreados[pescadosCreados.length - 1].nombre === "Pez Globo"
    ) {
      imgPescado.src = "/assets/imagenes/globo.png";
      imgPescado.classList.add();
    } else if (
      pescadosCreados[pescadosCreados.length - 1].nombre === "Pez Espada"
    ) {
      imgPescado.src = "/assets/imagenes/espada.png";
    } else if (
      pescadosCreados[pescadosCreados.length - 1].nombre === "Tiburon"
    ) {
      imgPescado.src = "/assets/imagenes/tiburon.png";
    } else if (
      pescadosCreados[pescadosCreados.length - 1].nombre === "Pez Abisal"
    ) {
      imgPescado.src = "/assets/imagenes/abisal.png";
    }
  }, 2500);

  setTimeout(() => {
    muestraPescado.classList.add("none");
    iniciarJuego();
    btnAlimentar.classList.remove("none");
  }, 6000);
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
const letras = [
  "A",
  "V",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const pescadosCreados = [];

// Funcion filtro de pescados <-- Usando filter
// se puede buscar pescados por su nombre, para hacer uso se puede crear un for con la funcion crearPescado() y la cantidad de pescados que desee
// y luego utilizar la funcion buscarPescado('Pasar como parametro alguno de los tipos de pescado')
// Los parametros pueden ser: "Pez Sardina", "Pez Globo", "Pez Espada","Tiburon","Pez Abisal".

function buscarPescado(valorBuscado) {
  const valor = valorBuscado;
  const resultado = pescadosCreados.filter(
    (pescado) => pescado.nombre === valor
  );
  if (resultado === undefined) {
    console.log("No tienes este pescado");
  } else {
    return console.table(resultado);
  }
}

//Esta funcion crea un Id de pescado y se guarda en el array de pescados creados.

function crearNombre() {
  let nombre = Math.floor(Math.random() * 24);
  let nuevoNombre = nombres[nombre];
  return nuevoNombre;
}

function crearId() {
  let parteUno = Math.floor(Math.random() * 10);
  let parteDos = Math.floor(Math.random() * 25 + 1);
  let parteTres = Math.floor(Math.random() * 10);
  let parteCuatro = Math.floor(Math.random() * 25 + 1);
  let nuevoId =
    numeros[parteUno] +
    letras[parteDos] +
    numeros[parteTres] +
    letras[parteCuatro];
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
let manzana = document.createElement("img");
let textCantidadManzanas = document.createElement("p");
let btnComprarAlimento = document.createElement("button");

function iniciarJuego() {
  peceraComida = JSON.parse(localStorage.getItem("peceraComida"));
  pescadoAlimento = JSON.parse(localStorage.getItem("pescadoAlimento"));
  monedaCorales = JSON.parse(localStorage.getItem("monedaCorales"));

  if (pescadoAlimento === null) {
    pescadoAlimento = 0;
  }

  if (peceraComida === null) {
    peceraComida = 0;
  }
  if (monedaCorales === null) {
    monedaCorales = 100;
  }

  monedaCorales = Number(monedaCorales.toFixed(2));

  pescadosCreados[pescadosCreados.length - 1].alimento = pescadoAlimento;

  informacionPescadoAlimento.textContent =
    "ALIMENTOS: " + pescadosCreados[pescadosCreados.length - 1].alimento;

  gameBox.appendChild(gameBoxDiv20);
  gameBox.appendChild(gameBoxDiv60);
  gameBox.appendChild(gameBoxDiv40);
  gameBoxDiv20.classList.add("gameBoxDiv20");
  gameBoxDiv60.classList.add("gameBoxDiv60");
  gameBoxDiv40.classList.add("gameBoxDiv40");
  gameBoxDiv40.appendChild(gameBoxDivInt40);
  gameBoxDivInt40.classList.add("gameBoxDivInt40");
  muestraPescado.classList.remove("none");
  gameBoxDiv60.appendChild(muestraPescado);
  muestraPescado.classList.add("muestraPescadoGame");
  gameBoxDiv20.appendChild(gameBoxDivInt20);
  gameBoxDivInt20.appendChild(gameBoxDivInt20P);
  gameBoxDivInt20P.textContent = monedaCorales + " Corales";
  btnAlimentar.addEventListener("click", alimentando);
  function alimentando(alimentando) {
    alimentar();
  }
  gameBoxDivInt40.appendChild(gameBoxDivInt40Target);
  gameBoxDivInt40Target.classList.add("gameBoxDivInt40Target");
  gameBoxDivInt40Target.appendChild(manzana);
  manzana.src = "/assets/imagenes/manzana.png";
  gameBoxDivInt40Target.appendChild(textCantidadManzanas);
  textCantidadManzanas.textContent = "Tienes " + peceraComida;
  gameBoxDivInt40Target.appendChild(btnComprarAlimento);
  btnComprarAlimento.classList.add("btn", "btn-chico");
  btnComprarAlimento.textContent = "Comprar";
  btnComprarAlimento.addEventListener("click", comprando);
  function comprando(comprando) {
    comprarComida();
  }

  // AGREGANDO RULETA
  let ruletaDiv = document.createElement("div");
  ruletaDiv.classList.add("ruletaDiv");
  gameBoxDiv20.appendChild(ruletaDiv);
  let ruletaDivBtn = document.createElement("button");
  ruletaDiv.appendChild(ruletaDivBtn);
  ruletaDivBtn.classList.add("btnRuleta");
  let ruletaBtnImg = document.createElement("img");
  ruletaBtnImg.src = "/assets/imagenes/ruleta.png";
  ruletaDivBtn.appendChild(ruletaBtnImg);

  ruletaDivBtn.addEventListener("click", () => {
    location.href = "https://preentrega1-geist.netlify.app/ruleta/index.html";
  });

  // agregando STAKING
  let stakingDiv = document.createElement("div");
  gameBoxDiv20.appendChild(stakingDiv);
  let stakingBtn = document.createElement("button");
  ruletaDiv.appendChild(stakingBtn);
  stakingBtn.classList.add("btnStaking");
  stakingBtn.textContent = "STAKING";

  let horaSubmit;
  let minutosSubmit;
  let segundosSubmit;
  if (localStorage.getItem("horaSubmit")) {
    horaSubmit = localStorage.getItem("horaSubmit");
    minutosSubmit = localStorage.getItem("minutosSubmit");
    segundosSubmit = localStorage.getItem("segundosSubmit");
    function iniciarContadorSubmit() {
      stakingBtn.disabled = true;
      stakingBtn.style.opacity = 0.7;

      let tiempoSubmit = setInterval(() => {
        if (segundosSubmit == 0) {
          segundosSubmit = 60;
          localStorage.setItem("segundosSubmit", segundosSubmit);
          minutosSubmit = minutosSubmit - 1;
          localStorage.setItem("minutosSubmit", minutosSubmit);

          if (minutosSubmit == 0) {
            minutosSubmit = 60;
            localStorage.setItem("minutosSubmit", minutosSubmit);

            horaSubmit = horaSubmit - 1;
            localStorage.setItem("horaSubmit", horaSubmit);

            console.log(horaSubmit);
          }
        }

        segundosSubmit = segundosSubmit - 1;
        localStorage.setItem("segundosSubmit", segundosSubmit);

        if (segundosSubmit < 10) {
          segundosSubmit = "0" + segundosSubmit;
          localStorage.setItem("segundosSubmit", segundosSubmit);
        }

        stakingBtn.textContent =
          horaSubmit + ":" + minutosSubmit + ":" + segundosSubmit;

        if (horaSubmit == 0 && minutosSubmit == 1 && segundosSubmit == 1) {
          segundosSubmit = 0;
          localStorage.removeItem("horaSubmit");
          localStorage.removeItem("minutosSubmit");
          localStorage.removeItem("segundosSubmit");
          horaSubmit = 167;
          minutosSubmit = 59;
          segundosSubmit = 60;



          clearInterval(tiempoSubmit);
          console.log("fin");
          stakingBtn.style.opacity = 1;
          stakingBtn.disabled = false;
          stakingBtn.textContent = "STAKING";
           let coralesInversion = localStorage.getItem("coralesInversion");
           monedaCorales += Number(coralesInversion) + Number(coralesInversion * 0.125);
          gameBoxDivInt20P.textContent = monedaCorales.toFixed(2) + " Corales";
          localStorage.setItem("monedaCorales", monedaCorales);
        }
      }, 1000);
    }
    iniciarContadorSubmit();
  } else {
    horaSubmit = 167;
    minutosSubmit = 59;
    segundosSubmit = 60;
  }



  stakingBtn.addEventListener("click", () => {
    let divStakingClick = document.createElement("div");
    console.log(divStakingClick);
    divStakingClick.classList.add("divStakingClick");
    let body = document.querySelector("body");
    body.appendChild(divStakingClick);

    let cerrar = document.createElement("div");
    cerrar.classList.add("cerrar");
    divStakingClick.appendChild(cerrar);

    let izq = document.createElement("div");
    izq.classList.add("izq");
    cerrar.appendChild(izq);

    let der = document.createElement("div");
    der.classList.add("der");
    cerrar.appendChild(der);

    cerrar.addEventListener("click", () => {
      body.removeChild(divStakingClick);
    });

    let rangoContainer = document.createElement("div");
    rangoContainer.classList.add("rangoContainer");
    divStakingClick.appendChild(rangoContainer);

    let rango = document.createElement("input");
    rango.type = "range";
    rango.min = 1;
    rango.max = monedaCorales;
    rango.classList.add("rango");
    rangoContainer.appendChild(rango);

    let valorRango = document.createElement("p");
    valorRango.classList.add("valorRango");
    rangoContainer.appendChild(valorRango);
    valorRango.textContent =
      "Puedes colocar hasta " + Math.floor(monedaCorales) + " Corales";

    rango.addEventListener("input", () => {
      valorRango.textContent = rango.value + " Corales";
    });

    rango.addEventListener("input", () => {
      let x = ((rango.value - rango.min) / (rango.max - rango.min)) * 100;
      let color =
        "linear-gradient(90deg, rgb(59, 156, 217)" +
        x +
        "%, rgb(212, 242, 248)" +
        x +
        "%)";
      rango.style.background = color;
    });

    let submit = document.createElement("input");
    submit.type = "submit";
    submit.value = "STAKE";
    submit.classList.add("submitStake");
    rangoContainer.appendChild(submit);

    //-------------------------------------------------------------//

   // ACA BORRE CODIGO

    submit.addEventListener("click", iniciarContadorSubmit);

    function iniciarContadorSubmit() {
      localStorage.setItem("horaSubmit", horaSubmit);
      localStorage.setItem("minutosSubmit", minutosSubmit);
      localStorage.setItem("segundosSubmit", segundosSubmit);

      stakingBtn.disabled = true;
      stakingBtn.style.opacity = 0.7;

      let tiempoSubmit = setInterval(() => {
        if (segundosSubmit == 0) {
          segundosSubmit = 60;
          localStorage.setItem("segundosSubmit", segundosSubmit);
          minutosSubmit = minutosSubmit - 1;
          localStorage.setItem("minutosSubmit", minutosSubmit);

          if (minutosSubmit == 0) {
            minutosSubmit = 60;
            localStorage.setItem("minutosSubmit", minutosSubmit);

            horaSubmit = horaSubmit - 1;
            localStorage.setItem("horaSubmit", horaSubmit);

            console.log(horaSubmit);
          }
        }

        segundosSubmit = segundosSubmit - 1;
        localStorage.setItem("segundosSubmit", segundosSubmit);

        if (segundosSubmit < 10) {
          segundosSubmit = "0" + segundosSubmit;
          localStorage.setItem("segundosSubmit", segundosSubmit);
        }

        stakingBtn.textContent =
          horaSubmit + ":" + minutosSubmit + ":" + segundosSubmit;

        if (horaSubmit == 0 && minutosSubmit == 1 && segundosSubmit == 1) {
          segundosSubmit = 0;
          localStorage.removeItem("horaSubmit");
          localStorage.removeItem("minutosSubmit");
          localStorage.removeItem("segundosSubmit");
          horaSubmit = 167;
          minutosSubmit = 59;
          segundosSubmit = 60;

          let coralesInversion = localStorage.getItem("coralesInversion");
          monedaCorales = monedaCorales + (coralesInversion + (coralesInversion * 0.125));
          gameBoxDivInt20P.textContent = monedaCorales.toFixed(2) + " Corales";

          clearInterval(tiempoSubmit);
          console.log("fin");
          stakingBtn.style.opacity = 1;
          stakingBtn.disabled = false;
          stakingBtn.textContent = "STAKING";
          
        }
      }, 1000);
    }

     
    //-------------------------------------------------------------//

    submit.addEventListener("click", () => {
      let valorCorales = rango.value;
      monedaCorales = +localStorage.getItem("monedaCorales");
      localStorage.removeItem("monedaCorales");
      let parseado = JSON.stringify(monedaCorales - valorCorales);
      monedaCorales = monedaCorales - valorCorales;
      localStorage.setItem("monedaCorales", parseado);
      gameBoxDivInt20P.textContent = monedaCorales.toFixed(2) + " Corales";

      divStakingClick.removeChild(rangoContainer);
      let divTextoFelicitaciones = document.createElement("div");
      divTextoFelicitaciones.classList.add("divTextoFelicitaciones");
      divStakingClick.appendChild(divTextoFelicitaciones);
      let textoFelicitaciones = document.createElement("h2");
      textoFelicitaciones.innerHTML = `<span>¡Felicitaciones!</span> <br><br> Bloqueaste ${
        rango.value
      } corales. En 1 semana, tendras ${
        Number(rango.value) + rango.value * 0.125
      } Corales a tu disposición.`;
      divTextoFelicitaciones.appendChild(textoFelicitaciones);

      let now = new Date();
      let now2 = new Date();
      let fechaLiberacion;

      function sumarDias(fecha, dias) {
        fecha.setDate(fecha.getDate() + dias);
        return fecha;
      }

      fechaLiberacion = sumarDias(now, 7);

      //VARIABLES PARA STORAGE
      let storageFechaLiberacion = `${fechaLiberacion.getDate()}:${
        fechaLiberacion.getMonth() + 1
      }:${fechaLiberacion.getFullYear()}`;
      let storageFechaActual = `${now2.getDate()}:${
        now2.getMonth() + 1
      }:${now2.getFullYear()}`;
      let storageCoralesInversion = rango.value;

      if (localStorage.getItem("fechaActual")) {
        let ultimaFecha = localStorage.getItem("fechaActual");
        let ultimaLiberacion = localStorage.getItem("fechaLiberacion");
        let ultimaInversion = localStorage.getItem("coralesInversion");
        //FIN VARIABLES PARA STORAGE

        let divHistorialStaking = document.createElement("div");
        divHistorialStaking.classList.add("divHistorialStaking");
        divTextoFelicitaciones.appendChild(divHistorialStaking);
        let h2 = document.createElement("h2");
        h2.textContent = "Tu último movimiento de Stake";
        divHistorialStaking.appendChild(h2);

        let historialStaking = document.createElement("ol");
        divHistorialStaking.appendChild(historialStaking);
        let li = document.createElement("li");
        li.textContent = `Inversion: ${ultimaInversion} Corales | Fecha: ${ultimaFecha} | Fecha de liberacion: ${ultimaLiberacion}`;
        historialStaking.appendChild(li);

        localStorage.setItem("fechaActual", storageFechaActual);
        localStorage.setItem("fechaLiberacion", storageFechaLiberacion);
        localStorage.setItem("coralesInversion", storageCoralesInversion);
      } else {
        let divHistorialStaking = document.createElement("div");
        divHistorialStaking.classList.add("divHistorialStaking");
        divTextoFelicitaciones.appendChild(divHistorialStaking);
        let p = document.createElement("p");
        p.innerHTML =
          "<span>Es tu primer movimiento de STAKE</span> <br><br> Aqui aparecera tu ultimo movimiento.";
        divHistorialStaking.appendChild(p);

        localStorage.setItem("fechaActual", storageFechaActual);
        localStorage.setItem("fechaLiberacion", storageFechaLiberacion);
        localStorage.setItem("coralesInversion", storageCoralesInversion);
      }
    });

    let divTextoExplicaStake = document.createElement("div");
    divTextoExplicaStake.classList.add("divTextoExplicaStake");
    rangoContainer.appendChild(divTextoExplicaStake);
    let textoExplicaStake = document.createElement("p");
    textoExplicaStake.innerHTML =
      'ATENCION: recuerda que al hacer click en STAKE tus corales se bloquearan durante una semana y no podrás utilizarlos hasta esa fecha. Una vez que aprietes en "STAKE", no hay vuelta atras. <br><br> Finalizado el tiempo del stake se acreditaran los beneficios en tu cuenta. <br> Actualmente CoderToFish te paga un 12.5% semanal de los corales que tengas bloqueados. <br> Para mas información lee nuestra wiki.';
    divTextoExplicaStake.appendChild(textoExplicaStake);
  });

  

  //agregando regalo diario

  let btnRegaloDiario = document.createElement("button");
  btnRegaloDiario.textContent = "CLAIM";
  ruletaDiv.appendChild(btnRegaloDiario);
  btnRegaloDiario.classList.add("btnRegaloDiario");

  btnRegaloDiario.addEventListener("click", () => {
    let regaloAlert = document.createElement("h2");
    regaloAlert.classList.add("regaloAlert");
    regaloAlert.textContent = "+1 Manzana";
    let body = document.querySelector("body");
    body.appendChild(regaloAlert);
    setTimeout(() => {
      body.removeChild(regaloAlert);
    }, 1000);
  });

  //-------------------------------------------------------------//
  let hora;
  let minutos;
  let segundos;
  if (localStorage.getItem("hora")) {
    hora = localStorage.getItem("hora");
    minutos = localStorage.getItem("minutos");
    segundos = localStorage.getItem("segundos");
    iniciarContador();
  } else {
    hora = 23;
    minutos = 59;
    segundos = 60;
  }

  btnRegaloDiario.addEventListener("click", iniciarContador);

  function iniciarContador() {
    peceraComida = peceraComida + 1;
    localStorage.setItem('peceraComida', peceraComida)
    textCantidadManzanas.textContent = "Tienes " + peceraComida;



    localStorage.setItem("hora", hora);
    localStorage.setItem("minutos", minutos);
    localStorage.setItem("segundos", segundos);

    btnRegaloDiario.disabled = true;
    btnRegaloDiario.style.opacity = 0.7;

    let tiempo = setInterval(() => {
      if (segundos == 0) {
        segundos = 60;
        localStorage.setItem("segundos", segundos);
        minutos = minutos - 1;
        localStorage.setItem("minutos", minutos);

        if (minutos == 0) {
          minutos = 60;
          localStorage.setItem("minutos", minutos);

          hora = hora - 1;
          localStorage.setItem("hora", hora);

          console.log(hora);
        }
      }

      segundos = segundos - 1;
      localStorage.setItem("segundos", segundos);

      if (segundos < 10) {
        segundos = "0" + segundos;
        localStorage.setItem("segundos", segundos);
      }

      btnRegaloDiario.textContent = hora + ":" + minutos + ":" + segundos;

      if (hora == 0 && minutos == 1 && segundos == 1) {
        segundos = 0;
        localStorage.removeItem("hora");
        localStorage.removeItem("minutos");
        localStorage.removeItem("segundos");
        hora = 23;
        minutos = 59;
        segundos = 60;

        clearInterval(tiempo);
        console.log("fin");
        btnRegaloDiario.style.opacity = 1;
        btnRegaloDiario.disabled = false;
        btnRegaloDiario.textContent = "Claim";
        

      }
    }, 1000);
  }
}




function alimentar() {
  //sardina
  if (pescadosCreados[pescadosCreados.length - 1].nombre === "Pez Sardina") {
    if (peceraComida >= 1) {
      let alimentarPez = confirm("Desea alimentar a este pez?");
      if (alimentarPez === true) {
        peceraComida -= 1;
        pescadoAlimento += 1;
        localStorage.removeItem("peceraComida");
        localStorage.setItem("peceraComida", JSON.stringify(peceraComida));

        localStorage.removeItem("pescadoAlimento");
        localStorage.setItem(
          "pescadoAlimento",
          JSON.stringify(pescadoAlimento)
        );

        pescadosCreados[pescadosCreados.length - 1].alimento = pescadoAlimento;

        if (pescadosCreados[pescadosCreados.length - 1].nivel === 0) {
          monedaCorales += 7;

          localStorage.removeItem("monedaCorales");
          localStorage.setItem("monedaCorales", JSON.stringify(monedaCorales));
        } else if (pescadosCreados[pescadosCreados.length - 1].nivel === 1) {
          monedaCorales += 7 + 7 * 0.1;

          localStorage.removeItem("monedaCorales");
          localStorage.setItem("monedaCorales", JSON.stringify(monedaCorales));
        } else if (pescadosCreados[pescadosCreados.length - 1].nivel === 2) {
          monedaCorales += 7 + 7 * 0.2;

          localStorage.removeItem("monedaCorales");
          localStorage.setItem("monedaCorales", JSON.stringify(monedaCorales));
        } else if (pescadosCreados[pescadosCreados.length - 1].nivel === 3) {
          monedaCorales += 7 + 7 * 0.3;

          localStorage.removeItem("monedaCorales");
          localStorage.setItem("monedaCorales", JSON.stringify(monedaCorales));
        } else if (pescadosCreados[pescadosCreados.length - 1].nivel === 4) {
          monedaCorales += 7 + 7 * 0.4;

          localStorage.removeItem("monedaCorales");
          localStorage.setItem("monedaCorales", JSON.stringify(monedaCorales));
        } else if (pescadosCreados[pescadosCreados.length - 1].nivel === 5) {
          monedaCorales += 7 + 7 * 0.5;

          localStorage.removeItem("monedaCorales");
          localStorage.setItem("monedaCorales", JSON.stringify(monedaCorales));
        }

        informacionPescadoAlimento.textContent =
          "ALIMENTOS: " + pescadosCreados[pescadosCreados.length - 1].alimento;
        gameBoxDivInt20P.textContent = monedaCorales.toFixed(2) + " Corales";
        textCantidadManzanas.textContent = "Tienes " + peceraComida;

        subirNivel();
      }
    } else {
      alert("No tienes suficiente comida");
    }
  }

  // globo
  else if (pescadosCreados[pescadosCreados.length - 1].nombre === "Pez Globo") {
    if (peceraComida >= 2) {
      let alimentarPez = confirm("Desea alimentar a este pez?");
      if (alimentarPez === true) {
        peceraComida -= 2;
        pescadoAlimento += 1;
        localStorage.removeItem("peceraComida");
        localStorage.setItem("peceraComida", JSON.stringify(peceraComida));

        localStorage.removeItem("pescadoAlimento");
        localStorage.setItem(
          "pescadoAlimento",
          JSON.stringify(pescadoAlimento)
        );

        pescadosCreados[pescadosCreados.length - 1].alimento = pescadoAlimento;

        if (pescadosCreados[pescadosCreados.length - 1].nivel === 0) {
          monedaCorales += 13;

          localStorage.removeItem("monedaCorales");
          localStorage.setItem("monedaCorales", JSON.stringify(monedaCorales));
        } else if (pescadosCreados[pescadosCreados.length - 1].nivel === 1) {
          monedaCorales += 13 + 13 * 0.1;

          localStorage.removeItem("monedaCorales");
          localStorage.setItem("monedaCorales", JSON.stringify(monedaCorales));
        } else if (pescadosCreados[pescadosCreados.length - 1].nivel === 2) {
          monedaCorales += 13 + 13 * 0.2;

          localStorage.removeItem("monedaCorales");
          localStorage.setItem("monedaCorales", JSON.stringify(monedaCorales));
        } else if (pescadosCreados[pescadosCreados.length - 1].nivel === 3) {
          monedaCorales += 13 + 13 * 0.3;

          localStorage.removeItem("monedaCorales");
          localStorage.setItem("monedaCorales", JSON.stringify(monedaCorales));
        } else if (pescadosCreados[pescadosCreados.length - 1].nivel === 4) {
          monedaCorales += 13 + 13 * 0.4;

          localStorage.removeItem("monedaCorales");
          localStorage.setItem("monedaCorales", JSON.stringify(monedaCorales));
        } else if (pescadosCreados[pescadosCreados.length - 1].nivel === 5) {
          monedaCorales += 13 + 13 * 0.5;

          localStorage.removeItem("monedaCorales");
          localStorage.setItem("monedaCorales", JSON.stringify(monedaCorales));
        }

        informacionPescadoAlimento.textContent =
          "ALIMENTOS: " + pescadosCreados[pescadosCreados.length - 1].alimento;
        gameBoxDivInt20P.textContent = monedaCorales.toFixed(2) + " Corales";
        textCantidadManzanas.textContent = "Tienes " + peceraComida;
        subirNivel();
      }
    } else {
      alert("No tienes suficiente comida");
    }
  }

  // Espada
  else if (
    pescadosCreados[pescadosCreados.length - 1].nombre === "Pez Espada"
  ) {
    if (peceraComida >= 3) {
      let alimentarPez = confirm("Desea alimentar a este pez?");
      if (alimentarPez === true) {
        peceraComida -= 3;
        pescadoAlimento += 1;
        localStorage.removeItem("peceraComida");
        localStorage.setItem("peceraComida", JSON.stringify(peceraComida));

        localStorage.removeItem("pescadoAlimento");
        localStorage.setItem(
          "pescadoAlimento",
          JSON.stringify(pescadoAlimento)
        );

        pescadosCreados[pescadosCreados.length - 1].alimento = pescadoAlimento;

        if (pescadosCreados[pescadosCreados.length - 1].nivel === 0) {
          monedaCorales += 20;

          localStorage.removeItem("monedaCorales");
          localStorage.setItem("monedaCorales", JSON.stringify(monedaCorales));
        } else if (pescadosCreados[pescadosCreados.length - 1].nivel === 1) {
          monedaCorales += 20 + 20 * 0.1;

          localStorage.removeItem("monedaCorales");
          localStorage.setItem("monedaCorales", JSON.stringify(monedaCorales));
        } else if (pescadosCreados[pescadosCreados.length - 1].nivel === 2) {
          monedaCorales += 20 + 13 * 0.2;

          localStorage.removeItem("monedaCorales");
          localStorage.setItem("monedaCorales", JSON.stringify(monedaCorales));
        } else if (pescadosCreados[pescadosCreados.length - 1].nivel === 3) {
          monedaCorales += 20 + 13 * 0.3;

          localStorage.removeItem("monedaCorales");
          localStorage.setItem("monedaCorales", JSON.stringify(monedaCorales));
        } else if (pescadosCreados[pescadosCreados.length - 1].nivel === 4) {
          monedaCorales += 20 + 20 * 0.4;

          localStorage.removeItem("monedaCorales");
          localStorage.setItem("monedaCorales", JSON.stringify(monedaCorales));
        } else if (pescadosCreados[pescadosCreados.length - 1].nivel === 5) {
          monedaCorales += 20 + 20 * 0.5;

          localStorage.removeItem("monedaCorales");
          localStorage.setItem("monedaCorales", JSON.stringify(monedaCorales));
        }

        informacionPescadoAlimento.textContent =
          "ALIMENTOS: " + pescadosCreados[pescadosCreados.length - 1].alimento;
        gameBoxDivInt20P.textContent = monedaCorales.toFixed(2) + " Corales";
        textCantidadManzanas.textContent = "Tienes " + peceraComida;
        subirNivel();
      }
    } else {
      alert("No tienes suficiente comida");
    }
  }

  // Tiburon
  else if (pescadosCreados[pescadosCreados.length - 1].nombre === "Tiburon") {
    if (peceraComida >= 4) {
      let alimentarPez = confirm("Desea alimentar a este pez?");
      if (alimentarPez === true) {
        peceraComida -= 4;
        pescadoAlimento += 1;
        localStorage.removeItem("peceraComida");
        localStorage.setItem("peceraComida", JSON.stringify(peceraComida));

        localStorage.removeItem("pescadoAlimento");
        localStorage.setItem(
          "pescadoAlimento",
          JSON.stringify(pescadoAlimento)
        );

        pescadosCreados[pescadosCreados.length - 1].alimento = pescadoAlimento;
        if (pescadosCreados[pescadosCreados.length - 1].nivel === 0) {
          monedaCorales += 30;

          localStorage.removeItem("monedaCorales");
          localStorage.setItem("monedaCorales", JSON.stringify(monedaCorales));
        } else if (pescadosCreados[pescadosCreados.length - 1].nivel === 1) {
          monedaCorales += 30 + 30 * 0.1;

          localStorage.removeItem("monedaCorales");
          localStorage.setItem("monedaCorales", JSON.stringify(monedaCorales));
        } else if (pescadosCreados[pescadosCreados.length - 1].nivel === 2) {
          monedaCorales += 30 + 30 * 0.2;

          localStorage.removeItem("monedaCorales");
          localStorage.setItem("monedaCorales", JSON.stringify(monedaCorales));
        } else if (pescadosCreados[pescadosCreados.length - 1].nivel === 3) {
          monedaCorales += 30 + 30 * 0.3;

          localStorage.removeItem("monedaCorales");
          localStorage.setItem("monedaCorales", JSON.stringify(monedaCorales));
        } else if (pescadosCreados[pescadosCreados.length - 1].nivel === 4) {
          monedaCorales += 30 + 30 * 0.4;

          localStorage.removeItem("monedaCorales");
          localStorage.setItem("monedaCorales", JSON.stringify(monedaCorales));
        } else if (pescadosCreados[pescadosCreados.length - 1].nivel === 5) {
          monedaCorales += 30 + 30 * 0.5;

          localStorage.removeItem("monedaCorales");
          localStorage.setItem("monedaCorales", JSON.stringify(monedaCorales));
        }

        informacionPescadoAlimento.textContent =
          "ALIMENTOS: " + pescadosCreados[pescadosCreados.length - 1].alimento;
        gameBoxDivInt20P.textContent = monedaCorales.toFixed(2) + " Corales";
        textCantidadManzanas.textContent = "Tienes " + peceraComida;
        subirNivel();
      }
    } else {
      alert("No tienes suficiente comida");
    }
  }

  // Abisal
  else if (
    pescadosCreados[pescadosCreados.length - 1].nombre === "Pez Abisal"
  ) {
    if (peceraComida >= 5) {
      let alimentarPez = confirm("Desea alimentar a este pez?");
      if (alimentarPez === true) {
        peceraComida -= 5;
        pescadoAlimento += 1;
        localStorage.removeItem("peceraComida");
        localStorage.setItem("peceraComida", JSON.stringify(peceraComida));

        localStorage.removeItem("pescadoAlimento");
        localStorage.setItem(
          "pescadoAlimento",
          JSON.stringify(pescadoAlimento)
        );

        pescadosCreados[pescadosCreados.length - 1].alimento = pescadoAlimento;

        if (pescadosCreados[pescadosCreados.length - 1].nivel === 0) {
          monedaCorales += 40;

          localStorage.removeItem("monedaCorales");
          localStorage.setItem("monedaCorales", JSON.stringify(monedaCorales));
        } else if (pescadosCreados[pescadosCreados.length - 1].nivel === 1) {
          monedaCorales += 40 + 40 * 0.1;

          localStorage.removeItem("monedaCorales");
          localStorage.setItem("monedaCorales", JSON.stringify(monedaCorales));
        } else if (pescadosCreados[pescadosCreados.length - 1].nivel === 2) {
          monedaCorales += 40 + 40 * 0.2;

          localStorage.removeItem("monedaCorales");
          localStorage.setItem("monedaCorales", JSON.stringify(monedaCorales));
        } else if (pescadosCreados[pescadosCreados.length - 1].nivel === 3) {
          monedaCorales += 40 + 40 * 0.3;

          localStorage.removeItem("monedaCorales");
          localStorage.setItem("monedaCorales", JSON.stringify(monedaCorales));
        } else if (pescadosCreados[pescadosCreados.length - 1].nivel === 4) {
          monedaCorales += 40 + 40 * 0.4;

          localStorage.removeItem("monedaCorales");
          localStorage.setItem("monedaCorales", JSON.stringify(monedaCorales));
        } else if (pescadosCreados[pescadosCreados.length - 1].nivel === 5) {
          monedaCorales += 40 + 40 * 0.5;

          localStorage.removeItem("monedaCorales");
          localStorage.setItem("monedaCorales", JSON.stringify(monedaCorales));
        }

        informacionPescadoAlimento.textContent =
          "ALIMENTOS: " + pescadosCreados[pescadosCreados.length - 1].alimento;
        gameBoxDivInt20P.textContent = monedaCorales.toFixed(2) + " Corales";
        textCantidadManzanas.textContent = "Tienes " + peceraComida;
        subirNivel();
      }
    } else {
      alert("No tienes suficiente comida");
    }
  }
}

// espada

// tiburon

// abisal

function comprarComida() {
  if (monedaCorales >= 5) {
    let compra = confirm("¿Desea comprar 1 manzana?");
    if (compra === true) {
      tiendaManzanas -= 1;
      peceraComida += 1;
      localStorage.removeItem("peceraComida");
      localStorage.setItem("peceraComida", JSON.stringify(peceraComida));

      textCantidadManzanas.textContent = "Tienes " + peceraComida;
      monedaCorales -= 5;
      gameBoxDivInt20P.textContent = monedaCorales.toFixed(2) + " Corales";

      localStorage.removeItem("monedaCorales");
      localStorage.setItem("monedaCorales", JSON.stringify(monedaCorales));
    }
  } else {
    alert("No tienes corales suficientes");
  }
}

function subirNivel() {
  if (
    pescadosCreados[pescadosCreados.length - 1].alimento === 50 &&
    pescadosCreados[0].nivel < 5
  ) {
    pescadosCreados[pescadosCreados.length - 1].alimento = 0;
    pescadosCreados[0].nivel = pescadosCreados[0].nivel + 1;
    informacionPescadoNivel.textContent =
      "NIVEL: " + pescadosCreados[pescadosCreados.length - 1].nivel + "/5";
    pescadosCreados[pescadosCreados.length - 1].alimento = 0;

    pescadoAlimento = 0;
    localStorage.removeItem("pescadoAlimento");
    localStorage.setItem("pescadoAlimento", JSON.stringify(pescadoAlimento));

    let pescadoSubido = JSON.parse(localStorage.getItem("mi-pescado"));
    pescadoSubido.nivel += 1;
    localStorage.removeItem("mi-pescado");
    localStorage.setItem("mi-pescado", JSON.stringify(pescadoSubido));
  }
}

function comprarTodo() {
  for (i = 0; i < monedaCorales + i; i++) {
    comprarComida();
    gameBoxDivInt20P.textContent = monedaCorales.toFixed(2) + " Corales";
  }
}

function alimentarTodo() {
  for (i = 0; i < 10 + i; i++) {
    alimentar();
  }
}
