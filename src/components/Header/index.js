import React, { Component } from "react";

import { API } from "utils/API";
import TitleHeader from "components/Header/TitleHeader";
import ImageHeader from "components/Header/ImageHeader";
import LabelHeader from "components/Header/LabelHeader";
import ContentHeader from "components/Header/ContentHeader";

class MainHeader extends Component {
  state = {
    data: {}
  };

  _fetchData() {
    const url = `${API}/people/1`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data, "data");
        this.setState({ data });
      })
      .catch(error => console.log("Uh oh! There Is A Problem.."));
  }

  componentDidMount() {
    this._fetchData();
  }

  render() {
    const { data } = this.state;

    return (
      <div className="container header">
        <TitleHeader name={data.name} />
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
