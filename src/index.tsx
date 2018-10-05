import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

declare const module: any;

ReactDOM.render(<App />, document.getElementById("root"));

if (process.env.NODE_ENV === "development") {
  if (module.hot) {
    module.hot.accept();
  }
}

// tslint:disable:no-console
console.log(`You are running ${process.env.NODE_ENV} version`);
