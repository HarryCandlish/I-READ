import React from 'react'
import './home.css'
import MainHeader from '../../components/MainHeader'
import Product from '../../components/Product'
import Values from '../../components/Values'
import FAQs from '../../components/FAQs'


const Home = () => {
  return (
    <>
    <MainHeader/>
    <Product/>
    <Values/>
    <FAQs/>
    </>
  )
}

export default Home