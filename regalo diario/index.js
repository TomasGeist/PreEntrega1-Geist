  let hora;
  let minutos;
  let segundos;
   if (localStorage.getItem("hora")) {
     hora = localStorage.getItem("hora");
     minutos = localStorage.getItem("minutos");
     segundos = localStorage.getItem("segundos");
     iniciarContador()
   } else {
    hora = 23;
    minutos = 59;
    segundos = 60;
   }
  
  btnRegaloDiario.addEventListener("click", iniciarContador)

  function iniciarContador () {
        localStorage.setItem("hora", hora);
        localStorage.setItem("minutos", minutos);
        localStorage.setItem("segundos", segundos);
    

    btnRegaloDiario.disabled = true;
    btnRegaloDiario.style.opacity = 0.7;

    let tiempo = setInterval(() => {
      if (segundos == 0) {
        segundos = 60;
        localStorage.setItem('segundos', segundos)
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
  };

