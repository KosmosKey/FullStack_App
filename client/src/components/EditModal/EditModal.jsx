import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Input,
  Alert,
} from "reactstrap";

export const EditModal = ({
  toggle,
  modal,
  editNameVal,
  onChangeEditNameVal,
  editEmailVal,
  onChangeEditEmailVal,
  editCommentVal,
  onChangeCommentVal,
  onSubmit,
  editError,
}) => {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>EDIT ITEM</ModalHeader>
        <ModalBody>
          <form onSubmit={onSubmit}>
            <FormGroup>
              {editError && <Alert color="primary">{editError}</Alert>}
              <Label for="name">Edit name</Label>
              <Input
                type="name"
                name="name"
                id="name"
                value={editNameVal}
                onChange={onChangeEditNameVal}
                placeholder="Edit your name..."
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Edit email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={editEmailVal}
                onChange={onChangeEditEmailVal}
                placeholder="Edit your email..."
              />
            </FormGroup>
            <FormGroup>
              <Label for="comment">Edit password</Label>
              <Input
                type="comment"
                name="comment"
                id="comment"
                value={editCommentVal}
                onChange={onChangeCommentVal}
                placeholder="Edit your comment..."
              />
            </FormGroup>
            <Button color="primary" block>
              Edit item
            </Button>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};
