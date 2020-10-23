import React from 'react';
import './App.css';
import Header from './components/Header.js';
import ReactFullpage from '@fullpage/react-fullpage';

export default class App extends React.Component{

  return (){
    <div className="App">
      <Header />
      <ReactFullpage
        licenseKey = {'YOUR_KEY_HERE'}
        scrollingSpeed = {1000}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <p>Section 1 (welcome to fullpage.js)</p>
                <button onClick={() => fullpageApi.moveSectionDown()}>
                  Click me to move down
                </button>
              </div>
              <div className="section">
                <p>Section 2</p>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  };   
}