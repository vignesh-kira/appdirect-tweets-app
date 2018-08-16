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
        <SortableItem key={index} index={index} value={value[0].user.name} />
      ))}
    </ul>
  );
});

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      tweetCount: this.props.tweetCount
    };
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    const oldProps = this.props.twitterfeed;
    const twitterfeed = arrayMove(oldProps, oldIndex, newIndex);
    this.props.changeTweetColumnOrder(twitterfeed);
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  changeTweetCount = event => {
    const tweetCountUpdated = event.target.value;
    this.props.changeTweetCount(tweetCountUpdated);
    this.setState({ tweetCount: tweetCountUpdated });
  };

  changeSkin = event => {
    this.props.changeSkin(event.target.value);
  };

  render() {
    const { tweetCount, twitterfeed, skin } = this.props;
    return (
      <React.Fragment>
        <div className="row col-sm-12 col-md-12 m-0">
          <div className="text-center w-100 edit-settings-btn">
            <Button
              type="button"
              color="primary"
              className="btn-sm"
              data-toggle="collapse"
              onClick={this.toggle}
              id="editSettings"
            >
              Edit <i className="fa fa-cog fa-lg" />
            </Button>
          </div>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="">
          <ModalHeader toggle={this.toggle}>Edit Settings</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="tweetCount">
                  Tweets per Column (between 1 and 30): &nbsp;
                  {tweetCount}
                </Label>
                <Input
                  id="tweetCount"
                  type="range"
                  min="1"
                  max="30"
                  value={tweetCount}
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
                  value={skin}
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
                  items={twitterfeed}
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
