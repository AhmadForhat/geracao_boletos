function infoSheet() {
    return new Promise((resolve,reject) => {
    console.log('Peguei as informações do Sheet')
    resolve('Sucesso!')
    })
}

module.exports = infoSheet