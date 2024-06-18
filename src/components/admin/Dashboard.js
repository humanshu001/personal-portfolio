import React from 'react'
import AdminNavbar from './AdminNavbar'
import { Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <>
        <div className="d-flex" style={{boxSizing:'border-box'}}>
        <AdminNavbar/>

          <Outlet/>
            
        </div>
    </>
  )
}
