import react from "react";
import Card from "./Card";
//taking the pigArray state variable and mapping it using the Card component
function CardGrid({pigArray}){
    return (
        <div className='ui grid container'>
            {pigArray.map(pig => {
                return <Card key={pig.name} name={pig.name} specialty={pig.specialty} greased={pig.greased} weight={pig.weight} image={pig.image} medal={pig['highest medal achieved']} />
            })}
        </div>
    )

}

export default CardGrid