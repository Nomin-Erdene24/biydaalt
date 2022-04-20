import React from "react";
import "./Medee.css";
import {Link} from "react-router-dom";
// const m=11;
const Medee = (props)=>{
    let link = `/${props.medeelel1.type}/${props.medeelel1.id}`;
return (
<Link to={link}>
    <div className="container">
    <div className="ggg"><img src={props.medeelel1.zurag} alt="zurag" className="zurag"/></div>
    <div className="hoverR">
        <div className="nam1"></div>
        <div className="nam2"></div>
    </div>
    <div className="ner">{props.medeelel1.ner}</div>
    <h2 className="type">{props.medeelel1.type}</h2>
    <div className="delgerengvi">{props.medeelel1.delgerengvi}</div>
    <div className="icon">
        <div>
        <p><i class="far fa-star"></i></p>
        <p>3.0</p>
        </div>
        <div className="gol">
            <p><i class="fas fa-user"></i></p>
            <p>1</p>
        </div>
    </div>
    </div>
</Link>
)
}
export default Medee;