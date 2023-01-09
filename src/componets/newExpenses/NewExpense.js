import React from 'react';

import ExpenseForm from './ExpensesForm';

import './NewExpenses.css';



const NewExpenses = (props)=> {

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const  expenseData ={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onAddexpense(expenseData);

    }

    return (
        <div className="new-expense">
            
                <ExpenseForm  onSaveExpenseData={saveExpenseDataHandler}/>
            

        </div>
    );

}

export default NewExpenses;