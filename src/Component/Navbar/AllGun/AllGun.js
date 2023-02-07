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
            {
                gun.map(gun => <SingleGun gun={gun}></SingleGun>)
            }
            {/* <h1>this is all gun</h1>
            <h1>{gun.length}</h1>
            <SingleGun></SingleGun> */}
        </div>
    );
};

export default AllGun;