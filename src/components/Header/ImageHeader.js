import React, { Component } from "react";

import profilePhoto from "image/profile.png";

class ImageHeader extends Component {
  render() {
    return (
      <div className="col-sm-4 col-lg-2">
        <div className="container image-container">
          <img className="img-fluid" src={profilePhoto} alt="profile" />
        </div>
      </div>
    );
  }
}

export default ImageHeader;
