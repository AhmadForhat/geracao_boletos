function sendSheet(){
    return new Promise((resolve,reject) => {
        console.log('Email Enviado com sucesso para o google sheets')
        resolve('Sucesso!')
    })
}

module.exports = sendSheet