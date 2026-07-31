import React from 'react'
import Hero from "../../components/Hero/Hero"
import FeaturedSection from '../../components/FeaturedSection/FeaturedSection'
import Categories from "../../components/Categories/Categories"
import LatestPosts from "../../components/LatestPosts/LatestPosts"
import Subscribe from "../../components/Subscribe/Subscribe"

export default function Home() {
  return (
   <>
    <Hero/>
    <FeaturedSection />
    <Categories/>
    <LatestPosts/>
    <Subscribe/>
   </>
  )
}
