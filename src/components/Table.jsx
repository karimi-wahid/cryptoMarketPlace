import React, { useContext, useEffect, useState } from 'react'
import { CoinContext } from '../context/CoinContext'

const Table = () => {
    const {coinsData, currency ,displayData, setDisplayData, value_converter} = useContext(CoinContext)

    useEffect(() => {
        setDisplayData(coinsData)
    },[coinsData])
  return (
    
<div className="container place-items-center py-5">
	<table className="text-left w-full md:w-[60%]">
		<thead className="bg-gradient-to-r from-blue-900 to-blue-950 text-white w-full">
			<tr className="flex w-full mb-4">
				<th className="p-4 w-3  md:w-1/4">#</th>
				<th className="p-4 w-1/4">Coins</th>
				<th className="p-4 w-1/4">Price</th>
				<th className="p-4 w-1/4">24H Changes</th>
				<th className="p-4 w-1/4">Market Cup</th>
			</tr>
		</thead>
		<tbody className="bg-grey-light flex flex-col items-center justify-between w-full height-[50vh]">
            {displayData.slice(0, 10).map((coin, index) => (
			
			<tr className="flex w-full mb-4" key={index}>
				
				<td className="p-4 w-3 md:w-1/4">{coin.market_cap_rank}</td>
				<td className="p-4 w-1/4">
                <img src={coin.image} alt="image"
                    className='w-10 mr-2' />
                    <p className='text-[12px]'>{coin.name}</p>
                </td>
				<td className="p-4 w-1/4 text-[12px]">{currency == 'usd' ? "$" : "€"} {coin.current_price}</td>
				<td className={`p-4 w-1/4 text-[12px] ${Math.floor(coin.price_change_percentage_24h * 100) / 100 > 1 ? 'text-green-400' : 'text-red-600'}`}>{Math.floor(coin.price_change_percentage_24h*100)/100}</td>
				<td className="p-4 w-1/4 text-[12px]">{value_converter(coin.market_cap)}</td>
				
			</tr>
            ))}
		</tbody>
	</table>
</div>
  )
}

export default Table