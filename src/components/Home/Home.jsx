import React from 'react'
import { StyledHR } from '../UI'
import WorkSamples from './WorkSamples'
import BrandDesc from './BrandDesc'
import ServicesHome from './ServicesHome'
import OurBrands from './OurBrands'
import Blogs from './Blogs'

const Home = () => {
    return (
        <>
        <WorkSamples/>
        <StyledHR/>
        <BrandDesc/>
        <StyledHR/>
        <ServicesHome/>
        <StyledHR/>
        <OurBrands/>
        <StyledHR/>
        <Blogs/>
        <StyledHR/>
        </>
    )
}

export default Home
