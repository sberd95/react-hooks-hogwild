import react, {useState} from "react";
//importing all pig properties and putting them in the card so they can be revealed later
function Card({name, specialty, greased, weight, image, medal}){
    const [displayState, setDisplayState] = useState(false)
    const [hidden, setHidden] = useState(false)

    function handleClick(){
        setDisplayState(!displayState)
    }
    return (
    <div onClick={handleClick} className="ui eight wide column" style={hidden ? {display:'none'} : {display:'block'}}>
        <img src={image} height='300px'/>
        <h1>{name}</h1>
        <div style={displayState ? {display:'block'} : {display:'none'}}>
            <p>Specialty: {specialty}</p>
            <p>Greased: {greased ? 'Yes' : 'No'}</p>
            <p>Weight: {weight}</p>
            <p>Highest Medal Achieved: {medal.charAt(0).toUpperCase() + medal.slice(1)}</p>
        </div>
        <button onClick={() => setHidden(!hidden)}>Hide Hog</button>
    </div>
    )
}

export default Card