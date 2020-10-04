import React, { Component } from "react";
import ProfileInfo from "./ProfileInfo";
import PersonalInfo from "./PersonalInfo";
import Qualification from "./Qualification";
import Steps from "./Components/Steps";
import { Segment } from "semantic-ui-react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      completedStep: -1,

      username: "",
      bio: "",
      email: "",
      contactNumber: "",
      avatar: "",
      previewAvatar: "",
      avatarImageType: "",

      firstName: "",
      lastName: "",
      city: "",
      state: "",
      zipcode: "",
      country: "",
      address: "",

      school: "",
      college: "",
      postGraduate: "",
    };
  }

  updateInfo = (updatedValueObj) => {
    this.setState({ ...updatedValueObj });
  };

  nextStep = () => {
    let { currentStep } = this.state;

    if (currentStep < 2 && currentStep >= 0) {
      return this.setState(({ currentStep }) => ({
        currentStep: ++currentStep,
      }));
    }
  };

  prevStep = () => {
    let { currentStep } = this.state;
    let userResponse = window.confirm(
      "Do you really want to go to the previous step?",
      false
    );

    if (currentStep < 3 && currentStep >= 1 && userResponse) {
      return this.setState(({ currentStep }) => ({
        currentStep: --currentStep,
      }));
    }
  };

  jumpToStep = (stepNo) => {
    let { completedStep } = this.state;
    let userResponse = window.confirm(
      "Do you really want to go to the previous step?",
      false
    );
    if (stepNo <= completedStep + 1 && stepNo >= 0 && userResponse) {
      return this.setState({ currentStep: stepNo });
    }
  };

  render() {
    let {
      currentStep,
      completedStep,
      avatar,
      previewAvatar,
      username,
      bio,
      email,
      contactNumber,
      firstName,
      lastName,
      city,
      state,
      district,
      country,
      zipcode,
      address,
      school,
      college,
      postGraduate,
      avatarImageType,
    } = this.state;
    let forms = [
      () => (
        <ProfileInfo
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          jumpToStep={this.jumpToStep}
          updateInfo={this.updateInfo}
          avatar={avatar}
          avatarImageType={avatarImageType}
          previewAvatar={previewAvatar}
          username={username}
          bio={bio}
          email={email}
          contactNumber={contactNumber}
        />
      ),
      () => (
        <PersonalInfo
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          jumpToStep={this.jumpToStep}
          updateInfo={this.updateInfo}
          firstName={firstName}
          lastName={lastName}
          city={city}
          state={state}
          district={district}
          zipcode={zipcode}
          address={address}
          country={country}
        />
      ),
      () => (
        <Qualification
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          jumpToStep={this.jumpToStep}
          updateInfo={this.updateInfo}
          school={school}
          college={college}
          postGraduate={postGraduate}
        />
      ),
    ];
    let Form = forms[currentStep];
    return (
      <div className="container">
        <Steps
          currentStep={currentStep}
          completedStep={completedStep}
          jumpToStep={this.jumpToStep}
        />
        <Segment className="form_segment">
          <div className="form_wrapper">
            <Form />
          </div>
        </Segment>
      </div>
    );
  }
}
