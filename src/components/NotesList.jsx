import React from "react";
import NoteItem from "./NoteItem";
import { Row } from "react-bootstrap"
import { showFormattedDate } from "../utils/index"

function NotesList ({data,onArchive,onDelete,isModalShow,modalToggle}){
    let mappedList = data.map((e) => <NoteItem 
                key={e.id} 
                id={e.id} 
                title={e.title} 
                createdAt={showFormattedDate(e.createdAt)} 
                body={e.body}
                isArchived={e.archived}
                onArchive={onArchive}
                onDelete={onDelete}
                isShow={isModalShow}
                modalToggle={modalToggle}
            />)
    
    return (
         <Row className="mb-3">
            { data.length ? mappedList : <p className="fs-4 text-center mt-5 fw-bold">Tidak Ada Catatan Untuk Ditampilkan</p> }
        </Row>  
    )
}
export default NotesList