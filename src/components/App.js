import React, {useState} from "react";
import Nav from "./Nav";
import CardGrid from "./CardGrid";
import SortFilter from "./SortFilter";

import hogs from "../porkers_data";

function App() {
	//state variable to track grease sorting for filtering later
	const [isGreased, setIsGreased] = useState(false)
	//a state variable to keep all pigs inside. can add to it later with a form
	const [pigCollection, setPigCollection] = useState(hogs)
	//a state variable to keep track of whether we're sorting by name or weight NOT both
	const [nameOrWeight, setNameOrWeight] = useState(true)

	const pigsToDisplay = pigCollection.filter(pig => !isGreased || pig.greased)
	//inserting a sort method after filtering out greased pigs
		.sort((a, b) => {
			if (!nameOrWeight) {
				return a.weight - b.weight
			}
			//above is a simple sort for weight, below one for alphabetical
			else {
				if (a.name === b.name) return 0;
				return a.name > b.name ? 1 : -1
			}
		})

	return (
		<div className="App">
			<Nav />
			<SortFilter isGreased={isGreased} setIsGreased={setIsGreased} nameOrWeight={nameOrWeight} setNameOrWeight={setNameOrWeight}/>
			<CardGrid pigArray={pigsToDisplay}/>
		</div>
	);
}

export default App;
