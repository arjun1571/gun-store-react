import React from 'react';

const SingleGun = (props) => {
    const {name,img}=props.gun
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">Add TO Cart</div> 
                    <div className="badge badge-outline">Delete</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleGun;