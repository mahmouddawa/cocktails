import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="error-page section">
      <div>
        <h1>oops! it is a dead end</h1>
        <Link to="/" className="btn btn-primary">
        Back Home
        </Link>
      </div>
      <h2>error page</h2>
    </section>
  )
}

export default Error
