import React from 'react';
import '../App.css';
import ProjectCard from './ProjectCard.js';

const projects = [
  {
    name:'BookLogging',
    description:'BookLogging is a book tracking app that tracks and provides analytics on reading progress.',
    languages: ['React', 'Django'],
    link:'https://zhaoj1.github.io/book-logging/#/',
    imgs: 'img1'
  },
  {
    name:'BetterThingsToDo',
    description:'Venue recommender that takes into account two addresses and finds venues that are located between them for meetups.',
    languages: ['React', 'Rails'],
    link:'https://better-things-to-do.surge.sh/',
    imgs: 'img2'
  },
  {
    name:'Fantasy Redraw',
    description:'Simple card game with a limited deck to facilitate strategic selection of cards.',
    languages: ['React'],
    link:'https://zhaoj1.github.io/FantasyRedraw/',
    imgs: 'img2'
  }
]

function Projects() {

  return (
    <div className="projects">
      <div className='projects-container'>
        {projects.map(proj => 
          <ProjectCard proj={proj} />  
        )}
      </div>
    </div>
  );
}

export default Projects;
