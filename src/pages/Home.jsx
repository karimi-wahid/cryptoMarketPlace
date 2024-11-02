import React, { useContext, useState } from 'react'
import Table from '../components/Table'
import { CoinContext } from '../context/CoinContext';

const Home = () => {
  const {coinsData,setDisplayData} = useContext(CoinContext)
  const [inputValue, setInputValue] = useState('');

  const handleFormSubmit =async (e) => {
    e.preventDefault()

    const coins = await coinsData.filter((coin) => coin.name.toLowerCase().includes(inputValue.toLowerCase()))
    setDisplayData(coins)
  }
  return (
    <section className='w-full h-full text-center text-white place-items-center my-5'>
        <h1 className='text-2xl md:text-6xl font-[700]'>Largest <br className='hidden md:block'/> Crypto MarketPlace</h1>
        <p className='text-neutral-300 py-3'>Welcome to the world's largest cryptocurrency marketplace. <br/> Sign up to explore more about cryptos.</p>
        <form onSubmit={handleFormSubmit} className='w-[98%] md:w-[500px] bg-white flex items-center px-3 py-2 rounded-md outline-none'>
            <input type="text" placeholder='Search crypto..'
            list='coinList'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value || setDisplayData(coinsData))}
            className='w-[90%] md:w-[450px] py-2 outline-none text-black'/>
            <datalist id='coinList'>
            {coinsData.map((item, index) => <option key={index} value={item.name} />)}
            </datalist>
            <button className='text-white bg-gradient-to-tr from-blue-600 to-blue-900 px-5 py-2 rounded-lg'>Search</button>
        </form>
        <Table />
    </section>
  )
}

export default Home