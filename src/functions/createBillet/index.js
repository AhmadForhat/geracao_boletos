const rp = require('request-promise-native')
const optionsZoop = require('./utils/options')


const createBillet = async (infoSheets) => {
    const { idBuyer, value, email } = infoSheets[0]
    try {
        const request = await rp(optionsZoop(value*100, idBuyer))
        const object = {
            destinatario: email,
            url: request.payment_method.url
        }
        console.log(object)
        return object
    } catch (error) {
        console.log(error)
        return error
    }
}

module.exports = createBillet