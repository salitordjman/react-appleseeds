import React from "react";
class SurveyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      freeText: "",
      age: "",
    };
  }
  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  handleSubmit = (event) => {
    event.preventDefault();

    const formValues = [
      { title: "First Name", value: this.state.firstName },
      {
        title: "Last Name",
        value: this.state.lastName,
      },
      {
        title: "Age",
        value: this.state.age,
      },
      {
        title: "Free Text",
        value: this.state.freeText,
      },
    ];
    this.props.onSurveySubmit(formValues);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="gap">
          <label style={{ marginRight: "5px" }}>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
        </div>
        <div className="gap">
          <label style={{ marginRight: "5px" }}>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
        </div>
        <div className="gap">
          <label style={{ marginRight: "5px" }}>Age:</label>
          <select
            value={this.state.age}
            onChange={this.handleChange}
            name="age"
          >
            <option value="0-15">0-15</option>
            <option value="15-30">0-30</option>
            <option value="30-45">30-45</option>
            <option value="Over 40">Over 40</option>
          </select>
        </div>
        <div style={{ textAlign: "center" }}>
          <label style={{ marginRight: "5px" }}>Free Text:</label>
          <textarea
            name="freeText"
            value={this.state.freeText}
            onChange={this.handleChange}
          />
        </div>
        <div className="gap">
          <input type="submit" value="Continue" />
        </div>
      </form>
    );
  }
}
export default SurveyForm;
