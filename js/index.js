const $btnSignIn = document.querySelector(".sign-in-btn"),
  $btnSignUp = document.querySelector(".sign-up-btn"),
  $signUp = document.querySelector(".sign-up"),
  $signIn = document.querySelector(".sign-in");

document.addEventListener("click", (e) => {
  if (e.target === $btnSignIn || e.target === $btnSignUp) {
    $signIn.classList.toggle("active");
    $signUp.classList.toggle("active");
  }
});

let formularioRegistro = document.querySelector("#formularioRegistro");
let message = document.querySelector(".message");
let formularioLogin = document.querySelector("#formularioLogin");

if (localStorage.getItem("email") && localStorage.getItem("password")) {
  let divAlert = document.createElement('div');
  let body = document.querySelector('body');
  divAlert.classList.add("cuentaActiva")
  body.appendChild(divAlert)

  let pAlertActive = document.createElement('p');
  pAlertActive.textContent = 'Hemos Detectado que ya tienes una cuenta, por favor Inicia Sesion'
  
  divAlert.appendChild(pAlertActive)
  

}


formularioRegistro.addEventListener('submit', e => {
  let nombre = formularioRegistro[0].value
  let email = formularioRegistro[1].value
  let password = formularioRegistro[2].value

  localStorage.setItem('nombre', nombre)
  localStorage.setItem('email', email)
  localStorage.setItem('password', password)


}
)


formularioLogin.addEventListener("submit", (e) => {
  e.preventDefault()
  if (formularioLogin[0].value == localStorage.getItem('email') && formularioLogin[1].value == localStorage.getItem('password')) {
    let containerForm = document.querySelector('.container-form')
    containerForm.classList.add('hidden')
    $signUp.classList.add('hidden')
    $signIn.classList.add('hidden')
    location.href = "https://preentrega1-geist.netlify.app/game/game.html";
  } 
    
 
});
