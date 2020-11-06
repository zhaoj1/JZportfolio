import React from 'react';

function CustomControls(props){

    return (
      <div className="header" >
        <div 
          className={props.getCurrentSlideIndex() == 0 ? 'selected-name' : 'name'}
          onClick={() => props.scrollToSlide(0)}
        >
          <p>Justin Zhao</p>
        </div> 
        <div className='links'>
          <div 
            className={props.getCurrentSlideIndex() == 1 ? 'selected-link' : 'link'}
            onClick={() => props.scrollToSlide(1)}
          >
            <p>ABOUT</p>
          </div>
          <div 
            className={props.getCurrentSlideIndex() == 2 ? 'selected-link' : 'link'}
            onClick={() => props.scrollToSlide(2)}
          >
            <p>PROJECTS</p>
          </div>
          <div 
            className={props.getCurrentSlideIndex() == 3 ? 'selected-link' : 'link'}
            onClick={() => props.scrollToSlide(3)}
          >
            <p>CONTACT</p>
          </div>
        </div>
      </div>
    )
}

export default CustomControls;
