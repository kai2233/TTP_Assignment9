import React from "react";

const Home = (props) => {
    
  return(
    <div>
        <h1>I AM HOME</h1>
        <p>Current Account Balance: ${props.userCredit-props.userDebit}</p>
    </div> 

  );
};

export default Home;