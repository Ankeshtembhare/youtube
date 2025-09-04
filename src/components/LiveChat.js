import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addmessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
     const dispatch = useDispatch();
     const chatmessage = useSelector((store)=>store.chat.message);
     const [liveMessage,setliveMessage] =useState("");

    useEffect(()=>{
       
        const i = setInterval(()=>{
            //api polling
            

            dispatch(addmessage({
                name:generateRandomName(),
                message:makeRandomMessage(20)+"⭐",
            }));
        },2000);

        return ()=> clearInterval(i);
    },[]);
     
  return (
    <>
   
    <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        <div>
        {chatmessage.map((c,i)=>
        <ChatMessage
        key={i}
         name={c.name}
         message={c.message} 
         />)}
         </div>
     </div>
      <form
       className='w-full p-2 ml-2 border flex border-black' 
      onSubmit={(e)=>{e.preventDefault();
        dispatch(addmessage({
            name:"herosika",
            message:liveMessage,
        }))
        setliveMessage("");
      }}>
        <input className='px-2 w-96' type='text' value={liveMessage}  
        onChange={(e)=>{
            setliveMessage(e.target.value )
        }}/>
        <button className='px-2 mx-2 bg-gray-100'
        >send</button>
      </form>

      </>
  )
}

export default LiveChat;