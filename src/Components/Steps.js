import React, { Component } from "react";
import { Icon, Step } from "semantic-ui-react";

export default class Steps extends Component {
  render() {
    let { currentStep, completedStep, jumpToStep } = this.props;
    return (
      <div className="steps_wrapper">
        <Step.Group widths={3}>
          <Step
            active={currentStep === 0}
            disabled={false}
            onClick={() => jumpToStep(0)}
          >
            <Icon name="id badge outline" />
            <Step.Content>
              <Step.Title>Profile</Step.Title>
            </Step.Content>
          </Step>
          <Step
            active={currentStep === 1}
            disabled={currentStep < 1 && completedStep < 0}
            onClick={() => jumpToStep(1)}
          >
            <Icon name="user" />
            <Step.Content>
              <Step.Title>Personal Details</Step.Title>
            </Step.Content>
          </Step>
          <Step
            active={currentStep === 2}
            disabled={currentStep < 2 && completedStep < 1}
            onClick={() => jumpToStep(2)}
          >
            <Icon name="graduation cap" />
            <Step.Content>
              <Step.Title>Qualifications</Step.Title>
            </Step.Content>
          </Step>
        </Step.Group>
      </div>
    );
  }
}
