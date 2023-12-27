import React from 'react'
import { Image, Nav, NavDropdown, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import seyhmusImage from '../../assets/seyhmus.jpg';


const SignedOut = (props) => {
    return (
        <div>
            <Navbar className='auth' expand="sm">
                <Image
                    src={seyhmusImage}
                    roundedCircle
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Profile Avatar"
                />

                <NavbarToggle aria-controls="basic-navbar-nav" />
                <NavbarCollapse id="basic-navbar-nav">
                    <Nav className="ml-5 ">
                        <NavDropdown title="Şeyhmus" id="basic-nav-dropdown">
                            <NavDropdown.Item> <Link onClick={props.signedOut}>Çıkış Yap</Link></NavDropdown.Item>
                            <NavDropdown.Item>Bilgilerim</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </NavbarCollapse>
            </Navbar>

        </div>
    )
}

export default SignedOut