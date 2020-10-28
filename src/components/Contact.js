import React, {useState} from 'react';
import '../App.css';
import github from '../assets/GitHub-Mark-120px-plus.png'
import linkedin from '../assets/LI-In-Bug.png'

function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div className="contact">
      <p>If you would like to reach out to me, please shoot me an email at <a href={`mailto:justinzhao265@gmail.com`} > justinzhao265@gmail.com</a> and I will get back to you ASAP!</p>
      <p>Otherwise, let's connect!</p>
      <a href='https://www.linkedin.com/in/justin-zh/' target="_blank">
        <img src={linkedin} height='50' ></img>  
      </a>
      <a href='https://github.com/zhaoj1' target="_blank">
        <img src={github} height='50' ></img>  
      </a>
    </div>
  );
}

export default Contact;
