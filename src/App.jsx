import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import Product from "./components/pages/Product.jsx";
import Contect from "./components/pages/Contect.jsx";
import Cart from "./components/pages/Cart.jsx";


function App() {
  return (
   <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contect" element={<Contect />} />
          </Routes>
         </BrowserRouter>
   
   </>
  );
}

export default App;