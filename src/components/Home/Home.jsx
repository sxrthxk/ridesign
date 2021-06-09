import React from 'react'
import { StyledHR } from '../UI'
import WorkSamples from './WorkSamples'
import BrandDesc from './BrandDesc'
import ServicesHome from './ServicesHome'
import OurBrands from './OurBrands'
import Blogs from './Blogs/Blogs'

const Home = ({posts, blogAvailable}) => {
    return (
        <>
        <WorkSamples/>
        <BrandDesc/>
        <ServicesHome/>
        <OurBrands/>
        {/* <Blogs posts={posts} blogAvailable={blogAvailable}/> */}
        <StyledHR/>
        </>
    )
}

export default Home
