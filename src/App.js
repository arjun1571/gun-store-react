import { useState } from 'react';
import './App.css';
import AllGun from './Component/Navbar/AllGun/AllGun';
import Navbar from './Component/Navbar/Navbar';

function App() {
  const [count,setCount]=useState(0)
  const increseCart=()=>{
    setCount(count + 1)
  }
  return (
    <div >
      <Navbar count={count}></Navbar>
      <AllGun increseCart={increseCart}></AllGun>
    </div>
  );
}

export default App;
