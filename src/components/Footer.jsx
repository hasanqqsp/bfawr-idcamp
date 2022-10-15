import React from "react";
import { Navbar, Container } from "react-bootstrap";
function Footer(){
    return (
        <footer>
                <Navbar bg="dark" variant="dark" className="app_footer">
                    <Container>
                    <Navbar.Text className="p-0" variant="dark">Notes App - 2022 &copy; Hasan Ismail Abdulmalik</Navbar.Text>
                    </Container>
                </Navbar>
            </footer>
    )
}

export default Footer