import React from "react";
import { Container } from "react-bootstrap";
import NavNTitle from "../components/NavNTitle";
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";
import AddNoteButton from "../components/AddNoteButton";
function Main ({onNavigate,onSearch,showedNotes,searchKeyword,isArchived,onArchive,onDelete,isModalShow, modalToggle}) {
    return (    
        <Container as="main" className="app_main pt-4">
            <NavNTitle onNavigate={onNavigate} isArchived={isArchived}/>
            <SearchBar onSearch={onSearch} searchKeyword={searchKeyword}/>
            <AddNoteButton/>
            <NotesList data={showedNotes} onArchive={onArchive} onDelete={onDelete} isModalShow={isModalShow} modalToggle={modalToggle}/>
        </Container>       
    )
}


export default Main