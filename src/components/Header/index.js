import React, { Component } from "react";

import TitleHeader from "components/Header/TitleHeader";
import ImageHeader from "components/Header/ImageHeader";
import LabelHeader from "components/Header/LabelHeader";
import ContentHeader from "components/Header/ContentHeader";

class MainHeader extends Component {
  render() {
    return (
      <div className="container header">
        <TitleHeader />
        <div className="container content">
          <div className="row">
            <ImageHeader />
            <LabelHeader />
            <ContentHeader />
          </div>
        </div>
      </div>
    );
  }
}

export default MainHeader;
