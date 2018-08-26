import React, { Component } from "react";

class TitleHeader extends Component {
  render() {
    const { name } = this.props;

    return (
      <h3 className="mb-4">
        <span className="title-border mr-3" />
        {name}
      </h3>
    );
  }
}

export default TitleHeader;
