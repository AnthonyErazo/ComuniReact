import React from "react";
import { Link } from "react-router-dom";

const Button = ({ styles,title,route }) => (
  <Link to={route} type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    {title}
  </Link>
);

export default Button;
