import React from "react"
import {Col, Card} from "react-bootstrap"
import ActionButton from "./ActionButton"
function NoteItem({id,title,body,createdAt,onDelete,onArchive,isArchived,isShow,modalToggle}) {
    const bodyText = body.replace(/(<([^>]+)>)/gi, "");
    
    return (
            <Col lg="3" md="4" sm="6" xs="12" className="mb-2">
                <Card>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{createdAt}</Card.Subtitle>
                        <Card.Text>
                            {bodyText.length > 120 ? bodyText.substring(0,120) + "..." : bodyText}
                        </Card.Text>
                        <ActionButton onDeleteClick={onDelete} onArchiveClick={onArchive} isArchived={isArchived} id={id} isShow={isShow} modalToggle={modalToggle}/>
                    </Card.Body>
                    </Card>
            </Col>
        
    )
    
}

export default NoteItem