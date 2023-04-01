import {BrowserRouter} from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Landing from "./pages/Landing";
import Details from"./pages/Details";
import About from"./pages/About";



function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then(res => res.json())
      .then(data => setShows(data))
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Landing shows={shows}/>} />
        <Route path='/details/:id' element={<Details shows={shows} />} />
        <Route path='/about' exact element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
