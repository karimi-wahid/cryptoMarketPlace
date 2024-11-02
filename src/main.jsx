import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CoinProvider } from './context/CoinContext.jsx'


createRoot(document.getElementById('root')).render(
  <CoinProvider>
    <App />
  </CoinProvider>,
)
