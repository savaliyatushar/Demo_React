import React from 'react'
import HomeBanner from '../../components/Banner/HomeBanner';
import Instanav from '../../components/Insta/Insta-nav';
import Subscribes from '../../components/Subscribes/Subscribes';
import Review from '../../components/Reviews/Review';
import Post from '../../components/Latest Posts/Post-nav';
import Sale from '../../components/Sales/Sale';
import Watches from '../../components/Smart Watches/W-product-nav';
import Products from '../../components/mobile-products/M-products-nav';
import Feature from '../../components/Features/Feature';
import { Navigate } from "react-router-dom";
import { useAuth } from '../../Context/AuthContext';


const Home=()=>{
   const { auth } = useAuth();

   if (!auth) {
     return <Navigate to="/" />;
   }
  return (
    <div>
      <HomeBanner />
      <Feature />
      <Products />
      <Watches />
      <Sale />
      <Post />
      <Review />
      <Subscribes />
      <Instanav />
    </div>
  );
}
export default Home;