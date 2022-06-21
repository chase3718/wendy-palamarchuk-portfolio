import React from 'react'

interface ParentProps {
  title: string;
}

export default function NavButton({title}: ParentProps) {
  return (
    <div className="nav-button-container">{title}</div>
  )
}
