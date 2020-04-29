const infoSheet = require('./functions/infoSheet/index.js')
const createBillet = require('./functions/createBillet/index.js')
const sendEmail = require('./functions/sendEmail/index.js')
const resultSheet = require('./functions/sendSheet/index.js')
require('dotenv').config()


new Promise( (resolve) => {
    resolve('ok')
})
    .then(infoSheet)
    .then(informacaoSheet => createBillet(informacaoSheet))
    .then(linkBillet => sendEmail(linkBillet))
    .then(resultSheet)