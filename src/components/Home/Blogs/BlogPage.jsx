import React from 'react'
import { useParams } from 'react-router-dom'

const BlogPage = () => {
    let { blogtitle } = useParams();
    return (
        <h1 style={{color: 'white'}}>
            Blog {blogtitle}
        </h1>
    )
}

export default BlogPage
