import React from 'react'
import NavBar from './NavBar';
import Banner from './Banner';
import { Outlet } from 'react-router-dom';

export default function View() {
  return (
    <>
        <NavBar/>
        <Banner />
        <Outlet/>
    </>
  )
}
