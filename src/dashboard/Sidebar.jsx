import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({ user }) => {
  return (
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link className="nav-link active" to={{pathname: '/dashboard/profile', state: {user}}}>Profile</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={{pathname: '/dashboard/land', state: {user}}}>Land</Link>
      </li>
    </ul>
  )
}

export default Sidebar
