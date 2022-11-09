import axios from 'axios';
import React, { useEffect, useState } from 'react';




const UrlResidents = ({ chracters }) => {
    const [residents, setResidents] = useState({})

    useEffect(() => {
        axios.get(chracters)
            .then(res => setResidents(res.data))
    }, [])
    console.log(residents)
    return (
        <div className='conteiner-residents'>
            <div >  
                 <img src={residents.image} alt="" />
            </div>
            <div > 
                <h2> {residents.name} </h2>
                <h3>  Status:  {residents.status}  </h3> 
                <h3> Origin: {residents.origin?.name} </h3> 
                <h3> Episodes: {residents.episode?.length} </h3>
             </div>
        </div>
    );
};

export default UrlResidents;