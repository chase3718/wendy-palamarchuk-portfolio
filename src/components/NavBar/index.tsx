import React, { useEffect, useState } from 'react'
import NavButton from './components/NavButton'
import Title from './components/Title'
import './styles.css'
import $ from 'jquery';

export default function NavBar() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  return (
    <div className="navbar">
      <NavButton className="title" title="Wendy Palamarchuk" pathTo='/aboutMe' />
      <NavButton className="navigation" title="about me" pathTo="/aboutMe" />
      <NavButton className="navigation" title="projects" pathTo="/projects" />
    </div>
  )
}
