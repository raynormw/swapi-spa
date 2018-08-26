import React, { Component } from "react";

class LabelHeader extends Component {
  render() {
    return (
      <div className="col-auto col-sm-auto col-md-auto">
        <p className="mb-1">Height:</p>
        <p className="mb-1">Mass:</p>
        <p className="mb-1">Hair Color:</p>
        <p className="mb-1">Skin Color:</p>
        <p className="mb-1">Birth Year:</p>
        <p className="mb-1">Gender:</p>
      </div>
    );
  }
}

export default LabelHeader;
