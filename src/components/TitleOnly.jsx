import React from "react";
import { Row, Col } from "react-bootstrap";

function TitleOnly ({title}) {
    return (
        <Row className="mb-2">
            <Col><h2>{title}</h2></Col>
        </Row> 
    )
}

export default TitleOnly