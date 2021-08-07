import React from "react";
import "./Header.css";
import Dropdown from "./Dropdown";
import Button from "../UI/Button";
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
      <React.Fragment>
      <nav className="navbar">
        <div>
            <Dropdown />
            <a href="/#">Collections</a>
            <a href="/#">Gifts</a>
            <a href="/#">Our Magazine</a>
        </div>
        <div>
            <SearchIcon className="Search"/>
            <a href="/#">Login</a>
            <Button name="Sign Up" style="header"/>
        </div>
      </nav>
      </React.Fragment>
    );
  }
  
  export default Header;
  