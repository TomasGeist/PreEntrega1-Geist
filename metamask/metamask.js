let conectarMetamask = document.querySelector('.metamask');
let cuenta;

conectarMetamask.addEventListener('click', evento => {
    ethereum.request({method: 'eth_requestAccounts'}).then(cuentas => {
        cuenta = cuentas[0]
        console.log(cuenta)
    
    ethereum.request({method: 'eth_getBalance', params: [cuenta, 'latest']}).then(resultado => {
        console.log(resultado)
        let wei = parseInt(resultado,16)
        let balance = wei / (10**18);
        console.log(balance)

        conectarMetamask.textContent = cuenta
    })


    })
})

