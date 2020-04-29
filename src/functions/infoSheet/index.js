const rp = require('request-promise-native')
const arrayToObject = require('@ziro/array-object')
const optionsSheets = require('./utils/options')

async function infoSheet() {
    try {
        const results = await rp(optionsSheets(['informações!A:C']))
        const baseBoletos = arrayToObject(results.valueRanges[0])
        console.log(baseBoletos)
        return baseBoletos
    } catch (error) {
        console.log(error)
        return error
    }
}

module.exports = infoSheet
