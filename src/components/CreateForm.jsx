import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react'
import { nanoid } from 'nanoid';
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw} from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';


class CreateForm extends React.Component {
  constructor(props){
      super(props)
      this.closeClick = props.closeClick;
      this.state = {
          title:"",
          titleError:"",
          editorState: EditorState.createEmpty(),
          body:"",
          archived:false
      }
      this.titleMaxLength = 50
      this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this)
      // this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this)
      this.onFormSubmitHandler = this.onFormSubmitHandler.bind(this)
      this.onArchivedChangeHandler = this.onArchivedChangeHandler.bind(this)
      this.onEditorStateChange = this.onEditorStateChange.bind(this)

      
  }

  onTitleChangeHandler(e){
      if (e.target.value.length <= this.titleMaxLength){
          this.setState({title:e.target.value})
      }else{
          this.setState({
              titleError:"Title cant be longer than 50 character",
              title:e.target.value.substring(0,this.titleMaxLength)
          })
      }
      
  }



  onEditorStateChange(editorState){
    this.setState({
      editorState,
      body : draftToHtml(convertToRaw(editorState.getCurrentContent()))
    });
    
  };

  onArchivedChangeHandler(e){
      this.setState({archived: e.target.checked })
  }
  onFormSubmitHandler(e){
      e.preventDefault()
      this.props.addNoteHandler({
          id : nanoid(6),
          title: this.state.title,
          body: this.state.body,
          createdAt : new Date().toISOString(),
          archived : this.state.archived,
      })
      
      this.setState({
          title:"",
          titleError:"",
          body:"",
          archived:false
      })
  }
  
  async getCleanedHTML(html){

  }

  render () {
    return (
      <Form onSubmit={this.onFormSubmitHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control required type="text" placeholder="Type Your Note Title" value={this.state.title} onChange={this.onTitleChangeHandler}/>
           <div className="d-flex justify-content-between">
            {this.state.titleError ? 
              <Form.Text>
                {this.state.titleError}
              </Form.Text>: ""}
              <Form.Text>{this.titleMaxLength - this.state.title.length}/{this.titleMaxLength}</Form.Text>
            

           </div>
        </Form.Group>
  
        <Form.Group className="mb-3">
          <Form.Label>Body</Form.Label>
          {/* <Form.Control as="textarea" type="textarea" style={{ height: '150px' }} value={this.state.body} onChange={this.onBodyChangeHandler}/> */}
          <Editor
            editorState={this.state.editorState}
            onEditorStateChange={this.onEditorStateChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Archived" value={this.state.archived} onChange={this.onArchivedChangeHandler}/>
      </Form.Group>
        <Button variant="primary" type="submit">
          Simpan
        </Button>
      </Form>
    );
  }
}


export default CreateForm;