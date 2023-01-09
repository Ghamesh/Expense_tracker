import './ExpenseDate.css'
import React from 'react';
const  ExpenseDate = (props)  => {
    let month = props.date.toLocaleString('en-US', {month: 'long'});
    let year = props.date.getFullYear();
    let day = props.date.toLocaleString('en-US',  {day: '2-digit'});

    return (
        <div className="expense-item__mt">
             <div>{ day }</div>
             <div>{ month }</div>
             <div>{ year }</div>
    </div>
    )

}

export default ExpenseDate;