const React = require("react");
const {
  getRequest,
  getSvg
} = require("./XHR.js");
module.exports = function Rate() {
  const [quotes, setQuotes] = React.useState([]);
  const [svg, setSvg] = React.useState("");
  React.useEffect(() => {
    getSvg("./images/icon-star.svg").then(response => {
      const fiveStar = new Array(5).fill(response).join("");
      setSvg(fiveStar);
    }).catch(err => console.log(err));
    getRequest("./public/data.json").then(response => {
      setQuotes(response.rate || []);
    }).catch(err => console.log(err));
  }, []);
  console.log(svg);
  return /*#__PURE__*/React.createElement(React.Fragment, null, quotes.map((quote, index) => /*#__PURE__*/React.createElement("article", {
    className: `rate__type rate__type-${index}`,
    key: index
  }, /*#__PURE__*/React.createElement("div", {
    className: "rate__type__star",
    dangerouslySetInnerHTML: {
      __html: svg
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "rate__type__content"
  }, quote))));
};