import React, { Component } from "react";
import { arrayOf, string } from "prop-types";

import { changeString } from "utils/Helpers";
import logo from "image/play.png";

class CardContent extends Component {
  state = {
    data: [],
    loading: true
  };
  static propTypes = {
    films: arrayOf(string).isRequired
  };

  _fetchData() {
    const { films } = this.props;

    films.map((value, index) => {
      return fetch(value)
        .then(res => res.json())
        .then(data => {
          this.setState({
            data: [...this.state.data, data]
          });
          if (this.state.data.length === films.length) {
            this.setState({ loading: false });
          }
        })
        .catch(error => console.log("Uh oh! There is a problem.."));
    });
  }

  componentDidMount() {
    this._fetchData();
  }

  render() {
    const content = [];
    const { data, loading } = this.state;

    if (loading) {
      return <div>Loading..</div>;
    }

    for (let i = 0; i < 4; i++) {
      if (i % 2) {
        content.push(
          <div className="col-6 col-sm-3 mb-4 card-container" key={i}>
            <div className="card border shadow">
              <div className="container play-container orange">
                <img className="img-fluid" src={logo} alt="play_logo" />
              </div>
              <div className="card-body">
                <p className="card-title font-weight-bold">
                  {changeString(data[i].title)}
                </p>
                <p className="card-text mb-0">Director:</p>
                <p className="card-text">{data[i].director}</p>
                <p className="card-text mb-0">Release:</p>
                <p className="card-text">{data[i].release_date}</p>
              </div>
            </div>
          </div>
        );
      } else {
        content.push(
          <div className="col-6 col-sm-3 mb-4 card-container" key={i}>
            <div className="card border shadow">
              <div className="container play-container">
                <img className="img-fluid" src={logo} alt="play_logo" />
              </div>
              <div className="card-body">
                <p className="card-title font-weight-bold">
                  {changeString(data[i].title)}
                </p>
                <p className="card-text mb-0">Director:</p>
                <p className="card-text">{data[i].director}</p>
                <p className="card-text mb-0">Release:</p>
                <p className="card-text">{data[i].release_date}</p>
              </div>
            </div>
          </div>
        );
      }
    }
    return <div className="row no-gutters">{content}</div>;
  }
}

export default CardContent;
