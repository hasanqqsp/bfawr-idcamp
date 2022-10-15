import React from "react"
import { Modal, Button } from "react-bootstrap"
function ModalDialog (props) {
        return (
            <Modal
              show={props.show}
              onHide={props.onHide}
              onSubmit={props.onSubmit}
              size="md"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  {props.modalTitle}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  {props.modalMessage}
              </Modal.Body>
              <Modal.Footer>
                {props.cancelButton ? <Button onClick={props.onHide}>Cancel</Button> : ""}
                <Button variant={props.submitVariant} onClick={props.onSubmit}>{props.submitLabel}</Button>
              </Modal.Footer>
            </Modal>
          ); 
}

export default ModalDialog