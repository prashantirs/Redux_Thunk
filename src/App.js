import "./App.css";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Header from "./Components/Header";
import ProductListing from "./Components/ProductListing";
import { ProductDetails } from "./Components/ProductDetails";


function App() {
  return (
   <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" exact element={<ProductListing/>}/>
        <Route path="/about" element={<ProductDetails/>}/>
      </Routes>
    </Router>
   </>
)}

export default App;
