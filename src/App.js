import React from "react";
import Navbar from "./components/Navbar";
import './App.css'
import WorkSamples from "./components/WorkSamples";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (<>
    <Navbar/>
    <WorkSamples/>
    {/* <CustomCarousel/> */}
   </>
  )
}

export default App;

