/* eslint-disable */
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import ContactUs from './containers/ContactUs';
import Post from './containers/Post';
import Posts from './containers/Posts';
import AboutUs from './containers/AboutUs';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Route path="/" exact component={Home}/>
        <Route path="/contact-us" exact component={ContactUs} />
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/posts" exact component={Posts} />
        <Route path="/post/:postId" exact component={Post} />
      </div>
    </Router>
    
  );
}

export default App;
