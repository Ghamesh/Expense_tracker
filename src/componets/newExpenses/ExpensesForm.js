import React, {useState} from "react";

import './ExpensesForm.css';

const ExpenseForm = (props) => {
    const [entertitle, setentertitle] = useState('');
    const [enteramout, setenteramout] = useState('');
    const [enterdate, setenterdate] = useState('');

    const titleChangeHandler = (event) =>{
        setentertitle(event.target.value);
    };
    const amoutChangeHandler = (event) =>{
        setenteramout(event.target.value);
    };
    const dateChangeHandler = (event) =>{
        setenterdate(event.target.value);
    };

   const submitHandlar = (event) =>{

    event.preventDefault();

    const expensData = {
        title : entertitle,
        amout : enteramout,
        date : new Date(enterdate)
    }

    props.onSaveExpenseData(expensData );
    
    //console.log(expensData)
    setentertitle('');
    setenteramout('');
    setenterdate('');

   }
    return (
        <form onSubmit={submitHandlar}>
            <div className="new-expense__controls demo">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={entertitle} onChange={titleChangeHandler}/>

                </div>

                <div className="new-expense__control">
                    <label>Amout</label>
                    <input type="number" value={enteramout} min="0.01" step="0.01" onChange={amoutChangeHandler}/>

                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enterdate} onChange={dateChangeHandler} />

                </div>
            </div>
            <div className="new-expense__actions">
                <button type="Submit">Add Expense</button>
            </div>
        </form>

    )

}

export default ExpenseForm;