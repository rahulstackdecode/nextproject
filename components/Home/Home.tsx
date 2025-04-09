import React from 'react'
import Hero from './Hero/Hero';
import WhyChoose from './WhyChoose/WhyChoose';

const Home = () => {
  return (
    <div className='overflow-hidden'>
        <Hero></Hero>
        <WhyChoose></WhyChoose>
    </div>
  )
}

export default Home;