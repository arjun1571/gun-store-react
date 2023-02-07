import React, { useEffect, useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';
import "./AllGun.css"

const AllGun = () => {

    const [gun,setGuns]=useState([])

    useEffect(()=>{
        fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
        .then(res=>res.json())
        .then(data=>setGuns(data))
    },[])

    return (
        <div>
            <h1 className='text-center mt-5 font-bold text-3xl'>Wellcome to Gun Store bangladesh</h1>
            <p className='text-center mt-2'>MH Arms co is a Bangladesh government authorized Fire arms,ammunitions and accessories dealer..We import pistol, revolver, short gun, rifle, air gun</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10'>
            {
                gun.map(gun => <SingleGun gun={gun} key={gun.id}></SingleGun>)
            }
            </div>
            
        </div>
    );
};

export default AllGun;