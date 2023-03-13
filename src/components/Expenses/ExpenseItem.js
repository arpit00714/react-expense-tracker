import React from 'react';

import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){
    
    return (
    <Card className="expense-item">
        {/* <div>{props.date.toISOString()}</div> */}
        <ExpenseDate date= {props.date} />
        <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h3> {props.location}</h3>
        <div className="expense-item__price">{props.amount}</div>
        </div>
    </Card>
    );
} 

export default ExpenseItem;