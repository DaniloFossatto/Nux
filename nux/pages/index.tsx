import { GetStaticProps } from "next"
import Head from "next/head"
import CheckoutButton from "../components/CheckoutButton"
import Stripe from "stripe"
import stripeConfig from "../config/stripeConfig"
import Product from "./[productId]"
import Header from "../components/Header"
import Main from "../components/Main"
import GlobalStyle from "../styles/GlobalStyle"












const Home: React.FC = () =>{
  
   

  return (<div>
   
    <Header/>
    <Main/>
  

   <GlobalStyle/>
  </div>)
}

export default Home