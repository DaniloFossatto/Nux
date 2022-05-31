import React from 'react';
import Stripe from 'stripe';
import { GetStaticPaths, GetStaticProps } from 'next';
import stripeConfig from '../config/stripeConfig';

interface Props{
  product: Stripe.Product
}

export const getStaticPaths: GetStaticPaths = async () =>{
  const stripe = new Stripe(stripeConfig.secretKey,{
    apiVersion: '2020-08-27',
  })

  const products = await stripe.products.list() 

  const paths = products.data.map(product =>({
    params:{
      productId: product.id
    }
  }) )
 
  return{ 
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) =>{
  const stripe = new Stripe(stripeConfig.secretKey,{
    apiVersion: '2020-08-27',
  })
  const {productId} = params 
  const product = await stripe.products.retrieve(productId as string)

   
  return{
    props: {
      product
    },
  }
}
const Product: React.FC<Props> = ({product}) => {
  return (<div>
     <h1>{product.name}</h1>
     <h2>R$29.90/mês</h2>
  </div>);
}


export default Product;