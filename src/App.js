import React, { Component } from "react";

import { API } from "utils/API";
import MainHeader from "components/Header";
import Content from "components/Content";

class App extends Component {
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
      <div className="App">
        <MainHeader data={data} />
        <div className="container">
          <div className="row">
            <Content />
            <div className="col-4">One of three columns</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
