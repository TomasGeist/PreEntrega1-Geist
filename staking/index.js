let btnStaking = document.querySelector('#btn-staking')
let corales = JSON.parse(localStorage.getItem('monedaCorales'))
let misMonedas = document.querySelector('#cantidadDeMonedas');

misMonedas.textContent = corales


btnStaking.addEventListener('click', staking);



function staking(){
setTimeout(() => {
    corales = corales * 0.05 + corales
    localStorage.removeItem('monedaCorales')
    JSON.stringify(localStorage.setItem('monedaCorales', corales))
    misMonedas.textContent = corales

}, 10000);
}