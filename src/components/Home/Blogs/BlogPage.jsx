import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React, { useEffect} from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import { StyledContainer } from '../../UI';


const BlogPage = ({posts}) => {
    let { blogId } = useParams();

    // const [posts, setPosts] = useState([]);
//   const [loaded, setLoaded] = useState(true)

    // useEffect(() => {
    //     client
    //       .getEntries()
    //       .then((response) => {setPosts(response.items); console.log(response.items); setLoaded(true)})
    //       .catch(console.error);
    //   }, []);

    useEffect(() => {
        window.scrollTo(0,0)
        
    }, [])

    const currentPost = posts.find(post => post.sys.id === blogId);
    // console.log(blogtitle)
    return (
        <StyledContainer>
            {/* {loaded ?  */}
            <><StyledHero src={currentPost.fields.hero.fields.file.url}/>
            <StyledHeading>{currentPost.fields.title}</StyledHeading>
            <StyledContent>{documentToReactComponents(currentPost.fields.content)}</StyledContent></> : <h1>Loading</h1>
             {/* } */}
        </StyledContainer>
    )
}

const StyledHero = styled.img`
    object-fit: cover;
    width: 80%;
    margin: 20px;
`;

const StyledHeading = styled.h1`
font-family: 'montserrat', sans-serif;
    color: white;
    font-size: 2.5rem;
    margin: 20px 40px;
`;

const StyledContent = styled.div`
line-height: 1.75rem;
font-family: 'montserrat', sans-serif;

    color: white;
    width: 80%;
`;

export default BlogPage
