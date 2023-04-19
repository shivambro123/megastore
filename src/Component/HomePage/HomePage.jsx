import React from 'react'
import HeroComp from '../Hero/HeroComp'
import DisPoster from '../Discount/DisPoster'
import CategoryComp from '../Category/CategoryComp'
import TrendingPost from '../TrendingPoster/TrendingPost'
import FeaturedProduct from '../FeaturedProducts/FeaturedProduct'

const HomePage = () => {
  return (
    <>
  <HeroComp/>
  <DisPoster/>
  <CategoryComp/>
  <TrendingPost/>
  <FeaturedProduct/>
    </>
  )
}

export default HomePage