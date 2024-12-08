import React from 'react'
import dbBuilderImage from '../assets/images/db-builder.png';
import flexiformsImage from '../assets/images/flexiforms.png';
import innovationForgeImage from '../assets/images/innovation-forge.png';
import psychometricImage from '../assets/images/psychometric.png';
import whiteboardImage from '../assets/images/whiteboard.png';

export default function Projects() {

  const projects = [
    {
      name: 'FlexiForms',
      description: 'FlexiForms is a dynamic platform that empowers individuals and teams to create custom forms, collect data in real-time, and analyze insights instantly. Whether for feedback, surveys, registration, or data collection, FlexiForms’s tools make the process easy and effective.',
      link: 'https://flexiforms.vercel.app',
      image: flexiformsImage,
    },
    {
      name: 'DB Builder',
      description: 'The Database Builder is a powerful tool that allows users to easily create and visualize SQL databases. Additionally, users can define relationships between tables, such as primary and foreign keys, which are visualized in the interface.',
      link: 'https://db-builder.vercel.app',
      image: dbBuilderImage,
    },
    {
      name: 'Whiteboard',
      description: 'Whiteboard is a collaborative drawing application that allows users to create and export drawings. Users can draw on a canvas and create shapes, and lines. Additionally, users can export their drawings as images.',
      link: 'https://whiteboard-two-weld.vercel.app',
      image: whiteboardImage,
    },
    {
      name: 'Innovation Forge',
      description: 'Innovation Forge Platform simplifies event management for Geeta University’s CSE club, enabling participants to register and pay using Razorpay. It also features an analysis panel for tracking and visualizing participant data across events.',
      link: 'https://playground.softricity.in',
      image: innovationForgeImage,
    },
    {
      name: 'Psychometric Assessment Platform',
      description: 'The Psychometric Assessment Platform is a tool that allows users to take online assessments and receive instant feedback. The platform is designed to help users understand their personality traits and career interests.',
      link: 'https://psychometric-geeta.vercel.app',
      image: psychometricImage,
    },
    
  ]


  return (
    <>
        <div className="row resume m-3 pb-3" style={{backgroundColor:'var(--color-1)',borderRadius:'20px'}}>
            <div className="col-12 text-center">
            <h1 className='my-4' style={{color:'var(--color-6)',fontWeight:'900',fontSize:'55px'}}>My Projects</h1>
            </div>
            <div className="row d-flex justify-content-center flex-wrap m-auto">
              {
                projects.map((project)=>{
                  return (
                    <div key={project.name} className="card px-0 m-2" style={{width: '20rem', backgroundColor: 'var(--color-2)',borderRadius:'20px',overflow:'hidden'}}>
                        <img src={project.image} className="card-img-top w-full" alt="..." />
                      <div className="card-body d-flex flex-column justify-content-between">
                        <h5 className="card-title text-center mb-3" style={{fontSize:'25px', fontWeight:'700',color:'var(--color-6)'}}>{project.name}</h5>
                        <p className="card-text text-center" style={{color:'var(--color-5)'}}>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noreferrer" className="btn" style={{border:'2px solid var(--color-6)',color:'black'}}>View Live <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg></a>
                      </div>
                    </div>
                  )
                })
              }
            </div>
        </div>
    </>
  )
}
