import picture from "./assets/a.jpg"

function Card() {
    return (
        <div className = "card">
            <img className = "card-image" src =  {picture}  alt= "this i alter text"></img>
            <h2>this is card</h2>
            <p>this is description</p>
        </div>
    );
}
export default Card