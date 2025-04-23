import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const CreateCard = (props) => {

    const navigate = useNavigate();
    const [cardName, setCardName] = useState("");
    const [hometown, setHometown] = useState("");
    const [weight, setWeight] = useState(100);
    const [finisher, setFinisher] = useState("");
    const [errors, setErrors] = useState("");

    const submitHandler = (e) => {
        e.preventDefault()
        const newCard = { cardName, hometown, weight, finisher }
        axios.post('http://localhost:8000/api/cards', newCard)
            .then((response) => {
                console.log(response)
                navigate('/')
            })
            .catch((err) => {
                console.log(err.response.data.errors)
                setErrors(err.response.data.errors)
            })
    }

    return (
        <div>
            <h2>Add Your Card!</h2>
            <form onSubmit={submitHandler}>
                <label>Name:</label>
                <input type="text" onChange={(e) => setCardName(e.target.value)} value={cardName} />
                {
                    errors.cardName ?
                        <p>{errors.cardName.message}</p> :
                        null
                }

                <label>Hometown: </label>
                <input type="text" onChange={(e) => setHometown(e.target.value)} value={hometown} />
                {
                    errors.hometown ?
                        <p>{errors.hometown.message}</p> :
                        null
                }

                <label>Weight: </label>
                <input type="number" onChange={(e) => setWeight(e.target.value)} value={weight} />
                {
                    errors.weight ?
                        <p>{errors.weight.message}</p> :
                        null
                }

                <label>Finisher: </label>
                <input type="text" onChange={(e) => setFinisher(e.target.value)} value={finisher} />
                {
                    errors.finisher ?
                        <p>{errors.finisher.message}</p> :
                        null
                }

                <button>SUBMIT</button>

            </form>
        </div>
    );
}

export default CreateCard;