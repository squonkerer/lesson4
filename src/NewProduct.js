import { useState } from "react"

function NewProduct({addProduct}) {
    const [description, setDescription] = useState('')
    const [unit, setUnit] = useState('')
    const [amount, setAmount] = useState('')
    const submitValues = () => {
        console.log('sumbit');
        addProduct({description, unit, amount})
        setDescription('')
        setUnit('')
        setAmount('')
    }

    return (
        <>
        <div className="row">
            <input 
                className="col-8 col-sm-4" 
                placeholder="new product" 
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <input 
                className="col-2" 
                placeholder="unit" 
                value={unit}
                onChange={(event) => setUnit(event.target.value)}
            />
            <input 
                className="col-2" 
                placeholder="amount" 
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
            />
            <button 
                className="col-2"
                onClick={submitValues}
            >
                Add
            </button>
        </div>
        </>
    )
}

export default NewProduct