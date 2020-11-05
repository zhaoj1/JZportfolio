import React from 'react';
import '../App.css';
import Tech from './Tech.js';

import react from '../assets/react.png'
import rails from '../assets/rails.png'
import photoshop from '../assets/Adobe_Photoshop_CC_icon.svg'
import django from '../assets/django.svg'
import git from '../assets/Git_icon.svg'
import npm from '../assets/Npm-logo.svg'
import javascript from '../assets/javascript.png'
import python from '../assets/python.png'
import html from '../assets/HTML5_logo_and_wordmark.svg'
import css from '../assets/CSS3_logo_and_wordmark.svg'
import mysql from '../assets/mysql.png'
import postgresql from '../assets/postgresql.svg'

const technologies = [
  {name: 'React.js', img: react},
  {name: 'Ruby on Rails', img: rails},
  {name: 'Photoshop', img: photoshop},
  {name: 'Django', img: django},
  {name: 'Git', img: git},
  {name: 'NPM', img: npm},
  {name: 'Javascript', img: javascript},
  {name: 'Python', img: python},
  {name: 'HTML5', img: html},
  {name: 'CSS', img: css},
  {name: 'MySQL', img: mysql},
  {name: 'PostgreSQL', img: postgresql},
]

function About() {

  return (
    <div className="about">
      <div className='tech-container'>
        {technologies.map(tech => 
          <Tech name={tech.name} img={tech.img} />    
        )}
        <p className='tech-familiar'>Familiarity with GIMP, Phaser3, Typescript</p>
      </div>
    </div>
  );
}

export default About;
