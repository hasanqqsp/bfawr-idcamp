import React from "react";
import { Row, Col } from "react-bootstrap";
import Navigation from "./Nav";

   
function NavNTitle ({isArchived,onNavigate}) {
    return (
        <Row className="mb-2">
            <Col><h2 className="text-nowrap">{isArchived ? "Archived Notes" : "Your Notes"}</h2></Col>
            <Col><Navigation onNavigate={onNavigate}/></Col>
        </Row> 
    )
}


export default NavNTitle