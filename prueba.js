let pruebaText = document.querySelector('#prueba-text')
let pruebaBtn = document.querySelector('#prueba-btn');
let contador;


let iniciarContador = () => {
   let hora = 3
   let minutos = 59
   let segundos = 60
   pruebaBtn.disabled = true;
   pruebaBtn.style.opacity = 0.7;

   let tiempo = setInterval(() => {
    if (segundos == 0) {
        segundos = 60
        minutos = minutos - 1
        if (minutos == 0) {
            minutos = 60
            hora = hora - 1
            console.log(hora)
        }
    }

    segundos = segundos - 1

    if (hora == 0 && minutos == 1 && segundos == 1) {
        segundos = 0
        pruebaText.textContent = ""


        clearInterval(tiempo)
        console.log("fin")
       pruebaBtn.disabled = false;
        
    }

 
    pruebaText.textContent = 'Te quedan ' + "0" + hora + ":" + minutos + ":" + segundos + " para alimentar nuevamente"
     

   }, 1000);
    }


pruebaBtn.addEventListener('click', iniciarContador);

