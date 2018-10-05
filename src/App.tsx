import * as React from "react";
import Hello from "./components/Hello";

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <Hello compiler="TypeScript" framework="React" bundler="Webpack" />
      </React.Fragment>
    );
  }
}

export default App;
