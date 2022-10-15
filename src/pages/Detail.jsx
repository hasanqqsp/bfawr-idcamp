import React from "react"
import { Card, Container } from "react-bootstrap"
import ActionButton from "../components/ActionButton"
import { useNavigate, useParams } from 'react-router-dom';
import { showFormattedDate } from "../utils/index"
import parser from 'html-react-parser';

function Detail ({getNote,onDelete,onArchive,isShow,modalToggle}) {
    let { id } = useParams();
    const note = getNote(id);
    const navigate = useNavigate()
    
    let onDeleteClick = () => {
        onDelete(id)
        navigate('/')
    }
    let render
    if (note){
        render = (
            <Container as="main" className="app_main pt-4">
                <Card>
                    <Card.Body>
                        <Card.Title>{note.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{showFormattedDate(note.createdAt)}</Card.Subtitle>
                        <ActionButton 
                            onDeleteClick={onDeleteClick} 
                            onArchiveClick={() => onArchive(id)} 
                            isArchived={note.archived} id={id} onDetail={true}
                            modalToggle={modalToggle}
                            isShow={isShow}
                        />
                        <Card className="mt-3">
                            <Card.Text className="my-3 mx-3">
                                {parser(note.body)}
                            </Card.Text>
                        </Card>   
                    </Card.Body>
                </Card>
            </Container>
        )
    } else {
        render = <Container as="main" className="app_main pt-4 text-center">
            <h1 className="mt-3" style={{ fontSize: "5rem" }}>404</h1>
            <h2>NOT FOUND</h2>

        </Container>
    }

    return render
    
}

export default Detail