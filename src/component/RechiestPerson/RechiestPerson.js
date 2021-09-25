import React from 'react';
import './RechiestPerson.css';
const RechiestPerson = (props) => {
    // console.log(props.rechiestPerson);
    const addToBillionerClub = props.addToBillionerClub;
    const {name,age,imgUrl,netWorth,founderOf,OtherAsset} = props.rechiestPerson ;
    return (
        <div className="col-md-4">
            
                <div className="card h-100 fixed-card rounded-3 card-area">
                    <img src={imgUrl}  alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Name: {name}</h5>
                        <h6> <b>Age:</b> {age}</h6>
                        <h6> <b> Net Worth: $</b>{netWorth}</h6>
                        <h6> <b>Founder:</b> {founderOf}</h6>
                        <p> <b>Other Asset: </b><small>{OtherAsset.slice(0, 150)}</small></p>
                        <button onClick={()=>addToBillionerClub(props.rechiestPerson)} className="btn btn-color"><i className="fas fa-coins"></i> Add To Club</button> 
                    </div>
                </div>
            
        </div>
    );
};

export default RechiestPerson;