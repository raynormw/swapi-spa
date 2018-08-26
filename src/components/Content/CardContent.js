import React, { Component } from "react";

import logo from "image/play.png";

class CardContent extends Component {
  render() {
    return (
      <div className="row">
        <div className="col mb-4">
          <div className="card">
            <div className="container image-container">
              <img className="img-fluid" src={logo} alt="play_logo" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <div className="container image-container">
              <img className="img-fluid" src={logo} alt="play_logo" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <div className="container image-container">
              <img className="img-fluid" src={logo} alt="play_logo" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <div className="container image-container">
              <img className="img-fluid" src={logo} alt="play_logo" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardContent;
