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

const Settings = props => {
  const { tweetCount, twitterfeed, skin, modal } = props;

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const oldProps = twitterfeed;
    const twitterfeedNew = arrayMove(oldProps, oldIndex, newIndex);
    props.changeTweetColumnOrder(twitterfeedNew);
  };

  const toggle = () => {
    props.changeModal();
  };

  const changeTweetCount = event => {
    const tweetCountUpdated = event.target.value;
    props.changeTweetCount(tweetCountUpdated);
  };

  const changeSkin = event => {
    props.changeSkin(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="row col-sm-12 col-md-12 m-0">
        <div className="text-center w-100 edit-settings-btn">
          <Button
            type="button"
            color="primary"
            className="btn-sm"
            data-toggle="collapse"
            onClick={toggle}
            id="editSettings"
          >
            Edit <i className="fa fa-cog fa-lg" />
          </Button>
        </div>
      </div>
      <Modal isOpen={modal} toggle={toggle} className="">
        <ModalHeader toggle={toggle}>Edit Settings</ModalHeader>
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
                onChange={changeTweetCount}
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
                onChange={changeSkin}
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
                onSortEnd={onSortEnd}
                helperClass="sortableHelper btn btn-info"
                className="dragItem"
              />
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};
export default Settings;
