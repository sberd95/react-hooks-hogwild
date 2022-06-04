import react from "react";

function SortFilter({ isGreased, setIsGreased, nameOrWeight, setNameOrWeight }) {
    //function to abstract toggling and dry up onChange attributes
    function handleToggle(){
        setNameOrWeight(!nameOrWeight)
    }

    return (
        <div style={{ marginBottom: '1%' }}>
            <label>Grease Toggle Button: </label>
            <button
                onClick={() => setIsGreased(!isGreased)}>
                {isGreased ? 'Show All Hogs' : 'Show Only Greased Hogs'}
            </button>

            <label style={{marginLeft:'5%'}}>Sort Hogs by Name: </label>
            <input id='nameSort' type='radio' name='filtOpt' checked={nameOrWeight} onChange={handleToggle}/>

            <label style={{marginLeft:'2%'}}>Sort Hogs by Weight: </label>
            <input id='weightSort' type='radio' name='filtOpt' checked={!nameOrWeight} onChange={handleToggle}/>
        </div>
    )
}

export default SortFilter