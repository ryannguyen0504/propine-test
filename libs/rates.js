import fetch from 'node-fetch';

const getRates = async (arr, unit) => {

    if(arr.length) {
        const tokens = arr.toString();
        const url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${tokens}&tsyms=${unit}`;
        const response = await fetch(url);
        return await response.json();
    }
} 

export default getRates;