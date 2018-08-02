import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
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
    /* <ul>
      {Object.keys(items).map(i => (
        <SortableItem key={i} index={i} value={i} />
      ))}
    </ul> */
  );
});

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetCount: 5,
      modal: false,
      items: ["techcrunch", "laughingsquid", "appdirect"],
      formValues: {}
    };
    this.toggle = this.toggle.bind(this);
    this.changeTweetCount = this.changeTweetCount.bind(this);
    this.changeSkin = this.changeSkin.bind(this);
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

  changeTweetCount(event) {
    this.props.changeTweetCount(event.target.value);
  }
  changeSkin(event) {
    this.props.changeSkin(event.target.value);
  }

  render() {
    console.log(this.props.twitterfeed);
    return (
      <React.Fragment>
        <div className="row col-sm-12 m-0">
          <div className="edit-settings-btn col-md-12 text-center">
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
                  id="tweetCount"
                  type="range"
                  min="1"
                  max="30"
                  value={this.props.tweetCount}
                  onChange={this.changeTweetCount}
                  step="1"
                />
              </FormGroup>
              <FormGroup>
                <Label for="skin">Page Skin:</Label>
                <Input
                  type="select"
                  name="skin"
                  id="skin"
                  value={this.props.skin}
                  onChange={this.changeSkin}
                >
                  <option value="Pearl">Pearl</option>
                  <option value="Sapphire">Sapphire</option>
                  <option value="Jade">Jade</option>
                </Input>
              </FormGroup>
              <FormGroup id="reorderList">
                <Label for="reorderList">Re-order columns:</Label>
                <SortableList
                  items={this.state.items}
                  onSortEnd={this.onSortEnd}
                  helperClass="sortableHelper btn btn-info"
                  className="dragItem"
                />
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Settings;
/*
<ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>

<div className="my-2 text-center">
                <Button color="primary" type="submit" value="submit">
                  Save
                </Button>
              </div>

    */
