import React from 'react'
import "./homepage.css"
import { Button, Form, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
  
 

    <Form className="form-signin container mt-5">
      <Image className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
      <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
      <Form.Group controlId="inputEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Email address" required autoFocus />
      </Form.Group>
      <Form.Group controlId="inputPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group controlId="rememberMe" className="checkbox mb-3">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <Link className='btn btn-primary' size="lg" block type="submit" to={"/products"}>
        Sign in
      </Link>
      <p className="mt-5 mb-3 text-muted">© 2023-2024</p>
    </Form>
      


    

       


     
      


 
    
   
  )
}

export default Homepage;