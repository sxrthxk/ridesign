import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Services from "./components/Services";
import WhoWeAre from "./components/WhoWeAre";
import ContactUs from "./components/ContactUs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" children={Home} exact />
        <Route path="/ridesign" children={Home} exact />
        <Route path="/services" children={Services} />
        <Route path="/who-we-are" children={WhoWeAre} />
        <Route path="/contact-us" children={ContactUs} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
