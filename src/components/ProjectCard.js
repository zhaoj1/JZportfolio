import React from 'react';
import '../App.css';

function Project_Card(props) {

  return (
    <div className="project-card">
      <p>{props.proj.name}</p>
      <p>{props.proj.imgs}</p>
      {props.proj.languages.map(ele =>
        <label>{ele}</label>
      )}
      <p>{props.proj.description}</p>
      <p>{props.proj.link}</p>
    </div>
  );
}

export default Project_Card;
