import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
<div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container-fluid">
    <Link className="navbar-brand" to="/">CRUD APP</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

<div>
    <Link className="btn btn-outline-light" to='/adduser'>ADD USER</Link>
</div>

</div>
</nav>
</div>
  )
}

