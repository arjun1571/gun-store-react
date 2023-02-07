import React from 'react';
import "./SingleGun.css"

const SingleGun = (props) => {
    console.log(props);
    const {name,img,price,category}=props.gun
    return (
        <div className='my-10 mx-auto' >
            <div className="card w-96 bg-base-100 shadow-xl ">
            <figure><img className='img' src={img} alt="Shoes" /></figure>
                <div className="card-body ">
                    <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Price:${price}</p>
                    <p>Category: {category}</p>
                    <div className="card-actions justify-end">
                    <div className="btn btn-accent">Add TO Cart</div> 
                    <div className="btn btn-outline btn-error">Delete</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleGun;