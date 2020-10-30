import React from 'react';
import './App.css';
import Contact from './components/Contact.js';
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'

export default class App extends React.Component{

  render(){
    return (
      <div className="App">   
        <Fullpage>
          <div className="header">
            <span 
              className='name'
            >Justin Zhao</span> 
            <div className='links'>
              <span 
                className='link'
              >ABOUT</span>
              <span 
                className='link'
              >PROJECTS</span>
              <span 
                className='link'
              >CONTACT</span>
            </div>
          </div>
          <FullPageSections >
            <FullpageSection style={{'display':'flex'}}>
              <p style={{'margin':'auto'}}>HOME</p>
            </FullpageSection>
            <FullpageSection style={{'display':'flex'}}>
              <p style={{'margin':'auto'}}>ABOUT</p>
            </FullpageSection>
            <FullpageSection style={{'display':'flex'}}>
              <p style={{'margin':'auto'}}>PROJECTS</p>
            </FullpageSection>
            <FullpageSection style={{'display':'flex'}}>
              <Contact />
            </FullpageSection>
          </FullPageSections>
        </Fullpage>
      </div>
    );   
  }
}