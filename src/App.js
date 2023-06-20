import React, {useState,useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Credits from "./components/Credits";
import Debits from "./components/Debits";
import Home from "./components/Home";

function App() {

  const [creditState, setCreditState] = useState(0);
  const [debitState, setDebitState] = useState(0);
  useEffect(() => {
        async function fetchInfoCredit(){            
            const result = await axios.get(`https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits`);
            setCreditState(result.data);
        }
        fetchInfoCredit();
        async function fetchInfoDebit(){            
            const result = await axios.get(`https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits`);
            setDebitState(result.data);
        }
        fetchInfoDebit();
  },[]);
  console.log(creditState);
  console.log(debitState);

  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/credits">User credits</Link>
            </li>
            <li>
              <Link to="/debits">User debits</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home userCredit = {creditState} userDebit = {debitState}/>} />
          <Route path="/credits/*" element={<Credits/>} />
          <Route path="/debits/*" element={<Debits/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
