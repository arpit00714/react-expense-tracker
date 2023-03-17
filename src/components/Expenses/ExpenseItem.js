import React from 'react';

import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){

    const ClickHandler = (e) => {
       // console.log('clicked!!!!');
       e.target.parentElement.style.display = "none";
    }
    
    return (
    <Card className="expense-item">
        {/* <div>{props.date.toISOString()}</div> */}
        <ExpenseDate date= {props.date} />
        <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h3> {props.location}</h3>
        <div className="expense-item__price">{props.amount}</div>
        </div>
        <button onClick={ClickHandler}>Delete Expense</button>      {/*onClick use to what happen on click */}
    </Card>
    );
} 

export default ExpenseItem;