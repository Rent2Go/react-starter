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
      <Button variant="primary" className='btn btn-primary' style={{ marginLeft: '1em' }} >
        <Link to={"/homePage"}>
          Sign In
        </Link>

      </Button>


    </div>
  )
}
