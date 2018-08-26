import React, { Component } from "react";
import { shape } from "prop-types";

import TitleHeader from "components/Header/TitleHeader";
import ImageHeader from "components/Header/ImageHeader";
import LabelHeader from "components/Header/LabelHeader";
import ContentHeader from "components/Header/ContentHeader";

class MainHeader extends Component {
  static propTypes = {
    data: shape({}).isRequired
  };

  render() {
    const { data } = this.props;

    return (
      <div className="container header">
        <TitleHeader name={data.name} />
        <div className="container content">
          <div className="row">
            <ImageHeader />
            <LabelHeader />
            <ContentHeader data={data} />
          </div>
        </div>
      </div>
    );
  }
}

export default MainHeader;
