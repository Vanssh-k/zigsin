import React from "react";
import Button from "../UI/Button";
import "./Banner.css";

function Banner(){

    var bannerStyle = {
        width: "100%",
        height: "400px",
        backgroundImage: `url("/images/banner-img.png")`,
        backgroundRepeat : "no-repeat",
        backgroundSize : "Cover",
        display:"flex",
        justifyContent : "center"
      };

    return(
        <React.Fragment>
            <div className="banner" style={bannerStyle}>
             <div className="cover">
                <h1>The gift of Happiness</h1>
                <p>Show your gratitude with one of our gift sets, large and small, specially designed to spread joy to someone you love.</p>
                <Button name="Shop Now" style="Banner" />
             </div>
            </div>
        </React.Fragment>
    )
}

export default Banner;