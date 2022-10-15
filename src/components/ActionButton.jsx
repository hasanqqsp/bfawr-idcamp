import React from "react";
import { Button, Container } from "react-bootstrap";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi"
import { RiDeleteBin2Line } from "react-icons/ri"
import { IoOpenOutline, IoArrowBackOutline} from "react-icons/io5"
import { Link, useNavigate } from "react-router-dom"
import ModalDialog from "./ModalDialog";
function ActionButton({id,isArchived, onDeleteClick, onArchiveClick, onDetail,isShow,modalToggle}){
    const archiveText = isArchived ? (<BiArchiveOut className="align-middle"/>) : (<BiArchiveIn className="align-middle"/>) 
    const archiveIcon = !onDetail ? "ARC" : isArchived ? "Unarchive" :"Archive"
    const navigate = useNavigate()
    const onDeleteSubmit = (id) => {
        onDeleteClick(id)
        modalToggle()
    }
    const onDelete = () => {
        if (onDetail) {
            navigate("/")
        }
        modalToggle()
    }

    return (
        <>
            <ModalDialog 
                show={isShow} 
                onHide={() => modalToggle()} 
                submitVariant="danger" 
                submitLabel="Yes"
                modalTitle="Delete?" 
                modalMessage="Yakin Untuk Menghapus Catatan Ini?" 
                onSubmit={() => {onDeleteSubmit(id)}}
            />

            <Container className="px-0">
                {onDetail ? <Link to={"/"}><Button size="sm" className="mb-1 me-1 align-middle" variant="primary"><IoArrowBackOutline className="align-middle"/> Back</Button></Link> : ""}
                <Button size="sm" className="me-1 mb-1" variant="secondary" onClick={() => onArchiveClick(id)}>{archiveText} {archiveIcon}</Button>
                <Button size="sm" className="mb-1" variant="danger" onClick={onDelete} ><RiDeleteBin2Line className="align-middle"/> {onDetail ? "Delete" : "DEL" }</Button>
                {onDetail ? "" : <Link to={"/" + id}><Button size="sm" className="ms-1 mb-1 align-middle" variant="primary"><IoOpenOutline className="align-middle"/> SEE</Button></Link>}    
            </Container>

        </>
    )
    
}

export default ActionButton