let center = document.querySelector('.center');
let rueda = document.querySelector('.rueda')
let body = document.querySelector('body')

let parteUno;
let textBalance = document.querySelector(".textBalance");
let balance = localStorage.getItem("monedaCorales");

textBalance.textContent = balance + " Corales";

let btnVolver = document.querySelector(".btnVolver");
 btnVolver.textContent = "VOLVER"

btnVolver.addEventListener('click', () => {
     location.href = "https://preentrega1-geist.netlify.app/game/game.html";
 })


center.addEventListener('click', ()=>{
    let monCorales = Number(localStorage.getItem('monedaCorales'))

    if (monCorales >= 15) {
        
        monCorales = monCorales - 15
        localStorage.removeItem('monedaCorales')
        localStorage.setItem('monedaCorales', monCorales)
        
        textBalance.textContent = monCorales + " Corales";


    parteUno = (Math.floor(Math.random() * 9)).toString();
    if (parteUno == 0) {
        parteUno = "1";
    }

    let suerte = 'girar'+parteUno


    rueda.classList.add(suerte)
    center.disabled = true;
    center.textContent = "ESPERE..."

    setTimeout(() => {
        rueda.classList.remove('girar'+parteUno)
        center.disabled = false;
    center.textContent = "GIRAR"

    }, 5000);

    // cobrar precio de tirada

    


    // Mostrar premio:
    setTimeout(() => {

    let divPremio = document.createElement('div');
    divPremio.classList.add('divPremio')
    body.appendChild(divPremio);

    let cerrar = document.createElement('div');
    cerrar.classList.add('cerrar')
    divPremio.appendChild(cerrar)

    let izq = document.createElement('div');
    izq.classList.add('izq')
    cerrar.appendChild(izq)

    let der = document.createElement('div');
    der.classList.add('der')
    cerrar.appendChild(der)


    //Imagen a mostrar

    

    if(rueda.classList[1] == 'girar1' || rueda.classList[1] == 'girar3' || rueda.classList[1] == 'girar4' || rueda.classList[1] == 'girar5' || rueda.classList[1] == 'girar7'){
        let tipoPremioContainer = document.createElement('div');
        tipoPremioContainer.classList.add('tipoPremioContainer')
        divPremio.appendChild(tipoPremioContainer)


        let tipoPremio = document.createElement('img');
        tipoPremioContainer.appendChild(tipoPremio);
        tipoPremio.src = 'manzana.png'

        let peceraComida = Number(localStorage.getItem('peceraComida'))
        peceraComida = peceraComida + 1
        localStorage.removeItem('peceraComida')
        localStorage.setItem('peceraComida', peceraComida)
    }

    else if(rueda.classList[1] == 'girar6'){
        let tipoPremioContainer = document.createElement('div');
        tipoPremioContainer.classList.add('tipoPremioContainer')
        divPremio.appendChild(tipoPremioContainer)


        let tipoPremio = document.createElement('h3');
        tipoPremioContainer.appendChild(tipoPremio);
        tipoPremio.textContent = 'GANASTE 40 CORALES!'

        let monedaCorales = Number(localStorage.getItem('monedaCorales'))
        monedaCorales = monedaCorales + 40
        localStorage.removeItem('monedaCorales')
        localStorage.setItem('monedaCorales', monedaCorales)
        textBalance.textContent = monedaCorales + " Corales";
    }

    else if(rueda.classList[1] == 'girar8'){
        let tipoPremioContainer = document.createElement('div');
        tipoPremioContainer.classList.add('tipoPremioContainer')
        divPremio.appendChild(tipoPremioContainer)


        let tipoPremio = document.createElement('h3');
        tipoPremioContainer.appendChild(tipoPremio);
        tipoPremio.textContent = 'GANASTE 60 CORALES!'

        let monedaCorales = Number(localStorage.getItem('monedaCorales'))
        monedaCorales = monedaCorales + 60
        localStorage.removeItem('monedaCorales')
        localStorage.setItem('monedaCorales', monedaCorales)
        textBalance.textContent = monedaCorales + " Corales";

    }

    else if(rueda.classList[1] == 'girar2'){
        let tipoPremioContainer = document.createElement('div');
        tipoPremioContainer.classList.add('tipoPremioContainer')
        divPremio.appendChild(tipoPremioContainer)


        let tipoPremio = document.createElement('h3');
        tipoPremioContainer.appendChild(tipoPremio);
        tipoPremio.textContent = 'PERDISTE TU APUESTA :('
    }
   

    cerrar.addEventListener('click', ()=> {
       body.removeChild(divPremio)
    })
}, 4900);
    

    
    }  else {

    let divPremio = document.createElement('div');
    divPremio.classList.add('divPremio')
    body.appendChild(divPremio);

    let cerrar = document.createElement('div');
    cerrar.classList.add('cerrar')
    divPremio.appendChild(cerrar)

    let izq = document.createElement('div');
    izq.classList.add('izq')
    cerrar.appendChild(izq)

    let der = document.createElement('div');
    der.classList.add('der')
    cerrar.appendChild(der)

    let tipoPremioContainer = document.createElement('div');
    tipoPremioContainer.classList.add('tipoPremioContainer')
    divPremio.appendChild(tipoPremioContainer)

    let tipoPremio = document.createElement('h3');
    tipoPremioContainer.appendChild(tipoPremio);
    tipoPremio.textContent = 'NO TIENES SUFICIENTES CORALES'

    cerrar.addEventListener('click', ()=> {
        body.removeChild(divPremio)
     })
    }

    
})

