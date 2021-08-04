import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
// import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import client from "./clients";
import { useState, useEffect } from "react";
import Cursor from "./components/Cursor";
import FAB from "./components/FAB/FAB";
import FormProvider from "./components/ContactUsContext";
import Loader from "react-loader-spinner";
// import ContactUs from './components/ContactUs'
import styled from "styled-components";

function App() {
  const Home = React.lazy(() => import("./components/Home"))
  const AboutUs = React.lazy(() => import('./components/AboutUs'))
  const Services = React.lazy(() => import('./components/Services'))
  const Blogs = React.lazy(() => import("./components/Home/Blogs/Blogs"));
  const BlogPage = React.lazy(() => import("./components/Home/Blogs/BlogPage"));
  const ContactUs = React.lazy(() => import("./components/ContactUs"))


  const [posts, setPosts] = useState([]);
  const [blogAvailable, setBlogAvailable] = useState(false);
  useEffect(() => {
    client
      .getEntries()
      .then((response) => {setPosts(response.items);
        //  console.log(response.items); 
         setBlogAvailable(true)})
      .catch(console.error);
  }, []);

  // ---------------------------------- LOADING LOGIC -------------------------------------

  // const [loading, setLoading] = useState(true)

  // function onLoadHandler() {
  //   console.log('Loaded Success');
  //   setLoading(false)
  // }
  useEffect(() => {
    window.addEventListener("load", () => {
      // console.log("Loaded")
    })
    
  }, [])

  // --------------------------------------------------------------------------------------
  return (
    // loading ? <StyledLoader>Loading</StyledLoader> :
    <Router>
      <div className="root-div">
        <Navbar />
        <Suspense fallback={<StyledLoaderWrapper><Loader type="Puff" color="white"/></StyledLoaderWrapper>}>
        <Switch>
          <Route path="/" exact>
            <Home posts={posts} />
          </Route>
          <Route path="/ridesign" exact>
            <Home
              posts={posts}
              blogAvailable={blogAvailable}
            />
          </Route>
          <Route path="/services"><Services/></Route>
          <Route path="/about-us"><AboutUs/></Route>
          <Route path="/contact-us">
            <FormProvider>
            <ContactUs />
            </FormProvider>
          </Route>
          <Route path="/blogs/:blogId">
            <BlogPage posts={posts}/>
          </Route>
          <Route path="/blogs">
            <Blogs posts={posts}/>
          </Route>
        </Switch>
        </Suspense>
        <Footer />
        <FAB/>
      </div>
        <Cursor/>
    </Router>
  );
}

const StyledLoaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default App;
