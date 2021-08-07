import React from "react";
import Tile from "./Tile";
import "./Tiles.css";


function Tiles(){
    return(
      <div className="tiles">
        <Tile image="bag"/>
        <Tile image="lady"/>
      </div>  
    );
}

export default Tiles;