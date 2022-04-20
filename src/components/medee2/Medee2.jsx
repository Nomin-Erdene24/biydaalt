import React from "react";
import "./Medee2.css";
import {Link} from "react-router-dom";
const Medee2 = (props)=>{
    let link = `/${props.medeelel1.type}/${props.medeelel1.id}`;
return (
<Link to={link}>
    <div className="container1">
       <div className="ggg1"><img src={props.medeelel1.zurag} alt="zurag" className="zurag1"/></div>
       <div className="ner1">{props.medeelel1.ner} <span className="check"><i class="fas fa-check"></i></span><div className="sub">529K subscribers</div></div>
       <div className="hover1">
        <div className="nam11"></div>
       </div>
       <div className="hover2">
       <div className="nam22"></div>
       </div>
    </div>
</Link>
)
}
export default Medee2;