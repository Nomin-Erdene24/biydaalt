import React from "react";
import "./Register.css";
import {Link} from "react-router-dom";
import axios from "../../axios";
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
      button: true,
    };
  }
  componentDidMount1 = () => {
    this.setState({button : !this.state.button});
    const data = {
      email: this.state.email,
      password: this.state.password,
      returnSecureToken: true,
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDGtEMApXCksXIofQkAloTCvlK65LkVlmM",
        data
      )
      .then((result) => {
        console.log(result);
        this.setState({ error: "bvtgel amjilttai" });
        this.props.history.replace("/Login");
      })
      .catch((err) => {
        this.setState({ error: "Bayraad hairtai2" });
      });
  }
  findE = (e) => {
    this.setState({ email: e.target.value });
  };
  findP = (e) => {
    this.setState({ password: e.target.value });
  };
  render() {
    return (
      <div>
        <div className="Hvree">
          <div className="Loginnn">
            <h1>Register</h1>
          </div>
          <div className="sain">
            <input type="text" placeholder="e-mail" onChange={this.findE} />
          </div>
          <div className="sain">
            <input type="text" placeholder="password" onChange={this.findP} />
          </div>
          <div>{this.state.error}</div>
          <Link to="/Login">
            <div className="sea">
            <button onClick={this.componentDidMount1}>Бүртгүүлэх</button>
          </div>
          </Link>
          <Link to={ this.state.button ? "/Login" : "/"}>
            <div className="sea">
            <button onClick={this.componentDidMount1}>Нэвтрэх</button>
          </div>
          </Link>

        </div>
      </div>
    );
  }
}
export default (Register);