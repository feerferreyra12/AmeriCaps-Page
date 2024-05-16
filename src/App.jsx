import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { CartPage } from "./pages/CartPage";
import { HomePage }  from "./pages/HomePage";
import {NavBar} from './components/NavBar'
import { CartProvider } from "./context/CartProvider";
import { ProductsPage } from "./pages/ProductsPage";
import { LoginPage } from "./pages/LoginPage";



const App = () => {

  return (
<CartProvider>
<BrowserRouter>
    <NavBar ></NavBar>
    <Routes>
        <Route path="/" element={<HomePage ></HomePage>}></Route>
        <Route path="/carrito-de-compras" element={<CartPage></CartPage>}></Route>
        <Route path="/productos" element={<ProductsPage></ProductsPage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/*" element={ <Navigate to='/'/> }></Route>
    </Routes>
    </BrowserRouter> 
    </CartProvider>
  )
};

export default App;
