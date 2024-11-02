import { useContext, useState } from "react"
import { CoinContext } from "../context/CoinContext"
import logo from '../assets/logo.png'
import { IoIosMenu, IoClose } from "react-icons/io";

const Navbar = () => {
    const { setCurrency } = useContext(CoinContext)
    const [navToggle, setNavToggle] = useState(false)
    const handleNav = () => {
        setNavToggle(!navToggle)
    }

    return (
        <header className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 px-5'>
            <nav className='container px-4 mx-auto relative text-sm'>
                <div className='flex items-center justify-between'>
                    <img src={logo} alt="logo" />
                    <div className={`flex justify-between items-center text-white lg:px-5 absolute top-0 right-0 md:relative`}>
                        <ul className='hidden lg:flex ml-14 space-x-12 mr-3'>
                            <li>Home</li>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Blog</li>
                        </ul>
                        <div className='hidden lg:flex justify-center space-x-12 items-center'>
                            <select className='outline-none border border-neutral-100 px-3 py-1 rounded-md bg-blue-950'
                                onChange={(e) => setCurrency(e.target.value)}>
                                <option value="usd">USD</option>
                                <option value="eur">Euro</option>
                            </select>
                            <button className='px-3 py-2 rounded-lg bg-white text-black hover:scale-95 hover:text-yellow-400'>Sign Up</button>
                        </div>
                        <div className="lg:hidden md:flex flex-col justify-end">
                            <button onClick={() => handleNav()}>
                                {navToggle ? <IoClose /> : <IoIosMenu />}
                            </button>
                        </div>
                    </div>

                </div>
                {
                    navToggle && (
                        <div className='fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden'>
                            <ul className="space-y-5 mb-5 text-xl">
                                <li>Home</li>
                                <li>Features</li>
                                <li>Pricing</li>
                                <li>Blog</li>
                            </ul>
                            <div className="flex space-x-6">
                                <select className='outline-none border border-neutral-500 px-3 py-1 rounded-md '
                                    onChange={(e) => setCurrency(e.target.value)}>
                                    <option value="usd">USD</option>
                                    <option value="eur">Euro</option>
                                </select>
                                <button to='#' className='py-2 px-3 border rounded-md bg-black text-white'>Sign In</button>

                            </div>
                        </div>
                    )
                }
            </nav>
        </header>
    )
}

export default Navbar