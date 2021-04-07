import React from 'react'
const AddMonth = () => {
    return (
    <React.Fragment> 
        <h2>Add Month</h2>
        <select>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
        </select>
        <select>
            <option value='04'>04</option>
            <option value='05'>05</option>
        </select>
        <button>Add month</button>
    </React.Fragment>
    )
}
export default AddMonth

