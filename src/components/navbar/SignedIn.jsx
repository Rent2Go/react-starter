import React from 'react'
import { Button } from 'react-bootstrap'
import Homepage from '../../pages/homepage/Homepage'
import { Link } from 'react-router-dom'

export const SignedIn = (props) => {
  return (
    <div>
       
        
      <Button variant="primary" onClick={props.signedIn}>
      Login 
      </Button>
      <Link className='btn btn-primary' style={{ marginLeft: '1em' }} to = {"/homePage"}>
       Sign In
      </Link>
  
        
        </div>
  )
}
