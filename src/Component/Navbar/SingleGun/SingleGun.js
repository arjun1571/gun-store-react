import React from 'react';
import Modal from '../Modal/Modal';
import "./SingleGun.css"

const SingleGun = (props) => {

    console.log(props);
    console.log(props.increseCart);
    const {gun,increseCart}=props
    const {name,img,price,category}=gun
    
    
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
                    <div onClick={()=>increseCart()}  className="btn btn-accent">Add TO Cart</div> 
                    {/* <div className="btn btn-success">Details</div> */}
                    <label htmlFor="my-modal-3" className="btn btn-success">open modal</label>
                    </div>
                    <Modal></Modal>
                </div>
            </div>
        </div>
    );
};

export default SingleGun;