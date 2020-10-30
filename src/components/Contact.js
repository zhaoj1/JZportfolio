import React, {useRef} from 'react';
import '../App.css';
import github from '../assets/GitHub-Mark-120px-plus.png'
import linkedin from '../assets/LI-In-Bug.png'

function Contact() {

  // function copyToClipboard(){
  //   textAreaRef.current.select()
  //   document.execCommand('copy')
  // }

  return (
    <div className="contact">
      <p>If you would like to reach out to me, please shoot me an email at 
        <a 
          id='email' 
          href={`mailto:justinzhao265@gmail.com`} 
          value='justinzhao265@gmail.com'
        > justinzhao265@gmail.com</a>
        {/* <button onClick={copyToClipboard}>copy</button> */}
         and I will get back to you ASAP!
      </p>
      <p>Otherwise, let's connect!</p>
      <div className='contact-links-container'>
        <a href='https://www.linkedin.com/in/justin-zh/' target="_blank" className='contact-links' rel="noopener noreferrer" >
          <img src={linkedin} height='80' alt='LinkedIn' ></img>  
        </a>
        <a href='https://github.com/zhaoj1' target="_blank" className='contact-links' rel="noopener noreferrer" >
          <img src={github} height='80' alt='GitHub' ></img>  
        </a>
      </div>
    </div>
  );
}

export default Contact;
