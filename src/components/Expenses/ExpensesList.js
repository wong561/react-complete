import React from 'react';
import ExpenseItem from './ExpenseItem';


const ExpensesList = props => {
    let expenseContent = <h1><p>No Expenses Found</p></h1>;

    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'> Found no expenses.</h2>
    }

         
            
       
    

    return <ul className='expenses-list'>
        {props.items.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                />
        ))}

    </ul>

};


export default ExpensesList;