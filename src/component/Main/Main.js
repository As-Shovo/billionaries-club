import React, { useEffect, useState } from 'react';
import BillionerClub from '../BillionerClub/BillionerClub';
import RechiestPerson from '../RechiestPerson/RechiestPerson';
import './Main.css';


const Main = () => {

    const [rechiestPersons,setRechiestPerson]= useState([]);
    const [addPerson,setAddPerson] = useState([]);

    useEffect(()=>{
        fetch('./fakeDb.JSON')
        .then(res => res.json())
        .then(data => setRechiestPerson(data))
    },[])

// console.log(rechiestPersons);


        const addToBillionerClub = (person)=>{
            const newAddPerson = [...addPerson, person];
            setAddPerson(newAddPerson);
        }
// Total net Worth 
        let total = 0 ;
        for(const person of addPerson){
            total = total + person.netWorth;
        }
        // console.log(total);





    return (
        <div className='container'>
            <div className="row main-section">
                <div className="col-md-9">
                    {/* cards section  */}
                    
                    <div className="row gy-3">
                        {
                            rechiestPersons.map(rechiestPerson => <RechiestPerson key={rechiestPerson.id} rechiestPerson={rechiestPerson} addToBillionerClub={addToBillionerClub}></RechiestPerson>)
                        }
                    </div>
                </div>
                <div className="col-md-3 rounded-3 card-area club">
                    {/* member section  */}
                    <h2>Billionaires Club memebers: {addPerson.length}</h2>
                    <h3>Billionaires Club Net Worth : ${total}</h3>
                    {
                        addPerson.map(person =><BillionerClub key={person.id} person={person}></BillionerClub>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Main;