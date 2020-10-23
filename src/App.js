import React from 'react';
import './App.css';
import Header from './components/Header.js';
import ReactFullpage from '@fullpage/react-fullpage';

export default class App extends React.Component{

  

  render(){
    return (
      <div className="App">
        <Header />
        <ReactFullpage
          licenseKey = {'YOUR_KEY_HERE'}
          scrollingSpeed = {1000}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
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
                  <p>CONTACT</p>
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );   
  }
}