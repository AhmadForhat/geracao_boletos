const optionsCreateBillet = (valor, idBuyer) =>{
    const url = `${process.env.URL_ZOOP}/${process.env.ID_MARKET}/transactions`
    const auth = `Basic ${process.env.TOKEN_ZOOP}`
    return {
        method: 'POST',
        url:url,
        headers: {
            'Content-type': 'application/json',
            'Authorization': auth
        },
        body : {
            'amount': valor,
            'currency': 'BRL',
            'description': 'venda',
            'on_behalf_of': process.env.ID_ZIRO,
            'customer': idBuyer,
            'payment_type': 'boleto'
        },
        json: true
    }
}


module.exports = optionsCreateBillet