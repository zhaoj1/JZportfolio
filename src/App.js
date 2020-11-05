import React from 'react';
import './App.css';
import CustomControls from './components/CustomControls.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import { FullPage, Slide } from 'react-full-page';

export default class App extends React.Component{

  render(){
    return (
      <div className="App">   
        <FullPage controls={CustomControls}  >
            <Slide>
              <div className='slide-contents'>
                <Home/>
              </div>
            </Slide>
            <Slide>
              <div className='slide-contents'>
                <About />
              </div>
            </Slide>
            <Slide>
              <div className='slide-contents'>
                <p style={{'margin':'auto'}}>PROJECTS</p>
              </div>
            </Slide>
            <Slide>
              <div className='slide-contents'>
                <Contact />
              </div>
            </Slide>
        </FullPage>
      </div>
    );   
  }
}