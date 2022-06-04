import react, {useState} from "react";

function NewHogForm({addNewHog}) {
    const [formData, setFormData] = useState({
        name:'',
        specialty:'',
        greased:false,
        weight:0,
        'highest medal achieved':'wood',
        image:''
    })

    function handleChange(e) {
        const name = e.target.name
        let value = e.target.value
        if (e.target.type === 'checkbox') {
            value = e.target.checked
        }
        setFormData({...formData, [name]:value})
    }

    function handleSubmit(e) {
        console.log(formData)
        e.preventDefault()
        addNewHog(formData)
    }

    return (
        <div style={{ marginBottom: '3%', borderStyle: 'solid', padding:'5px'}}>
            <h3>New Hog Registration:</h3>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input name='name' type='text' onChange={handleChange} value={formData.name}/>

                <label style={{ marginLeft: '2%' }}>Specialty: </label>
                <input type='text' name='specialty' onChange={handleChange} value={formData.specialty}/>

                <label style={{ marginLeft: '2%' }}>Greased </label>
                <input type='checkbox' name='greased' checked={formData.greased} onChange={handleChange} value={formData.greased}/>

                <label style={{ marginLeft: '2%' }}>Weight: </label>
                <input type='number' name='weight' onChange={handleChange} value={formData.weight}/>

                <label style={{ marginLeft: '2%' }}>
                    Highest Medal Achieved:
                    <select name='highest medal achieved' onChange={handleChange} value={formData['highest medal achieved']}>
                        <option>Wood</option>
                        <option>Bronze</option>
                        <option>Silver</option>
                        <option>Gold</option>
                        <option>Platinum</option>
                        <option>Diamond</option>
                    </select>
                </label>

                <label>Image Link: </label>
                <input type='text' name='image' onChange={handleChange}/>
                <br/>
                <input type='submit'/>
            </form>
        </div>
    )
}

export default NewHogForm