import React, { Suspense } from 'react'
import { StyledContainer, StyledHR } from '../UI'
import WorkSamples from './WorkSamples'
import BrandDesc from './BrandDesc'
import ServicesHome from './ServicesHome'
import OurBrands from './OurBrands/OurBrands'
import Counter from '../Counter'
import Loader from 'react-loader-spinner'

const Blogs = React.lazy(() => import('./Blogs/Blogs'))

const Home = ({ posts, blogAvailable }) => {
    return (
        <>
            <WorkSamples />
            <BrandDesc />
            <ServicesHome />
            <OurBrands />
            <Suspense fallback={<Loader type="Puff" color="white"/>}>
            <Blogs posts={posts} blogAvailable={blogAvailable} />
            </Suspense>
            {/* <StyledTop onClick={window.scrollTo(0,0)}/> */}
            {/* <BackToTop/> */}
            <StyledContainer>
            <Counter/>  
            </StyledContainer>
            <StyledHR />
        </>
    )
}

export default Home
