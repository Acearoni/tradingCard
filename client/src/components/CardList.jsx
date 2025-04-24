import React from 'react';

const CardList = ({ collection }) => {
    return (
        <div>
            <h2>Your Collection</h2>
            {collection.length === 0 ? (
                <p>No cards yet. Open a pack!</p>
            ) : (
                collection.map((card) => (
                    <div key={card._id}>
                        <p><strong>{card.cardName}</strong> - {card.hometown}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default CardList;
