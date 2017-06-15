import React, { PureComponent } from "react";

class Welcome extends PureComponent {
  constructor(props) {
    super(props);
    this.handleHide = this.handleHide.bind(this);
    this.state = { visible: true };
  }

  handleHide() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    console.log("render");
    if (this.state.visible) {
      return (
        <div>
          <div>Welcome</div>
          <button onClick={this.handleHide} />
        </div>
      );
    } else {
      return <button onClick={this.handleHide} />;
    }
  }
  componentWillMount() {
    console.log("mount");
  }
}

Welcome.preload = {
  actions: {}
};

export default Welcome;
