import React from "react";

function Button(props){

    const whichBtn = props.style;

    if(whichBtn === "Tile"){
        var styleBtn = {
            borderRadius : "50px",
            background: "linear-gradient(145deg, #ffffff, #e6e6e6)",color : "#000",
            padding : "10px 30px",textTransform : "Uppercase",
            cursor:"pointer"
        }
    }else{
            var styleBtn = {
                borderRadius : "50px",
                padding : "10px 25px",textTransform : "Uppercase",
                cursor:"pointer",
                background:" rgb(255,125,121)",
                backgroundColour: "linear-gradient(90deg, rgba(255,125,121,1) 0%, rgba(255,137,93,1) 100%)",
                color: "#FFF",
                border : "none"
            }
        }
    
    return(
        <button className="" style={styleBtn}>{props.name}</button>
    )
}

export default Button;