import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";
const Category = (props) => { 
  let str = `/${props.prop}`; 
  return (
    <div className="cate">
      <div className="snowI"><i class="far fa-snowflake fa-sm"></i></div><div><Link to={str}>{props.prop}</Link></div>
    </div>
  );
};
export default Category;