const infoSheet = require('./functions/infoSheet/index.js')
const createBillet = require('./functions/createBillet/index.js')
const sendEmail = require('./functions/sendEmail/index.js')
const resultSheet = require('./functions/sendSheet/index.js')


new Promise(function(resolve, reject) {
    resolve('OK!')
})
    .then(infoSheet)
    .then(createBillet)
    .then(sendEmail)
    .then(resultSheet)