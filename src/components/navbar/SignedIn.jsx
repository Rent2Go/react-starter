import React from 'react'
import { Button } from 'react-bootstrap'

export const SignedIn = (props) => {
  return (
    <div>
       
        
      <Button variant="primary" onClick={props.signedIn}>
      Login 
      </Button>
      <Button variant="primary" style={{ marginLeft: '1em' }} onClick={props.sgnedIn}>
       Sign In
      </Button>
  
        
        </div>
  )
}
