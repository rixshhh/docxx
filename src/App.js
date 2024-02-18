import './App.css';
import Background from './components/Background';
import Foreground from './components/Foreground';
import Modal from './components/Modal';
import { RiFileAddFill } from "react-icons/ri";
import { useState } from 'react';


function App() {

  const [showModal,setShowModal] =useState(false)


  return (
    <div className="relative w-full h-screen bg-zinc-800">
     <Background/>
     <Foreground/>

     <button className="fixed top-[90%] left-0 z-[5] w-full h-full flex gap-5 flex-wrap p-5" onClick={()=> setShowModal(true)} >
        <span  className="w-8 h-8 bg-zinc-600 rounded-full flex items-center justify-center">
        <RiFileAddFill size=".9em" color="#fff" />
        </span>  
      </button>
     {showModal && <Modal onclose={()=> setShowModal(false)}/> }  
    </div>
  );
}

export default App;
