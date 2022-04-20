import React from "react";
import "./Youtuber.css";
import {Link} from "react-router-dom";
import axios from "axios"
class Youtuber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      ner: "",
      type: "",
      zurag: "",
      video: "",
      yt: "",
      delgerengvi: "",
    };
  }
  findId = (e) => {
    this.setState({ id: e.target.value });
  };
  findNer = (e) => {
    this.setState({ ner: e.target.value });
  };
  findType = (e) => {
    this.setState({ type: e.target.value });
  };
  findZurag = (e) => {
    this.setState({ zurag: e.target.value });
  };
  findVideo = (e) =>{
    this.setState({ video: e.target.value });
  }
  findYt = (e) => {
    this.setState({ yt: e.target.value });
  };
  findDelgerengvi = (e) => {
    this.setState({ delgerengvi: e.target.value });
  };
  componentDidMount1 =()=> {
      console.log("nemeh heseg amjilttai");
      const data = {
          id: this.state.id,
          ner: this.state.ner,
          type: this.state.type,
          zurag: this.state.zurag,
          video: this.state.video,
          yt: this.state.yt,
          delgerengvi: this.state.delgerengvi,
      };
      console.log(data);
      axios 
      .post("https://biydaalt-e95dd-default-rtdb.firebaseio.com/youtuber.json", data)
      .then(()=>{
          console.log("nomio huurhun");
      })
      .catch(()=>console.log("aldaaa"));
  }
  render() {
    return (
      <div>
        <div className="Hvree">
          <div className="Loginnn">
            <h1>Youtuber nemeh</h1>
          </div>
          <div className="sain">
            <input type="text" placeholder="id" onChange={this.findId} />
          </div>
          <div>{this.state.id}</div>
          <div className="sain">
            <input type="text" placeholder="ner" onChange={this.findNer} />
          </div>
          <div className="sain">
            <input type="text" placeholder="type" onChange={this.findType} />
          </div>
          <div className="sain">
            <input type="text" placeholder="zurag" onChange={this.findZurag} />
          </div>
          <div className="sain">
            <input type="text" placeholder="video" onChange={this.findVideo} />
          </div>
          <div className="sain">
            <input type="text" placeholder="yt" onChange={this.findYt} />
          </div>
          <div className="sain">
            <input type="text" placeholder="delgerengvi" onChange={this.findDelgerengvi} />
          </div>
          <Link to="/Home">
            <div className="sea">
            <button onClick={this.componentDidMount1}>Нэмэх</button>
          </div>
          </Link>
        </div>
      </div>
    );
  }
}
export default Youtuber;