import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    const closeNav = () => {
        document.querySelector('.navbar-collapse').classList.remove('show')
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{backgroundColor:'var(--color-1)'}}>
                <div className="container-fluid">
                    <a className="navbar-brand mx-2 mb-0" href="/"><h1 className='mb-0' style={{fontWeight:'900',position:'relative'}}>HJ</h1></a>
                    <div className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" style={{border:"none",outline:'none',"&:active": { oultline: "none" },margin:'0'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="var(--color-4)" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav m-auto">
                            <Link onClick={closeNav} className="nav-link mx-4" to="/">HOME</Link>
                            <Link onClick={closeNav} className="nav-link mx-4" to="/projects">PROJECTS</Link>
                            <Link onClick={closeNav} className="nav-link mx-4" to="/resume">RESUME</Link>
                            <Link onClick={closeNav} className="nav-link mx-4" to="/stats">STATS</Link>
                            <Link onClick={closeNav} className="nav-link mx-4" to="/skills">SKILLS</Link>
                            <Link onClick={closeNav} className="nav-link mx-4" to="/contact">CONTACT</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
