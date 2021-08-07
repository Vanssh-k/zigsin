import Card from "../UI/Card";
import "./Tile.css";
import Button from "../UI/Button";

function Tile(props){
    
    return(
        <Card>
            <div className="tile">
                <div style={{padding:"10px 40px 30px"}}>
                    <h1>Ready for autumn collection</h1>
                    <p>Treat yourself to some of our brand new automn collection - all with the wonderfull colours surrounging you.</p>
                    <Button style="Tile" name="Purchase Now"/>
                </div>
                <img alt="product images" src={"/images/"+ props.image +'.png'}></img>
            </div>
        </Card>
    )
}

export default Tile;