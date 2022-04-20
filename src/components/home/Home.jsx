import React from "react";
import "./Home.css";
import Medee from "../medee/Medee";
import Footer from "../footer/Footer";

const Home = (props) => {
return (
    <div>
    <div className="home">
            {props.medeelel.map((el)=>(
            <Medee medeelel1={el}></Medee>
            ))}  
    </div>
    <div><Footer prop={props.medeelel}/></div>
    </div>
)
}
export default Home;