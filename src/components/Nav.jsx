import React from "react";
import { Nav } from "react-bootstrap";

function Navigation({onNavigate}){
    return (
        <Nav variant="pills" onSelect={onNavigate} defaultActiveKey="unarchived" className="justify-content-end flex-nowrap">
            <Nav.Item >
                <Nav.Link className="bg" eventKey="unarchived">Unarchived</Nav.Link>
            </Nav.Item>
            <Nav.Item bg="dark">
                <Nav.Link eventKey="archived">Archived</Nav.Link>
            </Nav.Item>    
        </Nav>
    )
}

export default Navigation