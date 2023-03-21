import React,{ useState } from 'react';

import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){

  // const [title, setTitle] = useState(props.title);
   const [Newamount, setamount] = useState(props.amount);

   // let title = props.title;

    const ClickHandler = () => {
       setamount(100);             // for change new 
       // console.log(title);
     //  e.target.parentElement.style.display = "none";
    }
    
    return (
      <li>
    <Card className="expense-item">
        {/* <div>{props.date.toISOString()}</div> */}
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h3> {props.location}</h3>
        <div className="expense-item__price">{Newamount}</div>
        </div>
        <button onClick={ClickHandler}>Add Expense</button>      {/*onClick use to what happen on click */}
    </Card>
    </li>
    );
} 

export default ExpenseItem;