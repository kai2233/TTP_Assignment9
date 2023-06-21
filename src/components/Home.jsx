import React from "react";

const Home = (props) => {
    
  return(
    <div>
        <h2>User Balance Page</h2>
        <h1>Current Account Balance: ${props.userCredit-props.userDebit}</h1>
    </div> 

  );
};

export default Home;