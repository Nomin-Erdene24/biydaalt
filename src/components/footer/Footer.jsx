import React from 'react';
import "./Footer.css";
// import {Link} from "react-router-dom";
const Footer = (props) => {
  // let link = `/${props.prop.type}/${props.prop.id}`;
    return (
      <div>
       <div className="Footer1">
        <div className="Ontsloh">ШИЛДЭГ YOUTUBER-ҮҮД</div>
        <div className="loogo"><div className="text">Таны үзэх дуртай монголын хамгийн nice контентууд</div><i className="ytI" class="fab fa-youtube"></i></div>
       </div>
       {/* <Link to={link}>
       <div className="container11">
       <div className="ggg1"><img src={props.prop.zurag} alt="zurag" className="zurag1"/></div>
       <div className="ner1">{props.prop.ner} <span className="check"><i class="fas fa-check"></i></span><div className="sub">529K subscribers</div></div>
       <div className="hover1">
        <div className="nam11"></div>
       </div>
       <div className="hover2">
       <div className="nam22"></div>
       </div>
       </div>
       </Link> */}
      </div>
    )
}
export default Footer;