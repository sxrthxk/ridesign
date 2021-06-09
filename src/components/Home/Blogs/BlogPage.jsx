import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import client from '../../../clients';
import { StyledContainer } from '../../UI';


const BlogPage = () => {
    let { blogtitle } = useParams();

    const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        client
          .getEntries()
          .then((response) => {setPosts(response.items); console.log(response.items); setLoaded(true)})
          .catch(console.error);
      }, []);

    const currentPost = posts.find(post => post.fields.title === blogtitle);
    console.log(blogtitle)
    return (
        <StyledContainer>
            {loaded ? <><StyledHero src={currentPost.fields.hero.fields.file.url}/>
            <StyledHeading>{currentPost.fields.title}</StyledHeading>
            <StyledContent>{documentToReactComponents(currentPost.fields.content)}</StyledContent></> : <h1>Loading</h1>}
        </StyledContainer>
    )
}

const StyledHero = styled.img`
    object-fit: cover;
    width: 80%;
    margin: 20px;
`;

const StyledHeading = styled.h1`
    color: white;
    font-size: 2.5rem;
    margin: 20px 40px;
`;

const StyledContent = styled.p`
    color: white;
`;

export default BlogPage
