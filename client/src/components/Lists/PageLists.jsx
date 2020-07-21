import React from "react";
import { Button } from "reactstrap";
import "./PageLists.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  faUser,
  faComment,
  faTrash,
  faEdit,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const PageLists = ({ listFromMongoDB, deleteItem, setCurrentId }) => {
  return (
    <div className="container mt-2">
      <TransitionGroup className="shopping-list">
        {listFromMongoDB.map(({ name, email, description, _id }) => {
          return (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ul className="list-group mt-3" key={_id}>
                <div className="list-group-item">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="title_for_name">
                          <FontAwesomeIcon icon={faUser} />
                          <p>{name}</p>
                        </div>
                        <div className="title_for_email">
                          <FontAwesomeIcon icon={faEnvelope} />
                          <p>{email}</p>
                        </div>
                        <div className="title_for_description">
                          <FontAwesomeIcon icon={faComment} />
                          <div className="conatiner_field">
                            <p>{description}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 text-right">
                        <Button
                          className="fa_edit"
                          color="primary"
                          onClick={() =>
                            setCurrentId(_id, name, email, description)
                          }
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </Button>
                        <Button
                          color="danger"
                          className="fa_trash"
                          onClick={() => deleteItem(_id)}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default PageLists;
