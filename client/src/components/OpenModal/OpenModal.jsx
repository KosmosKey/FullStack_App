import React from "react";
import {
  ModalHeader,
  Button,
  ModalBody,
  Modal,
  Label,
  FormGroup,
  Input,
  Alert,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import "./OpenModal.scss";

export const OpenModal = ({
  nameValue,
  emailValue,
  commentValue,
  onChangeNameValue,
  onChangeEmailValue,
  onChangeCommentValue,
  errorFieldForName,
  errorFieldForDesc,
  errorFieldForEmail,
  tooManyCharacters,
  onSubmit,
  modal,
  toggle,
}) => {
  return (
    <>
      <div className="container">
        <Button color="danger" className="Add_item_btn" onClick={toggle}>
          Add an item to the dashboard
          <FontAwesomeIcon icon={faFolderPlus} className="plus_icon" />
        </Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>
            <span className="span_add_item_text">ADD AN ITEM</span>
            <span role="img" aria-label="smile" className="ml-1">
              🙂
            </span>
          </ModalHeader>
          <ModalBody>
            <form onSubmit={onSubmit}>
              {tooManyCharacters && (
                <Alert color="primary">{tooManyCharacters}</Alert>
              )}
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="name"
                  name="name"
                  id="name"
                  value={nameValue}
                  onChange={onChangeNameValue}
                  placeholder="Type in your name..."
                />
                {errorFieldForName && (
                  <Alert color="primary">{errorFieldForName}</Alert>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={emailValue}
                  onChange={onChangeEmailValue}
                  placeholder="Type in your email..."
                />
                {errorFieldForEmail && (
                  <Alert color="primary">{errorFieldForEmail}</Alert>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="comment">Comment</Label>
                <Input
                  type="comment"
                  name="comment"
                  value={commentValue}
                  onChange={onChangeCommentValue}
                  id="comment"
                  placeholder="Add comment..."
                />
                {errorFieldForDesc && (
                  <Alert color="primary">{errorFieldForDesc}</Alert>
                )}
              </FormGroup>
              {nameValue.length > 1 &&
              emailValue.length > 1 &&
              commentValue.length > 1 ? (
                <Button color="primary" block>
                  Add an item
                </Button>
              ) : (
                <Button color="primary" block disabled>
                  Add an item
                </Button>
              )}
            </form>
          </ModalBody>
        </Modal>
      </div>
    </>
  );
};
