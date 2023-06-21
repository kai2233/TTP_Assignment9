import React, {useState,useEffect} from "react";
import BankLog from './BankLog';
import { Link, useNavigate } from "react-router-dom";

var BankLogArr=[];
function Credits(props) {
  const [newCreditState, setNewCredit] = useState(0);
    const [descriptionState, setDescriptionState] = useState('');
    const [dateState, setDateState] = useState('');



    const navigate = useNavigate();
    const navigateToBalance = () => {
    console.log("NAVIGATED");
    return navigate("/");
    };

  const changeCredit = () => {
    props.setCreditState(Number(newCreditState)+props.userCredit);
    const creditLog={
      credit:newCreditState,
      description:descriptionState,
      date:dateState,
    };
    BankLogArr.push(creditLog);

  }

  return (
    <div>
      <h2>User Credits Page</h2>
      <button onClick={navigateToBalance}>Go to Account Balance Page</button>
      <h1>Current Account Balance: ${props.userCredit-props.userDebit}</h1>
      <h3>Current Credit Amount: ${props.userCredit}</h3>
      <input type="text" placeholder="Enter new Credit Amount" onChange={e=>{setNewCredit(e.target.value)}}/><br/>
      <input type="text" placeholder="Description" onChange={e=>{setDescriptionState(e.target.value)}}/><br/>
      <input type="date" placeholder="Date" onChange={e=>{setDateState(e.target.value)}}/><br/>
      <button onClick={changeCredit}>Enter</button>
      {BankLogArr.map(creditLog=>{
                return <BankLog Amount={creditLog.credit} description={creditLog.description} date={creditLog.date}/>
      })}
    </div>
  );
}

export default Credits;