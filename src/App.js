import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Services from "./components/Services";
import AboutUs from './components/AboutUs'
import ContactUs from "./components/ContactUs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogPage from "./components/Home/Blogs/BlogPage";
import client from "./clients";
import { useState, useEffect } from "react";

function App() {
  const posts = [];
  // const [posts, setPosts] = useState([]);
  const [blogAvailable, setBlogAvailable] = useState(false);
  // useEffect(() => {
  //   client
  //     .getEntries()
  //     .then((response) => {setPosts(response.items); console.log(response.items); setBlogAvailable(true)})
  //     .catch(console.error);
  // }, []);
  const loadHandler = () => {
    console.log("loaded");
  };

  useEffect(() => {
    window.addEventListener("load", loadHandler);
    return () => {
      window.removeEventListener("load", loadHandler);
    };
  }, []);
  return (
    <Router>
      <div className="root-div">
        <Navbar />
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
          <Route path="/services" children={Services} />
          <Route path="/about-us" children={AboutUs} />
          <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route path="/blogs/:blogtitle">
            <BlogPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
