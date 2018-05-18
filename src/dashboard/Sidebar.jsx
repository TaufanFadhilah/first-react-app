import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({ match }) => {
  return (
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link className="nav-link active" to='/dashboard/profile'>Profile</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/dashboard/land'>Land</Link>
      </li>
    </ul>
  )
}

export default Sidebar
