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
        this.setState({ data });
      })
      .catch(error => console.log("Uh oh! There is a problem.."));
  }

  componentDidMount() {
    this._fetchData();
  }

  render() {
    const { data } = this.state;

    if (Object.keys(data).length === 0 && data.constructor === Object) {
      return <div>Loading..</div>;
    }

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
