function sendEmail(){
    return new Promise((resolve,reject) => {
    console.log('Email Enviado')
    resolve('Sucesso!')
    })
}

module.exports = sendEmail