import React from "react";
import { InputGroup, Form, Container } from "react-bootstrap";
import {BsSearch} from "react-icons/bs"
function SearchBar({searchKeyword,onSearch}){
    return (
        
        <Container className="px-lg-5 px-md-3 px-1">
            <InputGroup className="mb-3">
                <Form.Control className="search_input"
                    placeholder="Search Here"
                    aria-label="Search Bar"
                    value={searchKeyword}
                    onChange={onSearch}
                />
            <InputGroup.Text className="search_icon">
                <BsSearch/>
            </InputGroup.Text>
        </InputGroup>
        </Container>
    )
}

export default SearchBar