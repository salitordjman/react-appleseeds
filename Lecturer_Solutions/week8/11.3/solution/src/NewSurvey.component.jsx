import React from "react";
import SurveyFormReview from "./SurveyFormReview.component";
import SurveyForm from "./SurveyForm.component";
class NewSurvey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFormReview: false,
      formValues: {},
    };
  }

  handleOnClick = (values) => {
    this.setState({
      showFormReview: true,
      formValues: values,
    });
  };
  renderContent = () => {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showFormReview: false })}
          formValues={this.state.formValues}
        />
      );
    } else {
      return <SurveyForm onSurveySubmit={this.handleOnClick} />;
    }
  };

  render() {
    return <div>{this.renderContent()}</div>;
  }
}
export default NewSurvey;
