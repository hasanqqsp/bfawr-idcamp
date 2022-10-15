import React from "react";
import { Container } from "react-bootstrap";
import TitleOnly from "../components/TitleOnly";
import CreateForm from "../components/CreateForm";
import { useNavigate } from "react-router-dom";
function Create ({addNoteHandler}) {
    const navigate = useNavigate()
    const addNote = (data) => {
        addNoteHandler(data)
        navigate("/")
    }
    
    return (    
        <Container as="main" className="app_main pt-4">
           <TitleOnly title={"Create New Form"}/>
           <CreateForm addNoteHandler={addNote}/>
        </Container>       
    )
}


export default Create