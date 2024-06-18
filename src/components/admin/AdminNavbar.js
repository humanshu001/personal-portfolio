import React from 'react'
import { Link } from 'react-router-dom'
import details from "../../assets/images/details.svg"
import resume from "../../assets/images/resume.svg"
import stats from "../../assets/images/stats.svg"
import skills from "../../assets/images/skills.svg"
import projects from "../../assets/images/projects.svg"

export default function AdminNavbar() {
  return (
    <>
        <nav className='d-flex flex-column' style={{backgroundColor:'var(--color-1)',width:'90px',height:'96.9vh',borderRadius:'10px',margin:'15px'}}>      
            <Link className='m-auto text-decoration-none' to='/'><h1 className='m-auto fs-1' style={{fontWeight:'900',position:'relative',color:'var(--color-5)'}}>HJ</h1></Link>
            <div className="m-auto d-flex justify-content-evenly flex-column" style={{height:'70vh'}}>
                <Link to="/admin/details"><img style={{width:'35px'}} src={details} alt="" /></Link>
                <Link to="/admin/projects"><img style={{width:'35px'}} src={projects} alt="" /></Link>
                <Link to="/admin/resume"><img style={{width:'35px'}} src={resume} alt="" /></Link>
                <Link to="/admin/stats"><img style={{width:'35px'}} src={stats} alt="" /></Link>
                <Link to="/admin/skills"><img style={{width:'35px'}} src={skills} alt="" /></Link>
            </div>
        </nav>
    </>
  )
}
