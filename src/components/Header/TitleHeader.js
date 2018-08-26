import React, { Component } from "react";
import { string } from "prop-types";

class TitleHeader extends Component {
  static propTypes = {
    name: string.isRequired
  };

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
