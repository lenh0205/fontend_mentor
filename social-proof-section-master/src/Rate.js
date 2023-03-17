const React = require("react");
const { getRequest, getSvg } = require("./XHR.js");

module.exports = function Rate() {
  const [quotes, setQuotes] = React.useState([]);
  const [svg, setSvg] = React.useState("");
  React.useEffect(() => {
    getSvg("./images/icon-star.svg")
      .then((response) => {
        const fiveStar = new Array(5).fill(response).join("");
        setSvg(fiveStar);
      })
      .catch((err) => console.log(err));

    getRequest("./public/data.json")
      .then((response) => {
        setQuotes(response.rate || []);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(svg);
  return (
    <React.Fragment>
      {quotes.map((quote, index) => (
        <article className={`rate__type rate__type-${index}`} key={index}>
          <div
            className="rate__type__star"
            dangerouslySetInnerHTML={{ __html: svg }}
          ></div>
          <div className="rate__type__content">{quote}</div>
        </article>
      ))}
    </React.Fragment>
  );
};
