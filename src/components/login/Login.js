import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
      button: true,
    };
  }
  login = () => {
    const data = {
      email: this.state.email,
      password: this.state.password,
      userId: "",
      returnSecureToken: true,
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDGtEMApXCksXIofQkAloTCvlK65LkVlmM",
        data
      )
      .then((result) => {
        console.log("iishee orloo");
        this.setState({ userId: result.data.localId });
        this.props.getIDaction(this.state.userId);
      })
      .catch((err) => {
        this.setState({ error: "Bayraad hairtai" });
      });
  };
  findE = (e) => {
    this.setState({ email: e.target.value });
  };
  findP = (e) => {
    this.setState({ password: e.target.value });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <div className="Hvree">
          <div className="Loginnn">
            <h1>LOGIN</h1>
          </div>
          <div className="sain">
            <input type="text" placeholder="e-mail" onChange={this.findE} />
          </div>
          <div>gggg</div>
          <div className="sain">
            <input type="text" placeholder="password" onChange={this.findP} />
          </div>
          <Link to="/Home">
            <div className="sea">
              <button onClick={this.login}>Нэвтрэх</button>
            </div>
          </Link>
          <Link to={this.state.button ? "/" : "/Login"}>
            <div className="sea">
              <button onClick={this.componentDidMount1}>Бүртгүүлэх</button>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
export default Login;
