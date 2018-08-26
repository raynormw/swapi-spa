import React, { Component } from "react";

import CardContent from "components/Content/CardContent";

class MainContent extends Component {
  render() {
    return (
      <div className="col-8 content">
        <div className="row justify-content-between mb-3">
          <div className="col-4 actor-name">Skywalker</div>
          <div className="col-4 link">See More</div>
        </div>
        <CardContent />
      </div>
    );
  }
}

export default MainContent;
