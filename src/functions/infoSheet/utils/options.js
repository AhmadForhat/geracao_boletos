const optionsBatchGet = (ranges) =>{
    const url = process.env.URL_SHEET
    const auth = `Basic ${process.env.TOKEN_SHEET}`
    return {
        method: 'GET',
        url:url,
        headers: {
            'Origin': 'https://ziro.app',
            'Content-type': 'application/json',
            'Authorization': auth
        },
        body : {
            'apiResource': 'values',
            'apiMethod': 'batchGet',
            'spreadsheetId': process.env.ID_SHEET,
            'ranges': ranges
        },
        json: true
    }
}


module.exports = optionsBatchGet