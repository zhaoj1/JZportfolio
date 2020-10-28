import React, {useState} from 'react';
import '../App.css';

function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div className="contact">
      <p>If you would like to reach out to me, please fill out the form below and I will get back to you ASAP!</p>
      <form>
        <label>Name: </label>
        <input name='name' value={name} onChange={(e) => setName(e.target.value)} /><br></br>
        <label>Email: </label>
        <input name='email' value={email} onChange={(e) => setEmail(e.target.value)} /><br></br>
        <label>Message: </label>
        <input name='message' type='text' value={message} onChange={(e) => setMessage(e.target.value)} />
      </form>

      <p>Otherwise, let's connect!</p>
      linkedin github
    </div>
  );
}

export default Contact;
