import React from "react";

const SurveyFormReview = (props) => {
  console.log(props.formValues[0].title);
  const renderReview = () => {
    return props.formValues.map((val) => {
      return (
        <div>
          {val.title}:{val.value}
        </div>
      );
    });
  };
  const handleSubmit = () => {
    alert("submitted");
  };
  return (
    <div>
      <div>{renderReview()}</div>
      <div></div>
      <button onClick={props.onCancel}>Back</button>
      <button onClick={handleSubmit}>Send Survey</button>
    </div>
  );
};

export default SurveyFormReview;
