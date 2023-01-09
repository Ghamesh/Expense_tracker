import Card from '../UI/Card';
import  './Expenseitem.css';
import ExpenseDate from './ExpenseDate';
import React, {useState} from 'react';



const ExpenseItem = (props) => {
    
    /*const [newTitle, setNewTitle] = useState("");

   const [title, setTitle] = useState(props.title);
    
    const clickHandler = ()=>{
        setTitle(newTitle);
        
    }

    const changeHandler = (event) =>{
        setNewTitle(event.target.value)

    }
                    <input className="titleForm" type="text" value={newTitle} onChange={changeHandler} placeholder="type some new title here!"/>
                <button className="btn" onClick={ clickHandler }>Change Title</button>
   
*/
    return (
        <Card className="expense-item">
            

            <div className="expense-item__description">
            <ExpenseDate date={props.date}/>
               <h2> {props.title} </h2>
               <div className="expense-item__price">${props.amout}</div>
                
                </div>

        </Card>
    )
    
}

export default ExpenseItem;