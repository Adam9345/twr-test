import * as React from "react";
import "./style.scss";

interface IProps {
  compiler: string;
  framework: string;
  bundler: string;
}

class Hello extends React.Component<IProps, {}> {
  public render() {
    const { compiler, framework, bundler } = this.props;
    return (
      <React.Fragment>
        <h1 className="green-color">
          {compiler}, {framework}, {bundler}
        </h1>
      </React.Fragment>
    );
  }
}

export default Hello;
