let btnRegaloDiario = document.querySelector('#btnRegaloDiario');

//PRUEBA

let contador;


let iniciarContador = () => {
   let hora = 23
   let minutos = 59
   let segundos = 60
   btnRegaloDiario.disabled = true;
   btnRegaloDiario.style.opacity = 0.7;

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


    if (segundos < 10) {
        segundos = "0"+segundos    
    }
       
    btnRegaloDiario.textContent = hora + ":" + minutos + ":" + segundos

       
    



    if (hora == 0 && minutos == 1 && segundos == 1) {
        segundos = 0
        
        
        clearInterval(tiempo)
        console.log("fin")
        btnRegaloDiario.disabled = false;
        btnRegaloDiario.textContent = "Claim"
        
    }

   
        
        
     

   }, 1000);

}


btnRegaloDiario.addEventListener('click', iniciarContador);

