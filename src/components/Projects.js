import React from 'react'
import { useState } from 'react';

export default function Projects() {

  const url = "https://api.github.com/users/humanshu001/repos";

  const [repos, setRepos] = useState([]);

  fetch(url)
  .then(response => response.json())
  .then(data => setRepos(data));


  return (
    <>
        <div className="row resume m-3" style={{backgroundColor:'var(--color-1)',borderRadius:'5px'}}>
            <div className="col-12 text-center">
            <h1 className='my-4' style={{color:'var(--color-6)',fontWeight:'900',fontSize:'55px'}}>My Repositories</h1>
            </div>
            <div className="repos row d-flex justify-content-center m-auto">
              {repos.map((repo) => {
                return (
                  repo.visibility === 'public' && repo.name !== 'humanshu001' &&repo.name !== 'prograund_frontend' &&repo.name !== 'Bot-for-ProGraund' && repo.name !== 'Full-Stack-Web-Development-Course' &&
               <div className="card m-3 d-flex flex-column justify-content-between" style={{width: '18rem',backgroundColor: 'var(--color-2)',border: 'none',margin: '10px',padding:'20px'}}>
                <p style={{color:'var(--color-3)',fontSize:"19px",fontWeight:500}}>{repo.name}</p>
                <p style={{color:'var(--color-5)',fontSize:'13px'}}>{repo.description}</p>
                <p className='d-flex align-items-center' style={{color:'grey',fontSize:'16px'}}><svg style={{marginRight:'8px',fill:'var(--color-3)'}} xmlns="http://www.w3.org/2000/svg" width="18" height="17" fill="#ffff00" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg> {repo.stargazers_count}</p>
               </div>
                  
                )
              })
              }
              {/* <div className="card m-3" style={{width: '18rem',backgroundColor: 'var(--color-2)',border: 'none',margin: '10px'}}>
                <div className="card-img-top" style={{borderBottom:'2px solid var(--color-1)'}}>
              <img className='w-100 m-auto mx-2 mb-3' src="https://github-readme-stats.vercel.app/api/pin/?username=humanshu001&repo=101-Hello-World-Programs&bg_color=282c34&hide_border=true" alt="" />

                </div>
                <div className="card-body">
                  <h4 style={{color: 'var(--color-5)',}}>
                    101 Hello World Programs
                  </h4>
                  <p style={{color: 'var(--color-3)',}}>
                    This repository aims to provide a collection of 101 Hello World Programs in different files with different extensions.
                  </p>
                </div>
              </div>
              <div className="card m-3" style={{width: '18rem',backgroundColor: 'var(--color-2)',border: 'none',margin: '10px'}}>
                <div className="card-img-top" style={{borderBottom:'2px solid var(--color-1)'}}>
              <img className='w-100 m-auto mx-2 mb-3' src="https://github-readme-stats.vercel.app/api/pin/?username=TheKaushikGoswami&repo=Interschool-Registration&bg_color=282c34&hide_border=true" alt="" />

                </div>
                <div className="card-body">
                  <h4 style={{color: 'var(--color-5)',}}>
                    Interschool Registration
                  </h4>
                  <p style={{color: 'var(--color-3)',}}>
                  A web-based system for managing an inter-school competition with Live Leaderboard feature. Created for Geeta University's Interschool Dance, Singing & Declamation Competition 2023.
                  </p>
                </div>
              </div>
              <div className="card m-3" style={{width: '18rem',backgroundColor: 'var(--color-2)',border: 'none',margin: '10px'}}>
                <div className="card-img-top" style={{borderBottom:'2px solid var(--color-1)'}}>
                <img className='w-100 m-auto mx-2 mb-3' src="https://github-readme-stats.vercel.app/api/pin/?username=TheKaushikGoswami&repo=Geeta-Law-College-Revamp&bg_color=282c34&hide_border=true" alt="" />

                </div>
                <div className="card-body">
                  <h4 style={{color: 'var(--color-5)',}}>
                    Geeta Law College Revamp
                  </h4>
                  <p style={{color: 'var(--color-3)',}}>
                  A complete revamp of Geeta Law College's official website. The project includes a complete redesign of the website with new features and a new look.
                  </p>
                </div>
              </div>
              <div className="card m-3" style={{width: '18rem',backgroundColor: 'var(--color-2)',border: 'none',margin: '10px'}}>
                <div className="card-img-top" style={{borderBottom:'2px solid var(--color-1)'}}>
              <img className='w-100 m-auto mx-2 mb-3' src="https://github-readme-stats.vercel.app/api/pin/?username=humanshu001&repo=blog-post&bg_color=282c34&hide_border=true" alt="" />
                </div>
                <div className="card-body">
                  <h4 style={{color: 'var(--color-5)',}}>
                    Blog Post
                  </h4>
                  <p style={{color: 'var(--color-3)',}}>
                  A simple blogging site with anonymous blog upload feature, comment & reply feature. The site is created using Bootstrap, PHP and MySQL.
                  </p>
                </div>
              </div>
              <div className="card m-3" style={{width: '18rem',backgroundColor: 'var(--color-2)',border: 'none',margin: '10px'}}>
                <div className="card-img-top" style={{borderBottom:'2px solid var(--color-1)'}}>
                  <img className='w-100 m-auto mx-2 mb-3' src="https://github-readme-stats.vercel.app/api/pin/?username=humanshu001&repo=Mess-Rating&bg_color=282c34&hide_border=true" alt="" />
                </div>
                <div className="card-body">
                  <h4 style={{color: 'var(--color-5)',}}>
                    Mess Rating
                  </h4>
                  <p style={{color: 'var(--color-3)',}}>
                  A simple web-based system for rating the mess food. The system allows students to rate the food and also admin can view the ratings given by other students.
                  </p>
                </div>
              </div>
              <div className="card m-3" style={{width: '18rem',backgroundColor: 'var(--color-2)',border: 'none',margin: '10px'}}>
                <div className="card-img-top" style={{borderBottom:'2px solid var(--color-1)'}}>
                <img className='w-100 m-auto mx-2 mb-3' src="https://github-readme-stats.vercel.app/api/pin/?username=TheKaushikGoswami&repo=Quiz-System&bg_color=282c34&hide_border=true" alt="" />
                </div>
                <div className="card-body">
                  <h4 style={{color: 'var(--color-5)',}}>
                    Quiz Management System
                  </h4>
                  <p style={{color: 'var(--color-3)',}}>
                  A web-based system for managing quizzes. The system allows teachers to create quizzes and students to participate in the quizzes. The system also provides a feature to view the results of the quizzes, random questions, and more.
                  </p>
                </div>
              </div>
              <div className="card m-3" style={{width: '18rem',backgroundColor: 'var(--color-2)',border: 'none',margin: '10px'}}>
                <div className="card-img-top" style={{borderBottom:'2px solid var(--color-1)'}}>
                <img className='w-100 m-auto mx-2 mb-3' src="https://github-readme-stats.vercel.app/api/pin/?username=humanshu001&repo=personal-portfolio&bg_color=282c34&hide_border=true" alt="" />
                </div>
                <div className="card-body">
                  <h4 style={{color: 'var(--color-5)',}}>
                    Personal Portfolio
                  </h4>
                  <p style={{color: 'var(--color-3)',}}>
                    My personal portfolio website. The website is created using ReactJS and Bootstrap. The website is responsive and mobile-friendly.
                  </p>
                </div>
              </div>
              <div className="card m-3" style={{width: '18rem',backgroundColor: 'var(--color-2)',border: 'none',margin: '10px'}}>
                <div className="card-img-top" style={{borderBottom:'2px solid var(--color-1)'}}>
                <img className='w-100 m-auto mx-2 mb-3' src="https://github-readme-stats.vercel.app/api/pin/?username=humanshu001&repo=My-Old-Portfolio&bg_color=282c34&hide_border=true" alt="" />
                </div>
                <div className="card-body">
                  <h4 style={{color: 'var(--color-5)',}}>
                    Old Portfolio
                  </h4>
                  <p style={{color: 'var(--color-3)',}}>
                    My Old Portfolio website. The website is created using HTML, CSS, and JavaScript. The website is responsive and mobile-friendly.
                  </p>
                </div>
              </div> */}

              
              
              
            </div>
        </div>
    </>
  )
}
