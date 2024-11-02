import axios from "axios";
import { createContext, useEffect } from "react";
import { useState } from "react";

const CoinContext = createContext();


const CoinProvider = ({children}) => {
    const [coinsData, setCoinsData] = useState([])
    const [currency, setCurrency] = useState("usd")
    const [displayData, setDisplayData] = useState([])

    const fetchCoinData = async () => {
    const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'x-cg-demo-api-key': import.meta.env.VITE_API_KEY}
      };
      
    const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`, options)
    setCoinsData(res.data)
    }

    useEffect(() =>{
        fetchCoinData()
    },[currency])


    const value_converter = (value) => {
        if (value >= 1000000) {
          return Math.floor(value / 1000000) + "M";
        } else if (value >= 1000) {
          return Math.floor(value / 1000) + "K";
        } else {
          return value;
        }
      };

    return <CoinContext.Provider value={{coinsData, currency, setCurrency, displayData, setDisplayData, value_converter}}>
        {children}
    </CoinContext.Provider>
}


export {CoinContext, CoinProvider}