import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Layout } from './layout/Layout'
import { HomePage } from './pages/HomePage'
import { ProductListingPage } from './pages/ProductListingPage'
import { ProductViewPage } from './pages/ProductViewPage'
import { Default } from './pages/Default'
import { BuyBox } from './components/BuyBox'
import { ProductOptions } from './components/ProductOptions'
import { ProductDetails } from './components/ProductDetails'
import { LoginScreen } from './admin/login/LoginScreen'
import { RegisterScreen } from './admin/login/RegisterScreen'
import { CreatingAccount } from './admin/login/CreatingAccount'
import { User } from './pages/User'

function App() { 

  return (
    <Router>    
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/produtos" element={<ProductListingPage/>}/>
          <Route path="/produtos/:id" element={<ProductViewPage/>}/>
          <Route path="/categorias" element={<ProductOptions/>}/>
          <Route path="/meus-pedidos" element={<BuyBox name='' reference={123} rating={1} price={125} priceDiscount={120} children/>}/>
          <Route path="/detalhes-do-produto" element={<ProductDetails/>}/>
          <Route path="/login" element={<LoginScreen/>}/>
          <Route path="/registerEmail" element={<RegisterScreen/>}/>
          <Route path="/register" element={<CreatingAccount />}/>
          <Route path="/*" element={<Default/>}/>
          <Route path="/users" element={<User/>}/>
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
