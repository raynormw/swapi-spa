import React, { Component } from "react";
import { number } from "prop-types";

import { API } from "utils/API";

class SideContent extends Component {
  state = {
    data: {},
    loading: true
  };

  static propTypes = {
    filmId: number.isRequired
  };

  _fetchData() {
    const { filmId } = this.props;
    const url = `${API}/films/${filmId}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          data,
          loading: false
        });
      })
      .catch(error => console.log("Uh oh! There is a problem.."));
  }

  componentDidMount() {
    this._fetchData();
  }

  render() {
    const { data, loading } = this.state;

    if (loading) {
      return <div>Loading..</div>;
    }

    return (
      <div className="card border shadow">
        <div className="container side-content">
          <p className="mb-1 font-weight-bold">{data.title}</p>
          <div className="row">
            <div className="col-5 pr-0">Director:</div>
            <div className="col-7 pl-0">{data.director}</div>
            <div className="col-5 pr-0">Producer:</div>
            <div className="col-7 pl-0">{data.producer}</div>
            <div className="col-5 pr-0">Relase Date:</div>
            <div className="col-7 pl-0">{data.release_date}</div>
          </div>
        </div>
        <div className="card-body">
          <p className="card-title font-weight-bold">asd</p>
          <p className="card-text mb-0">asd</p>
          <p className="card-text">asd</p>
        </div>
      </div>
    );
  }
}

export default SideContent;
