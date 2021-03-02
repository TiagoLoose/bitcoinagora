import axios  from "axios";

export const getCotacao = async (moeda) => {
    const url = `https://www.mercadobitcoin.net/api/${moeda.sigla}/ticker`
    const response = await axios.get(url)
console.log(response)
    return {atual: response.data.ticker.last,
            menor: response.data.ticker.low,
            maior: response.data.ticker.high}
}