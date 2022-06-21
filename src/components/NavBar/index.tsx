import React from 'react'
import NavButton from './components/NavButton'
import Title from './components/Title'
import './styles.css'

export default function NavBar() {
  return (
    <div className="navbar">
        <Title />
        <NavButton title="about me" />
        <NavButton title="projects"/>
    </div>
  )
}
