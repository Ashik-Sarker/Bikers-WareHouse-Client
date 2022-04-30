import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth);
        navigate('/login');
    }
    
    return (
        <Navbar sticky="top" className='py-4' collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
            <Navbar.Brand style={{letterSpacing:"6px"}} className='fs-2 fw-bold text-primary' as={Link} to='/' >BIKERS WAREHOUSE</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#features">Best Selling Products</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                 
                {
                    user
                    ? 
                    <div> 
                        <button className='border-0 bg-light' onClick={handleSignOut}>Manage Items</button>
                        <button className='border-0 bg-light' onClick={handleSignOut}>Add Items</button>
                        <button className='border-0 bg-light' onClick={handleSignOut}>My Items</button>
                        <button className='border-0 bg-primary text-light rounded py-2 px-3' onClick={handleSignOut}>Signout</button>
                    </div>
                    :
                    <div>
                        <Nav.Link style={{display:"inline-block"}} as={Link} to='/login'>Login</Nav.Link>
                        <Nav.Link style={{display:"inline-block"}} as={Link} to='/registration'>Registration</Nav.Link>
                    </div>
                }

                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default Header;