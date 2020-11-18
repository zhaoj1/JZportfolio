import React from 'react';
import './App.css';
import CustomControls from './components/CustomControls.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Projects from './components/Projects.js';
import { FullPage, Slide } from 'react-full-page';

function App(){

  return (
    <div className="App">   
      <FullPage 
        controls={CustomControls} 
        duration={1450}
      >
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
              <Projects />
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

export default App;