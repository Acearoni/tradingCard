import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DisplayPacks = ({ setCollection }) => {
    const [packs, setPacks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/allPacks')
            .then(res => setPacks(res.data))
            .catch(err => console.log(err));
    }, []);

    const openPack = (packId) => {
        axios.get(`http://localhost:8000/api/openPack/${packId}`)
            .then(res => {
                setCollection(prev => [...prev, ...res.data.cards]);
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h2>Packs</h2>
            {packs.map((pack) => (
                <div key={pack._id}>
                    <button onClick={() => openPack(pack._id)}>Open Pack</button>
                </div>
            ))}
        </div>
    );
};

export default DisplayPacks;
