import React, { PureComponent } from "react";

class Info extends PureComponent {
  render() {
    return <div>Info</div>;
  }
  componentWillMount() {
    console.log("Info mount");
  }
}

export default Info;
