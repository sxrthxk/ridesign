import React from 'react'
import { StyledHR } from '../UI'
import WorkSamples from './WorkSamples'
import BrandDesc from './BrandDesc'
import ServicesHome from './ServicesHome'
import OurBrands from './OurBrands/OurBrands'
import Blogs from './Blogs/Blogs'


const Home = ({ posts, blogAvailable }) => {
    return (
        <>
            <WorkSamples />
            <BrandDesc />
            <ServicesHome />
            <OurBrands />
            <Blogs posts={posts} blogAvailable={blogAvailable} />
            {/* <StyledTop onClick={window.scrollTo(0,0)}/> */}
            {/* <BackToTop/> */}
            <StyledHR />
        </>
    )
}

export default Home
