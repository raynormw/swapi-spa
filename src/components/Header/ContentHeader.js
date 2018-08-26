import React, { Component } from "react";
import { shape } from "prop-types";

class ContentHeader extends Component {
  static propTypes = {
    data: shape({}).isRequired
  };

  render() {
    const { data } = this.props;

    return (
      <div className="col">
        <p className="mb-1">{data.height}cm</p>
        <p className="mb-1">{data.mass}kg</p>
        <p className="mb-1">{data.hair_color}</p>
        <p className="mb-1">{data.skin_color}</p>
        <p className="mb-1">{data.eye_color}</p>
        <p className="mb-1">{data.birth_year}</p>
        <p className="mb-1">{data.gender}</p>
      </div>
    );
  }
}

export default ContentHeader;
