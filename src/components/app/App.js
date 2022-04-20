import "./App.css";
import React from "react";
import Nomin from "../ugugdul/Ugugdul";
import Header from "../header/Header";
import Home from "../home/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import Ylgah from "../ylgah/Ylgah";
import Uni from "../uni/Uni";
import Filter from "../filter/Filter";
import Login from "../login/Login";
import Register from "../register/Register";
import Youtuber from "../youtuber/Youtuber";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ugugdul: Nomin,
    };
  }
  render() {
    let cats = [];
    cats = this.state.ugugdul.map((el) => el.type);
    cats = Uni(cats);
    return (
      <HashRouter>
        <div>
          <div>
            <Header prop={this.state.ugugdul} />
            <Routes>
              <Route path="/" exact element={<Register />} />
              <Route
                path="/Home"
                exact
                element={<Home medeelel={this.state.ugugdul} />}
              />
              <Route path="/Login" exact element={<Login />} />
              <Route path="/Youtuber" exact element={<Youtuber />} />
              {cats.map((el) => {
                return (
                  <Route
                    path={`/${el}`}
                    exact
                    element={<Filter prop={this.state.ugugdul} />}
                  />
                );
              })}
              {this.state.ugugdul.map((el) => {
                return (
                  <Route
                    path={`/${el.type}/${el.id}`}
                    exact
                    element={<Ylgah prop={this.state.ugugdul} />}
                  />
                );
              })}
            </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
