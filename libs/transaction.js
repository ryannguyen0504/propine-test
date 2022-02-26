export const groupAndSumByToken = (array) => {
    let result = [];
    const withdrawl = 'WITHDRAWAL';

    array.reduce((res, value) => {
        if (!res[value.token]) {
            res[value.token] = { token: value.token, portfolio: 0 };
            result.push(res[value.token])
        }

        res[value.token].portfolio += value.transaction_type == withdrawl 
            ? -Number(value.amount)
            : Number(value.amount);

        return res;
    }, {});

    return result;
}

export const convertUnit = (portfolios, rates, toCur) => {
    if(portfolios != null & portfolios.length > 0 && rates !== null) {
        return portfolios.map(x => {
            return {
                    token: x.token, 
                    portfolio: `$${x.portfolio * Number(rates[x.token][toCur])}` 
                   }
        });
    }

    return [];
    
}
 
// we can implement more function for this file to handle transactions