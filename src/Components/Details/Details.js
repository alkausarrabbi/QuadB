import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    let {id } = useParams();
    const [details,setdetails]=useState([]);
    const [info,setInfo]=useState([]);
    useEffect(()=>{

        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(res=>res.json())
        .then(data=>{
            setdetails(data);
            
        })

    },[]);

    useEffect(() => {
        const found = details.find(
          (detail) =>detail.show.id === parseInt(id)
        );
        setInfo(found);
        
      }, [details]);
console.log(info)
    return (
        <div className='container mt-5 mb-5 p-5 border border-2 rounded'style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
           <h2 className='mb-3 text-info'>Title : {info?.show?.name}</h2>
           <img src={info?.show?.image.original} alt="" style={{width:"25%"}}  className='mb-3'/>
          
           <p >{info?.show?.summary}</p>

       
        </div>
    );
};

export default Details;