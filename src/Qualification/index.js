import React, { Component } from "react";
import { Button, Form, Input, Icon } from "semantic-ui-react";
import { isNonEmpty } from "../utils/validateQualificationForm";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: "",
      college: "",
      postGraduate: "",

      schoolNameValidationFailedMessage: "",
      collegeNameValidationFailedMessage: "",
      postGraduateValidationFailedMessage: "",
    };
  }

  componentDidMount() {
    let { school, college, postGraduate } = this.props;
    return this.setState({ school, college, postGraduate })
  }

  handleInput = ({ target: { name, value } }) => {
    return this.setState({ [name]: value });
  };

  validateForm = ({ school, college, postGraduate }) => {
    let schoolNameValidationFailedMessage = isNonEmpty(school, "School name");
    let collegeNameValidationFailedMessage = isNonEmpty(
      college,
      "College name"
    );
    let postGraduateValidationFailedMessage = isNonEmpty(
      postGraduate,
      "University name"
    );

    return this.setState({
      schoolNameValidationFailedMessage,
      collegeNameValidationFailedMessage,
      postGraduateValidationFailedMessage,
    });
  };

  handleSubmit = async (event) => {
    event.persist();
    let { updateInfo } = this.props;
    let { school, college, postGraduate } = this.state;
    await this.validateForm(this.state);
    if (
      this.state.schoolNameValidationFailedMessage ||
      this.state.collegeNameValidationFailedMessage ||
      this.state.postGraduateValidationFailedMessage
    ) {
      return;
    }

    updateInfo({
      school,
      college,
      postGraduate,
      completedStep:2,
    });
  };

  render() {
    let { prevStep } = this.props;
    let {
      school,
      college,
      postGraduate,
      schoolNameValidationFailedMessage,
      collegeNameValidationFailedMessage,
      postGraduateValidationFailedMessage,
    } = this.state;
    return (
      <div>
        <Form>
          <Form.Field
            placeholder="School"
            control={Input}
            label="School"
            name="school"
            value={school}
            onChange={this.handleInput}
            error={
              schoolNameValidationFailedMessage
                ? { content: schoolNameValidationFailedMessage }
                : false
            }
          />

          <Form.Field
            control={Input}
            label="College"
            placeholder="College"
            name="college"
            value={college}
            onChange={this.handleInput}
            error={
              collegeNameValidationFailedMessage
                ? { content: collegeNameValidationFailedMessage }
                : false
            }
          />

          <Form.Field
            control={Input}
            label="Post-Graduate"
            placeholder="Post-Graduate"
            name="postGraduate"
            value={postGraduate}
            onChange={this.handleInput}
            error={
              postGraduateValidationFailedMessage
                ? { content: postGraduateValidationFailedMessage }
                : false
            }
          />
          <div className="btn_wrapper">
          <Button animated onClick={prevStep} size='large' secondary>
            <Button.Content visible>Back</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow left" />
            </Button.Content>
          </Button>
          <Button animated onClick={this.handleSubmit} size='large' primary>
            <Button.Content visible>Next</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </div>
        </Form>
      </div>
    );
  }
}
