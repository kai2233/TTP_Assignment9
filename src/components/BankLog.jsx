import react from "react"


const BankLog = (props) =>{
    return(
        <div>
            <h3>{props.Amount}-------{props.description}-------{props.date}</h3>
        </div>
    );
}
export default BankLog;