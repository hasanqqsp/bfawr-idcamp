import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
function AddNoteButton() {
    return (
        
            <Link to="/create" className="d-grid gap-2">
                <Button variant="primary" className="mb-2 ">Add Note +</Button>
            </Link>
    )
}

export default AddNoteButton