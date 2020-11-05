import React from 'react';

function CustomControls(props){

    return (
      <div className="header" >
        <span 
          // className='name'
          className={props.getCurrentSlideIndex() == 0 ? 'selected-name' : 'name'}
          onClick={() => props.scrollToSlide(0)}
        >Justin Zhao</span> 
        <div className='links'>
          <span 
            className='link'
            onClick={() => props.scrollToSlide(1)}
          >ABOUT</span>
          <span 
            className='link'
            onClick={() => props.scrollToSlide(2)}
          >PROJECTS</span>
          <span 
            className='link'
            onClick={() => props.scrollToSlide(3)}
          >CONTACT</span>
        </div>
      </div>
    )
}

export default CustomControls;
