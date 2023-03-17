const ReactDOM = require("react-dom");
const React = require("react");
const Rate = require("./Rate.js");
const Customer = require("./Customer.js");

ReactDOM.render(<Rate />, document.querySelector(".rate"));
ReactDOM.render(<Customer />, document.querySelector(".customer"));
// have to pass Componet in < /> for React's engine to read it, if not:
// function Component Rate() will cause Invalid Hook Call
// class Component new Customer().render() can't trigger componentDidMount
