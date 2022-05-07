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
    console.log(user);
    
    return (
        <Navbar sticky="top" className='py-4' collapseOnSelect expand="lg" bg="light" variant="light">
        <Container fluid className='px-5'>
            <Navbar.Brand style={{letterSpacing:"6px"}} className='fs-3 fw-bold text-primary me-5' as={Link} to='/' >BIKERS WAREHOUSE</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link className='text-dark' as={Link} to="/blogs">Blogs</Nav.Link>
                    {
                        user
                        ?
                        <Nav className='me-auto'>
                            <Nav.Link className='text-dark' as={Link} to="/inventories">Manage Inventory</Nav.Link>
                            <Nav.Link className='text-dark' as={Link} to="/addItem">Add Items</Nav.Link>
                            <Nav.Link className='text-dark' as={Link} to="/myitems">My Items</Nav.Link>
                        </Nav>
                        :
                        ""
                    }
                </Nav>
                <Nav>
                 
                {
                    user
                    ? 
                    <Nav className='me-auto'>
                        <Nav.Link className='text-dark fs-5 me-5' onClick={handleSignOut} style={{display:"inline-block"}} as={Link} to='/login'>Sign Out</Nav.Link>
                        
                        <img width="50px" className='rounded-circle' src={user.photoURL} alt="" />
                         <Nav.Link className='text-dark fs-5' eventKey={2} href="#memes">
                            {user.displayName}
                        </Nav.Link>
                    </Nav>
                    :
                    <Nav className='me-auto'>
                        <Nav.Link style={{display:"inline-block"}} as={Link} to='/login'>Login</Nav.Link>
                        <Nav.Link style={{display:"inline-block"}} as={Link} to='/registration'>Registration</Nav.Link>
                    </Nav>
                }

                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default Header;