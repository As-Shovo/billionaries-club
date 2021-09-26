import React from 'react';
import './BillionerClub.css';

const BillionerClub = (props) => {
    console.log(props.person);
    const {name, netWorth, imgUrl} = props.person;
    // total net Worth in the Club

    return (
        <div className='club-membar'>
            <div><img src={imgUrl} alt="" /></div>
            <div className='membar-info'>
                <h5>Name: {name}</h5>
                <h6>Net Worth: ${netWorth}</h6>
            </div>
        </div>
    );
};

export default BillionerClub;