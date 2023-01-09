
import React, {useState} from 'react';

import Expenses from './componets/Item/Expenses';
import NewExpenses from './componets/newExpenses/NewExpense';



let Dumy__Expense = [
  {
    id: 'e1',
    title: 'Shoping',
    amout: 2500,
    date : new Date(2022, 12 , 17)
  },

  {
    id: 'e2',
    title: 'Books',
    amout: 180,
    date : new Date(2020, 5 , 7)
  },

  {
    id: 'e3',
    title: 'Bag',
    amout: 500,
    date : new Date(2018, 12 , 21)
  },

  {
    id: 'e4',
    title: 'Laptop',
    amout: 25000,
    date : new Date(2017, 5 , 22)
  }
];


const  App = () =>{
  /*
  let expenseDate = new Date(2021, 3, 28);
  let expenseTitle = "School Fee";
  let expenseAmout = 300;*/
const [expenses, setExpense] = useState(Dumy__Expense);

const  addExpenseHandler = (expense) =>{
  const update = [expense, ...expenses];

  setExpense(update)
}

return (
  <div>
   <NewExpenses  onAddexpense={addExpenseHandler}/>
  <Expenses  item={expenses} />
  </div>
)
}

export default App;