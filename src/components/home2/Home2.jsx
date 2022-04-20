import React from "react";
import "./Home2.css";
import Medee2 from "../medee2/Medee2";

const Home2 = (props) => {
return (
    <div className="home1">
        {props.medeelel.map((el)=>(
        <Medee2 medeelel1={el}></Medee2>
        ))}  
    </div>
)
}
export default Home2;