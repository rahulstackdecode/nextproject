import React from 'react'
import Hero from './Hero/Hero';
import WhyChoose from './WhyChoose/WhyChoose';
import BlogSec from './Blogs/BlogSec';
import Rating from './Rating/Rating'
import Cta from './Cta/CtaSection'

const Home = () => {
  return (
    <div className='overflow-hidden'>
        <Hero></Hero>
        <WhyChoose></WhyChoose>
        <Cta></Cta>
        <Rating></Rating>
        <BlogSec></BlogSec>
    </div>
  )
}

export default Home;