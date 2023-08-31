import Home from "./components/home/Home";
import CartContent from "./components/home/CartContent/CartContent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function app() {
  return  (
    
    <BrowserRouter>
      <Routes>
        <Route path="/"element={<Home/>} />
        <Route path="/cart" element={<CartContent />}/>
      </Routes>
    </BrowserRouter>
    
  );
};

export default app;

