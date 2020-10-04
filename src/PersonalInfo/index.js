import React, { Component } from "react";
import { Button, Form, Icon } from "semantic-ui-react";
import { countryOptions } from "../utils/data";
import Select from "../Components/Select";

import {
  isNameValid,
  isZipcodeValid,
  isNonEmpty,
} from "../utils/validatePersonalInfoForm";
import InputBox from "../Components/InputBox";
import TextArea from "../Components/TextArea";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      city: "",
      state: "",
      district: "",
      zipcode: "",
      address: "",
      country: "",
      firstNameValidationFailedMessage: "",
      lastNameValidationFailedMessage: "",
      cityNameValidationFailedMessage: "",
      stateNameValidationFailedMessage: "",
      districtNameValidationFailedMessage: "",
      zipcodeValidationFailedMessage: "",
      addressValidationFailedMessage: "",
    };
  }

  componentDidMount() {
    let {
      firstName,
      lastName,
      city,
      state,
      district,
      zipcode,
      address,
      country,
    } = this.props;

    this.setState({
      firstName,
      lastName,
      city,
      state,
      district,
      zipcode,
      address,
      country,
    });
  }

  handleInput = ({ target: { name, value } }) => {
    console.log({ name, value });
    this.setState({ [name]: value });
    return this.removeErrorMessage(name);
  };

  validateForm = ({
    firstName,
    lastName,
    city,
    state,
    district,
    zipcode,
    address,
    country,
  }) => {
    let firstNameValidationFailedMessage = isNameValid(firstName, "First name");
    let lastNameValidationFailedMessage = isNameValid(lastName, "Last name");
    let cityNameValidationFailedMessage = isNonEmpty(city, "City name");
    let stateNameValidationFailedMessage = isNonEmpty(state, "State name");
    let districtNameValidationFailedMessage = isNonEmpty(
      district,
      "District name"
    );
    let zipcodeValidationFailedMessage = isZipcodeValid(zipcode);
    let addressValidationFailedMessage = isNonEmpty(address, "Address");
    let countryValidationFailedMessage = isNonEmpty(country, "Country name");

    this.setState({
      firstNameValidationFailedMessage,
      lastNameValidationFailedMessage,
      cityNameValidationFailedMessage,
      stateNameValidationFailedMessage,
      districtNameValidationFailedMessage,
      zipcodeValidationFailedMessage,
      addressValidationFailedMessage,
      countryValidationFailedMessage,
    });
  };

  handleSubmit = async (event) => {
    event.persist();
    let { updateInfo, nextStep } = this.props;
    let {
      firstName,
      lastName,
      city,
      state,
      district,
      zipcode,
      address,
      country,
    } = this.state;
    await this.validateForm(this.state);
    if (
      this.state.firstNameValidationFailedMessage ||
      this.state.lastNameValidationFailedMessage ||
      this.state.cityNameValidationFailedMessage ||
      this.state.stateNameValidationFailedMessage ||
      this.state.districtNameValidationFailedMessage ||
      this.state.zipcodeValidationFailedMessage ||
      this.state.addressValidationFailedMessage ||
      this.state.countryValidationFailedMessage
    ) {
      return;
    }
    updateInfo({
      firstName,
      lastName,
      city,
      state,
      district,
      zipcode,
      address,
      country,
      completedStep: 1,
    });
    nextStep();
  };

  removeErrorMessage = (name) => {
    let {
      firstNameValidationFailedMessage,
      lastNameValidationFailedMessage,
      cityNameValidationFailedMessage,
      stateNameValidationFailedMessage,
      districtNameValidationFailedMessage,
      zipcodeValidationFailedMessage,
      addressValidationFailedMessage,
      countryValidationFailedMessage,
    } = this.state;

    switch (name) {
      case "firstName":
        return (
          firstNameValidationFailedMessage &&
          this.setState({ firstNameValidationFailedMessage: "" })
        );

      case "lastName":
        return (
          lastNameValidationFailedMessage &&
          this.setState({ lastNameValidationFailedMessage: "" })
        );
      case "city":
        return (
          cityNameValidationFailedMessage &&
          this.setState({ cityNameValidationFailedMessage: "" })
        );
      case "state":
        return (
          stateNameValidationFailedMessage &&
          this.setState({ stateNameValidationFailedMessage: "" })
        );
      case "district":
        return (
          districtNameValidationFailedMessage &&
          this.setState({ districtNameValidationFailedMessage: "" })
        );
      case "zipcode":
        return (
          zipcodeValidationFailedMessage &&
          this.setState({ zipcodeValidationFailedMessage: "" })
        );
      case "address":
        return (
          addressValidationFailedMessage &&
          this.setState({ addressValidationFailedMessage: "" })
        );

      case "country":
        return (
          countryValidationFailedMessage &&
          this.setState({ countryValidationFailedMessage: "" })
        );

      default:
        return;
    }
  };

  render() {
    let { prevStep } = this.props;
    let {
      firstName,
      lastName,
      city,
      state,
      district,
      zipcode,
      address,
      country,
      firstNameValidationFailedMessage,
      lastNameValidationFailedMessage,
      cityNameValidationFailedMessage,
      stateNameValidationFailedMessage,
      districtNameValidationFailedMessage,
      zipcodeValidationFailedMessage,
      addressValidationFailedMessage,
      countryValidationFailedMessage,
    } = this.state;
    return (
      <Form>
        <Form.Group widths="equal">
          <InputBox
            name={"firstName"}
            label={"First name"}
            value={firstName}
            handleInput={this.handleInput}
            errorMessage={firstNameValidationFailedMessage}
          />
          <InputBox
            name={"lastName"}
            label={"Last name"}
            value={lastName}
            handleInput={this.handleInput}
            errorMessage={lastNameValidationFailedMessage}
          />
        </Form.Group>
        <InputBox
          name={"city"}
          label={"City"}
          value={city}
          handleInput={this.handleInput}
          errorMessage={cityNameValidationFailedMessage}
        />
        <InputBox
          name={"district"}
          label={"District"}
          value={district}
          handleInput={this.handleInput}
          errorMessage={districtNameValidationFailedMessage}
        />
        <InputBox
          name={"state"}
          label={"State"}
          value={state}
          handleInput={this.handleInput}
          errorMessage={stateNameValidationFailedMessage}
        />
        <InputBox
          name={"zipcode"}
          label="Zipcode"
          value={zipcode}
          handleInput={this.handleInput}
          errorMessage={zipcodeValidationFailedMessage}
        />

        <Select
          label="Country"
          name="country"
          value={country}
          errorMessage={countryValidationFailedMessage}
          handleInput={this.handleInput}
          options={countryOptions}
        />

        <TextArea
          name={"address"}
          label={"Address"}
          value={address}
          handleInput={this.handleInput}
          errorMessage={addressValidationFailedMessage}
        />
        <div className="btn_wrapper">
          <Button animated onClick={prevStep} size='large' secondary>
            <Button.Content visible >Back</Button.Content>
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
    );
  }
}
