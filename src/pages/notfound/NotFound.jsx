import React from 'react'
import { Link } from 'react-router-dom'
import { Path } from '../../utils/path'; 
export default function NotFound() {
  return (
    <div>
      <h1>Not found </h1>
      <p> The page u are looking for does not exist</p>
<Link to={Path.Home}>Go back to home page </Link>
    </div>
  )
}
