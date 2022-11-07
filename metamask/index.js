let conectarMetamask = document.querySelector('#conectarMetamask');
let cuenta;
let cuentaMostrar = document.querySelector('#cuenta')

conectarMetamask.addEventListener('click', evento => {
    ethereum.request({method: 'eth_requestAccounts'}).then(cuentas => {
        cuenta = cuentas[0]
        console.log(cuenta)
    
    ethereum.request({method: 'eth_getBalance', params: [cuenta, 'latest']}).then(resultado => {
        console.log(resultado)
        let wei = parseInt(resultado,16)
        let balance = wei / (10**18);
        console.log(balance)

        cuentaMostrar.textContent = 'Te conectate desde la direccion: ' + cuenta + "  y tienes " + balance + "ETH";
    })


    })
})

