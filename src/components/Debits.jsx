import React, {useState,useEffect} from "react";
import BankLog from './BankLog';
import { Link, useNavigate } from "react-router-dom";

//array to store all the add debit transactions
var BankLogArr=[];
function Credits(props) {
    //hook for user input debits
    const [newDebitState, setNewDebit] = useState(0);
    //hook for user input description
    const [descriptionState, setDescriptionState] = useState('');
    //hook for user input date
    const [dateState, setDateState] = useState('');
    const navigate = useNavigate();

    //navigate to home page
    const navigateToBalance = () => {
    console.log("NAVIGATED");
    return navigate("/");
    };

    const changeDebit = () => {
      props.setDebitState(Number(newDebitState)+props.userDebit);
      const debitLog={
        debit:newDebitState,
        description:descriptionState,
        date:dateState,
      };
    BankLogArr.push(debitLog);
    }
     console.log(BankLogArr);
  return (
    <div>
      <h2>User Debits Page</h2>
      <button onClick={navigateToBalance}>Go to Account Balance Page</button>
      <h1>Current Account Balance: ${props.userCredit-props.userDebit}</h1>
      <h3>Current Debit Amount: ${props.userDebit}</h3>
      <input type="text" placeholder="Enter new Debit Amount" onChange={e=>{setNewDebit(e.target.value)}}/><br/>
      <input type="text" placeholder="Description" onChange={e=>{setDescriptionState(e.target.value)}}/><br/>
      <input type="date" placeholder="Date" onChange={e=>{setDateState(e.target.value)}}/><br/>
      <button onClick={changeDebit}>Enter</button>
      {/* loop through BankLogArr and display each debit transaction through passing props to BankLog component */}
      {BankLogArr.map(debitLog=>{
                return <BankLog Amount={debitLog.debit} description={debitLog.description} date={debitLog.date}/>
      })}

    </div>
  );
}

export default Credits;