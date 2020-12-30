import React, { Component } from 'react';

class About extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);

    return (
      <div className="about-section">
        <div className="item text-container">
          <h1 className="text-container__title">About</h1>
          <p className="text-container__copy">This React app was built from "Create React App" on Webpack to consume API data served from an Adobe Experience Manager (AEM) provided endpoint. To learn more, please visit the following blog posts:</p>
          <br/>
                  </div>
        <div class="item img-container">
          <img src="/../img/react-logo.png" alt="React Logo"/>
        </div>
      </div>
    );
  }
}

export default About;
