import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import './index.css';
import AllCard from "./AllCard";
import CardLink from "./CardLink";

class App extends React.Component {
  render() {
    return (
      <div className="ui container comments">
        <AllCard
            img={faker.image.image()}
            title={faker.name.title()}
            description={faker.commerce.productDescription()}
        >
          <CardLink
            link="SHARE"
          />
          <CardLink
            link="EXPLORE"
          />
        </AllCard>
        <AllCard
            img={"https://image.shutterstock.com/image-photo/wild-tropical-pulasan-fruit-nephelium-600w-2028303236.jpg"}
            title={faker.name.title()}
            description={faker.commerce.productDescription()}
        >
          <CardLink
            link="SHARE"
          />
          <CardLink
            link="EXPLORE"
          />
        </AllCard>
        <AllCard
            img={faker.image.image()}
            title={faker.name.title()}
            description={faker.commerce.productDescription()}
        >
          <CardLink
            link="SHARE"
          />
          <CardLink
            link="EXPLORE"
          />
        </AllCard>
      </div>
    );
  };
};
ReactDOM.render(<App />, document.querySelector("#root"));