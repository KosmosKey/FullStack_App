import React, { Component } from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar.jsx";
import "./Stylesheet.scss";
import PageLists from "./components/Lists/PageLists.jsx";
import { connect } from "react-redux";
import { getItems, addItem, deleteItem, editItem } from "./action/actions";
import { OpenModal } from "./components/OpenModal/OpenModal.jsx";
import { ValueLength } from "./components/Lists/ValueLength.jsx";
import { EditModal } from "./components/EditModal/EditModal.jsx";
import SetLoading from "./components/setLoading/SetLoading.jsx";
import ReactPaginate from "react-paginate";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      description: "",
      errorFieldForName: "",
      errorFieldForEmail: "",
      errorFieldForDesc: "",
      tooManyCharacters: "",
      modal: false,
      length: true,
      EditModalOpen: false,
      editNameValue: "",
      editEmailValue: "",
      editCommentValue: "",
      Id: 0,
      Loading: false,
      firstPage: 0,
      lastPage: 2,
      offset: 0,
      activeItem: 0,
      erorrMessageEdit: "",
    };
  }

  componentDidMount() {
    this.props.getItems();
  }

  changeValueName = (e) => {
    const { name } = this.state;
    this.setState({ name: e.target.value });
    if (name.length < 1) {
      this.setState({ errorFieldForName: "You need more characters" });
    } else {
      this.setState({ errorFieldForName: "" });
    }
  };

  changeValueEmail = (e) => {
    const { email } = this.state;
    this.setState({ email: e.target.value });
    if (email.length < 1) {
      this.setState({
        errorFieldForEmail: "You need more characters",
      });
    } else {
      this.setState({ errorFieldForEmail: "" });
    }
  };

  changeValueDescription = (e) => {
    const { description } = this.state;
    this.setState({ description: e.target.value });
    if (description.length < 1) {
      this.setState({ errorFieldForDesc: "You need more characters" });
    } else {
      this.setState({ errorFieldForDesc: "" });
    }
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    const { name, email, description } = this.state;

    const newItem = {
      name: name,
      email: email,
      description: description,
    };

    if (name.length > 40 || email.length > 45 || description.length > 75) {
      e.preventDefault();
      this.setState({
        tooManyCharacters:
          "You have too many characters in input field try to lower them",
      });
    } else {
      this.props.addItem(newItem);
      this.toggle();
      this.setState({ name: "", email: "", description: "" });
    }
  };

  deleteItem = (id) => {
    this.props.deleteItem(id);
  };

  toggleEditModal = () => {
    this.setState({ EditModalOpen: !this.state.EditModalOpen });
  };

  valueChangeName = (e) => {
    this.setState({ editNameValue: e.target.value });
  };

  valueChangeEmail = (e) => {
    this.setState({ editEmailValue: e.target.value });
  };

  valueChangeComment = (e) => {
    this.setState({ editCommentValue: e.target.value });
  };

  editSubmitForm = (e) => {
    if (
      this.state.editNameValue.length > 40 ||
      this.state.editEmailValue.length > 45 ||
      this.state.editCommentValue.length > 75
    ) {
      e.preventDefault();
      this.setState({
        erorrMessageEdit:
          "You have too many characters in input field try to lower them",
      });
    } else {
      this.toggleEditModal();
      const post = {
        name: this.state.editNameValue,
        email: this.state.editEmailValue,
        description: this.state.editCommentValue,
      };
      this.props.editItem(this.state.Id, post);
    }
  };

  getValue = (id, name, email, desc) => {
    this.toggleEditModal();
    this.setState(
      {
        Id: id,
        editNameValue: name,
        editEmailValue: email,
        editCommentValue: desc,
      },
      () => console.log()
    );
  };

  editPage = (number) => {
    this.setState({ firstPage: number });
  };

  setActiveItem = (index) => {
    this.setState({ activeItem: index });
    if (index === 0) {
      console.log("no");
    }
  };

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.lastPage;
    this.setState({
      firstPage: selectedPage,
      offset: offset,
    });
  };

  render() {
    const { items } = this.props.item;

    const slice = items.slice(
      this.state.offset,
      this.state.offset + this.state.lastPage
    );

    const totalValues = Math.ceil(items.length / this.state.lastPage);

    const {
      name,
      email,
      description,
      errorFieldForName,
      errorFieldForEmail,
      errorFieldForDesc,
      tooManyCharacters,
      modal,
      editNameValue,
      EditModalOpen,
      editEmailValue,
      editCommentValue,
    } = this.state;

    const {
      changeValueName,
      onSubmitForm,
      changeValueEmail,
      changeValueDescription,
      toggle,
      toggleEditModal,
      deleteItem,
      valueChangeName,
      valueChangeEmail,
      valueChangeComment,
      editSubmitForm,
    } = this;

    return (
      <React.Fragment>
        {this.props.item.loading ? <SetLoading /> : ""}
        <NavigationBar arrayLengthCharacters={items} />
        <EditModal
          toggle={toggleEditModal}
          editNameVal={editNameValue}
          onChangeEditNameVal={valueChangeName}
          editEmailVal={editEmailValue}
          onChangeEditEmailVal={valueChangeEmail}
          editCommentVal={editCommentValue}
          onChangeCommentVal={valueChangeComment}
          modal={EditModalOpen}
          onSubmit={editSubmitForm}
          editError={this.state.erorrMessageEdit}
        />
        <OpenModal
          nameValue={name}
          emailValue={email}
          commentValue={description}
          onChangeNameValue={changeValueName}
          onChangeEmailValue={changeValueEmail}
          onChangeCommentValue={changeValueDescription}
          errorFieldForName={errorFieldForName}
          errorFieldForEmail={errorFieldForEmail}
          errorFieldForDesc={errorFieldForDesc}
          onSubmit={onSubmitForm}
          tooManyCharacters={tooManyCharacters}
          modal={modal}
          toggle={toggle}
        />
        <ValueLength ValueLengthArray={items} />
        <PageLists
          listFromMongoDB={slice}
          deleteItem={deleteItem}
          setCurrentId={this.getValue}
        />
        <div className="container">
          <div className="reactPagination">
            {items.length === 0 ? (
              ""
            ) : (
              <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={totalValues}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              />
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
// MapStateToProps. Getting item which we renamed it instead of reducer.
// This item is located in combineReducer.
const mapStateToProps = (state) => {
  return {
    item: state.item,
  };
};

export default connect(mapStateToProps, {
  getItems,
  addItem,
  deleteItem,
  editItem,
})(App);
