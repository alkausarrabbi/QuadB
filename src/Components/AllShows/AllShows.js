import React, { useEffect, useState } from 'react';
import AllShow from '../AllShow/AllShow';

const AllShows = () => {
    const [infos,setInfos]=useState([]);
    useEffect(()=>{
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setInfos(data);
        });
    },[])
    return (
        <div className='Container mt-5 mb-5 p-5'>

            <div className='row ms-5'>
            
                {
                    infos.map(info=><AllShow info={info} key={info.show.id}></AllShow>)
                }
          
            </div>
            
        </div>
    );
};

export default AllShows;