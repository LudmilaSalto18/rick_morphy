import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UrlResidents from './UrlResidents';

const Location = () => {
    const [locationById, setLocationById] = useState({})

    const ramdomLocation = Math.floor(Math.random() * 126) + 1;

    const [typeId, setTypeId] = useState('')
    useEffect(() => {
        axios.get(` https://rickandmortyapi.com/api/location/${ramdomLocation}`)
            .then(res => setLocationById(res.data))
    }, [])
    console.log(locationById)

    const searchId = () => {
        //const ramdomLocation = Math.floor(Math.random() * 126) + 1;

        axios.get(` https://rickandmortyapi.com/api/location/${typeId}`)
            .then(res => setLocationById(res.data))

    }
    return (
        <div className='location'>
            {/*INICO DEL HEADER */}

            
                <header className='information'>


                    <div className='descricion'>
                        <h1  >Rick and Morphy</h1>
                    </div>

                    <div className='input-info'>
                        <input className='css-input' type="text" value={typeId} onChange={e => setTypeId(e.target.value)} />
                        <button className='btn' onClick={searchId}> Search </button>
                    </div>
                </header>

            

            
            {/*FIN DEL HEADER */}

             {/*INICIO DE LOCALICIONES */}
            <section className='secion-location'>
               <div className='location-name' > <h1> {locationById.name} </h1> </div>
               <div className='location-habitans'>
                   <p> <b>Type:</b>  {locationById.type} {' '} </p> 
                   <p> <b>Dimension:</b> {locationById.dimension} {' '} </p> 
                  <p> <b> Population: </b>  {locationById.residents?.length} {' '} </p>  
               </div>
            </section >
            {
                 
                    <ul>
                   
                    </ul> 
            
            }

            {/*INICIO DE INFORMACION DE LOS RESIDENTES */}

            <div className='container'>
            {
                        locationById.residents?.map(chracters => (
                          <UrlResidents chracters={chracters} key={chracters} />
                        ))
                    }
            </div>
        </div>

    );
};

export default Location;
/*
               <header className='first_header'>
           
            </header>
            
            
            <section>
                <h1>hola</h1>
            </section>
 */