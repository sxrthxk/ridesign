import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Services from "./components/Services";
import WhoWeAre from "./components/WhoWeAre";
import ContactUs from "./components/ContactUs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogPage from "./components/Home/Blogs/BlogPage";
import client from "./clients";
import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   client
  //     .getEntries()
  //     .then((response) => setPosts(response.items))
  //     .catch(console.error);
  // }, []);
  return (
    <Router>
      <div className="root-div">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home posts={posts} />
          </Route>
          <Route path="/ridesign" children={Home} exact />
          <Route path="/services" children={Services} />
          <Route path="/who-we-are" children={WhoWeAre} />
          <Route path="/contact-us" children={ContactUs} />
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
