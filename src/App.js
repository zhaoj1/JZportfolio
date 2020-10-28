import React from 'react';
import './App.css';
import Contact from './components/Contact.js';
import ReactFullpage from '@fullpage/react-fullpage';

export default class App extends React.Component{

  render(){
    return (
      <div className="App">
        <ReactFullpage
          scrollingSpeed = {1000}
          fixedElements =  '.header'
          anchors={['','about','projects', 'contact']}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="header">
                  <span 
                    className='name'
                    onClick={() => fullpageApi.moveTo('')}
                  >Justin Zhao</span> 
                  <div className='links'>
                    <span 
                      className='link'
                      onClick={() => fullpageApi.moveTo('about')}
                    >ABOUT</span>
                    <span 
                      className='link'
                      onClick={() => fullpageApi.moveTo('projects')}
                    >PROJECTS</span>
                    <span 
                      className='link'
                      onClick={() => fullpageApi.moveTo('contact')}
                    >CONTACT</span>
                  </div>
                </div>
                <div className="section">
                  <p>HOME</p>
                </div>
                <div className="section">
                  <p>ABOUT</p>
                </div>
                <div className="section">
                  <p>PROJECTS</p>
                </div>
                <div className="section">
                  <Contact />
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );   
  }
}