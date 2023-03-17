const React = require("react");
const {
  getRequest
} = require("./XHR.js");
module.exports = class Customer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    getRequest("../public/data.json").then(response => {
      this.setState({
        users: response.card
      });
    }).catch(err => console.log(err));
  }
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, this.state.users.map((user, index) => /*#__PURE__*/React.createElement("article", {
      className: `customer__card customer__card-${index}`,
      key: index
    }, /*#__PURE__*/React.createElement("section", {
      className: "customer__card__user"
    }, /*#__PURE__*/React.createElement("article", {
      className: "customer__card__user__img"
    }, /*#__PURE__*/React.createElement("img", {
      src: user.img
    })), /*#__PURE__*/React.createElement("article", {
      className: "customer__card__user__info"
    }, /*#__PURE__*/React.createElement("h1", null, user.name), /*#__PURE__*/React.createElement("p", null, "Verified Buyer"))), /*#__PURE__*/React.createElement("section", {
      className: "customer__card__content"
    }, `"${user.content}"`))));
  }
};