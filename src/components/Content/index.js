import React, { Component } from "react";
import { shape } from "prop-types";

import CardContent from "components/Content/CardContent";
import SideContent from "components/Content/SideContent";

class MainContent extends Component {
  static propTypes = {
    data: shape({}).isRequired
  };

  render() {
    const { data } = this.props;
    const split = data.name.split(" ");
    const lastName = split[split.length - 1];
    const arrayId = [1, 2, 3, 4, 5, 6, 7];
    let filmId = 0;

    for (let i = 0; i < arrayId.length; i++) {
      if (
        data.films.indexOf(`https://swapi.co/api/films/${arrayId[i]}/`) === -1
      ) {
        filmId = i + 1;
        break;
      }
    }

    return (
      <div className="row">
        <div className="col-12 col-lg-8 content">
          <div className="row justify-content-between mb-3">
            <div className="col-8 label">{lastName} Movie's</div>
            <div className="col-4 link">See More</div>
          </div>
          <CardContent films={data.films} />
        </div>
        <div className="col-12 col-lg-4">
          <div className="label mb-3">Related Another Movie's</div>
          <SideContent filmId={filmId} />
        </div>
      </div>
    );
  }
}

export default MainContent;
