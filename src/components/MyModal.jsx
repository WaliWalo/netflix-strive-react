import React from "react";
import { Button, Modal } from "react-bootstrap";
import Comment from "./Comment";

export default function MyModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Reviews
          <div>
            <img
              src={props.poster}
              alt={props.movie}
              style={{ height: "20rem", width: "12rem" }}
            ></img>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Comment movieid={props.movie} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
