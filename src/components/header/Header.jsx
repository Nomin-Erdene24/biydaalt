import React from 'react';
import "./Header.css";
import Category from "../category/Category";
import Uni from "../uni/Uni";
import {Link} from "react-router-dom"
const Header = (props) => {
    let types = props.prop.map((el) => el.type);
    types = Uni(types); 
    return (
        <div className="b">
        <div className="Header">
        <div className="homeI">
        <Link to ="/Home"><i class="fas fa-home fa-lg"></i></Link>
        </div>
        <div className="Shiljih">
        {types.map((el) => (
          <Category prop={el}/>
        ))}
        <Link to="/Youtuber"><span className="yellow"><i class="fas fa-search search fa-sm"></i></span></Link>
        <Link to="/Login"><span className="blue"><i class="fas fa-sign-out-alt"></i></span></Link>
        </div>
        </div>
        </div>
    )
}
export default Header;