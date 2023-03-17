const React = require("react");
const { getRequest } = require("./XHR.js");

module.exports = class Customer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    getRequest("../public/data.json")
      .then((response) => {
        this.setState({ users: response.card });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <React.Fragment>
        {this.state.users.map((user, index) => (
          <article
            className={`customer__card customer__card-${index}`}
            key={index}
          >
            <section className="customer__card__user">
              <article className="customer__card__user__img">
                <img src={user.img} />
              </article>
              <article className="customer__card__user__info">
                <h1>{user.name}</h1>
                <p>Verified Buyer</p>
              </article>
            </section>
            <section className="customer__card__content">
              {`"${user.content}"`}
            </section>
          </article>
        ))}
      </React.Fragment>
    );
  }
};
