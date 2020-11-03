import React from 'react';
import { FullPage } from 'react-full-page';

export default class App extends React.Component{

  render(){
    return (
      <div className="header" >
        <span 
          className='name'
          onClick={() => this.props.scrollToSlide(0)}
        >Justin Zhao</span> 
        <div className='links'>
          <span 
            className='link'
            onClick={() => this.props.scrollToSlide(1)}
          >ABOUT</span>
          <span 
            className='link'
            onClick={() => this.props.scrollToSlide(2)}
          >PROJECTS</span>
          <span 
            className='link'
            onClick={() => this.props.scrollToSlide(3)}
          >CONTACT</span>
        </div>
      </div>
    )
  }
}