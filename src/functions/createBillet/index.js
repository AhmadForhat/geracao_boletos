function createBillet(){
    return new Promise((resolve,reject) => {
        console.log('Criei meu Boleto')
        resolve('Sucesso!')
    })
}

module.exports = createBillet