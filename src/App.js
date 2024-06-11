// App.js
import React from "react";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/loginform/Login";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Shop from "./pages/Shop/Shop";
import Checkout from "./pages/Checkout/Check";
import Single from "./pages/single post/Single";
import Contactpage from "./pages/Contact/Contactpage";
import { AuthProvider } from "./Context/AuthContext";
import Services from "./pages/Services/Services";
import Products from "./pages/products/products";
import Watches from "./pages/Watches/Watches";
import Salepage from "./pages/Sale/Salepage";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/watches" element={<Watches />} />
          <Route path="/Sale" element={<Salepage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about"  element={<About/>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/singlepost" element={<Single />} />
          <Route path="/contact" element={<Contactpage />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
