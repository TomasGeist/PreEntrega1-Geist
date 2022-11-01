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

let precioBNB = document.querySelector("#precioBNB");
  

const obtenerPrecioBNB = () => {
  let precioCorales = 0.25
  fetch("https://min-api.cryptocompare.com/data/price?fsym=BNB&tsyms=USD")
    .then((respuesta) => {
    return respuesta.json()
    })
    .then((datos) => {
      
         precioBNB.textContent = `Cada coral vale ${precioCorales}USD. El BNB esta ${datos.USD}USD`;
     
  })
    .catch((error) => {
    console.log(error)
  })

}

setInterval(() => {
  obtenerPrecioBNB();
}, 1000);




