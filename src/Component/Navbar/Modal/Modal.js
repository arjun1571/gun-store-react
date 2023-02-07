import React from 'react';

const Modal = (props) => {
    // console.log(props)
    // const {modaldata}=props
    return (
        <div>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="my-modal-3" onClick={()=>props.setModaldata(null)} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h1 className="text-lg font-bold">{props.modaldata.name}</h1>
                <img className='mt-5' src={props.modaldata.img} alt="" />
                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                <h3>Category: {props.modaldata.category}</h3>
                <p>Price: ${props.modaldata.price}</p>
                <p>capacity: {props.modaldata.capacity}</p>

            </div>
            </div>
        </div>
    );
};

export default Modal;