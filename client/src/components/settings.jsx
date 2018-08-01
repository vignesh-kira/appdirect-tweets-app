import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import {
  SortableContainer,
  SortableElement,
  arrayMove
} from "react-sortable-hoc";
import "../styles/settings.css";

const SortableItem = SortableElement(({ value }) => <li>{value}</li>);

const SortableList = SortableContainer(({ items }) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      items: ["Item 1", "Item 2", "Item 3"]
    };
    this.toggle = this.toggle.bind(this);
  }
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex)
    });
  };

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <div className="row col-sm-12">
          <div className="app-settings col-md-12 text-center">
            <a
              className="btn-primary btn-sm"
              data-toggle="collapse"
              href="javascript:none"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
              onClick={this.toggle}
            >
              Edit <i className="fa fa-cog fa-lg" />
            </a>
          </div>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="">
          <ModalHeader toggle={this.toggle}>Edit Settings</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="tweetCount">
                  Tweets per Column (between 5 and 30):
                </Label>
                <Input
                  name="tweetCount"
                  id="tweetCount"
                  type="range"
                  min="5"
                  max="30"
                />
              </FormGroup>
              <FormGroup id="reorderList">
                <Label for="examplePassword">Re-order columns:</Label>
                <SortableList
                  items={this.state.items}
                  onSortEnd={this.onSortEnd}
                  helperClass="sortableHelper"
                />
              </FormGroup>
              <FormGroup>
                <Label for="skin">Select Page Skin:</Label>
                <Input type="select" name="skin" id="skin">
                  <option>Pearl</option>
                  <option>Sapphire</option>
                  <option>Jade</option>
                </Input>
              </FormGroup>
              <div className="my-2 text-center">
                <Button color="primary">Save</Button>
              </div>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Settings;
