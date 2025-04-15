import { useState } from 'react'
import './App.css'
import axios from "axios"
import { useEffect } from 'react'
function App() {
  let [message,setMessage] = useState("")
  // around 25 seconds to get the latest commit in the github and fetch it and display it
  /** And it is pull based model as after a few seconds we get the response from the github server or any server
   messaging back that there where some changes made and this method is like we can either hit the 
   rate limit (so rate limit is applied to ensure overall performance of the api platform) or 
   wasting resources unnecessarily
   */
  useEffect(() => {
    const fetchCommits = async () => {
        const res = await axios.get(import.meta.env.VITE_SERVER_LINK);
        const commitmessage  = res.data.map(commit=> commit.commit.message);
        console.log(commitmessage);
        setMessage(commitmessage[0]);
    };
    fetchCommits();
  }, []);
  
  return (
    <>  
    <h1>{message?message:"Hello World"}</h1>
    </>
  )
}

export default App
