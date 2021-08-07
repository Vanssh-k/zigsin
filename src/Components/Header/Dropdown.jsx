import React from "react";
import "./Dropdown.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Dropdown(){
    return(
        
        <div className="dropdown">
    
        <a href="/#">Products<ExpandMoreIcon className="dropdown-icon"/></a>

        <div className="dropdown-content">
        <a href="/#">Link 1</a>
        <a href="/#">Link 2</a>
        <a href="/#">Link 3</a>
        </div>
        </div>

    )
}

export default Dropdown;