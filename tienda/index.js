let informacionPescadoId = document.getElementById("informacionPescadoId");
let imgPescado = document.getElementById("imgPescado");
let pescadoStorage;
let datosUsuario = [];

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



  // espacio

  
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


  let container = document.querySelector('.container');

let agregarDivs = function(){
    let tarjeta1 = document.createElement('div')
    tarjeta1.classList.add('tarjeta')
    container.appendChild(tarjeta1)
    
  
}


  window.addEventListener('load', agregarDivs);

  

let comprarPezTienda = () => {
    container.removeChild(container.lastChild)
}


document.querySelector('#comprar');

comprar.addEventListener('click', comprarPezTienda)


let venderPezTienda = () => {
    let tarjeta1 = document.createElement('div')
    tarjeta1.classList.add('tarjeta')
    container.appendChild(tarjeta1)
    let p1 = document.createElement('p');
    let parseado = JSON.parse(localStorage.getItem('mi-pescado'));
    p1.textContent = parseado.id + " " + parseado.nombre
    tarjeta1.appendChild(p1)
}


document.querySelector('#vender');

vender.addEventListener('click', venderPezTienda)