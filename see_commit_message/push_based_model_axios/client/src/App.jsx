import React, { useEffect, useState } from 'react';
import "./App.css"
import axios from "axios";
const App = () => {
  /**
   * It is a push based model in which we are push with the request
   Using webhooks github server or any server will now send request to us so in any event we were interested back then 
   it will send us a request once that event occure.
   */
   const [messages, setMessages] = useState([]);
   useEffect(() => {
  const fetch = async()=>{
    const fetchData = await axios.get(import.meta.env.VITE_SERVER_LINK)
    setMessages(fetchData)}
    fetch();
   }, []);
    /** HTML CODING */
    
  return (
    <>
      <div>
      <h1>{messages.data?.length>0?messages.data[0].message:"please commit to see commit message"}</h1>
    </div>
    </>
  )
}

export default App
