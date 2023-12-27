import React from 'react'
import { Image, Nav, NavDropdown, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const SignedOut = (props) => {
    return (
        <div>
            <Navbar className='auth' expand="sm">
                <Image
                    src="https://img.freepik.com/premium-psd/3d-cartoon-man-smiling-portrait-isolated-transparent-background-png-psd_888962-1569.jpg"
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