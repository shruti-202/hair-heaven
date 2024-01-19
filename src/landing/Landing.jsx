import React from 'react'
import Slider from '../components/Slidebar/Slider'
import TopCategory from '../components/Header/TopCategory'
import ProductList from '../components/Header/ProductList'
import Footer from '../components/Footer/Footer'

function Landing() {
  return (
    <div>
      <Slider/>
      <TopCategory/>
      <ProductList/>
      <Footer/>
    </div>
  )
}

 export default Landing

