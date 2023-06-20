import React, {useState,useEffect} from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";


function Credits() {

    const [searchStateCredit, setSearchStateCredit] = useState('');
    const fetchInfoCredits = () =>{
        async function fetchInfo(){            
            const result = await axios.get(`https://bank-of-react-bxbys1cq8-ajlapid718.vercel.app/credits`);
            setSearchStateCredit(result);
        }
        fetchInfo();
    }
    console.log(searchStateCredit);

  return (
    <div>
      <h2>User Credits</h2>
      <button onClick={fetchInfoCredits}>Fetch Credits</button>
    </div>
  );
}

export default Credits;