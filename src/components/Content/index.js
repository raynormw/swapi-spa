import React, { Component } from "react";
import { shape } from "prop-types";

import CardContent from "components/Content/CardContent";

class MainContent extends Component {
  static propTypes = {
    data: shape({}).isRequired
  };

  render() {
    const { data } = this.props;
    const split = data.name.split(" ");
    const lastName = split[split.length - 1];

    return (
      <div className="col-12 col-lg-8 content">
        <div className="row justify-content-between mb-3">
          <div className="col-8 actor-name">{lastName} Movie's</div>
          <div className="col-4 link">See More</div>
        </div>
        <CardContent films={data.films} />
      </div>
    );
  }
}

export default MainContent;
