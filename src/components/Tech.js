import React from 'react';
import '../App.css';

function Tech(props) {

  return (
    <div className="tech">
      <img className='tech-img' src={props.img} alt={props.name} height={100} width={100} />
      <h3 className='tech-name' >{props.name}</h3>
    </div>
  );
}

export default Tech;
