import React from 'react';
import { Link } from 'react-router-dom';


const AllShow = ({info}) => {

    return (
        <div className='col-lg-4 col-md-6 col-12 mb-3'>
             <div className="card" style={{width:"18rem"}}>
  <img src={info.show.image.original} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-danger fs-3" >{info.show.name}</h5>
    <div className='row'>
    <p className="card-text col-6 text-success">Status: {info.show.status}</p>
    <p className="card-text col-6 ">Status: {info.show.runtime}</p>
    </div>
    <div className='row'>
    <p className="card-text col-7 ">Premiered: {info.show.premiered}</p>
    <p className="card-text col-5 ">Rating: {info.show.rating.average}</p>
    </div>
   
    <Link to={`/${info.show.id}`}>
         <button type="button" class="btn btn-outline-info">Details</button>
         </Link >
  </div>
</div>
        </div>
      
    );
};

export default AllShow;