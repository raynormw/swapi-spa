import React, { Component } from "react";

import { API } from "utils/API";
import MainHeader from "components/Header";
import Content from "components/Content";

class App extends Component {
  state = {
    data: {},
    loading: true
  };

  _fetchData() {
    const url = `${API}/people/1`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({ data, loading: false });
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
      <div className="App mb-5">
        <MainHeader data={data} />
        <div className="container">
          <Content data={data} />
        </div>
      </div>
    );
  }
}

export default App;
