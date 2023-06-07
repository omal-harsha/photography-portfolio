import React from 'react';

//import component
import Header from './components/Header';
import AnimeRoutes from './components/AnimRoutes'

//import router
import {BrowserRouter as Router} from 'react-router-dom'

//import motion
import {motion} from 'framer-motion'

const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <AnimeRoutes/>
      </Router>
    </>
  );
};

export default App;