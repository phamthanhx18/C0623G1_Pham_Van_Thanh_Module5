import React from 'react';

const Facility = () => {
    const facility = [
        { id: 1, name: 'Hồ bơi' },
        { id: 2, name: 'Bếp nướng' },
        { id: 3, name: 'Tivi' },
    ];

    return (
        <div className="container">
            <h3>Cơ sở vật chất</h3>
            <ul>
                {facility.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Facility;
