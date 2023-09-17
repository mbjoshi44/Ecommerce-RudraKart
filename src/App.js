import{BrowserRouter, Routes,Route} from "react-router-dom"
import Home from './Components/Home';
import Category from './Components/Category';
import Products from './Components/Products';
import NotFound from './Components/NotFound';
import Header from "./pages/header/Header";
import Cart from './Components/Cart';
import Footer  from "./pages/footer/Footer";
import Order from "./Components/Order";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login"
import Ragister from "./Components/Ragister";
import Nav from "./pages/navbaar/Nav"


function App() {
  return (
    <>
    <div className="container">
     <BrowserRouter>
    <Header/>
    
    <Nav/>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path='/category/:category' element={<Category />} />
        <Route path="/products/:id" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/ragister" element={<Ragister/>}/>
        <Route path="*" element ={<NotFound/>}/>
      </Routes>
      <Footer/>
     </BrowserRouter>
    </div>
    </>
  );
}

export default App;
