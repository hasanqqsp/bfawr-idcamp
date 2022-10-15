import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header(){
    
    return (
        <header>
                <Navbar bg="dark" variant="dark" className="app_header">
                    <Container>
                    <Navbar.Brand className="fs-5 fw-bold">Notes App</Navbar.Brand>
                    </Container>
                </Navbar>
            </header>
    )
}

export default Header