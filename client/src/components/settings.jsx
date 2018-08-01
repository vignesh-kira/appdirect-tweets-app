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
import "../styles/settings.css";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

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
                <Label for="exampleEmail">
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
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="password placeholder"
                />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Save
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Settings;
