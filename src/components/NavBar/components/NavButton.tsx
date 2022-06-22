import React from 'react'
import { Link } from 'react-router-dom';

interface ParentProps {
  title: string;
  pathTo: string;
  className: string;
}

export default function NavButton({ title, pathTo, className }: ParentProps) {
  return (
    <div className={"nav-button-container " + className}>
      <Link to={pathTo}>
        {title}
      </Link>
    </div>
  )
}
