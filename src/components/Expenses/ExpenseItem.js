import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    const checkForDiscount = () => {
        if (props.discount) {
            return (
                <div>${props.discount}</div>
            )
        }
        else {
            return <div>"No Discount"</div>
        }
    }

    const clickHandler = (x) => {
        setTitle(props.sub);

    };

    let newName = 'test!!!'
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />

            <div className="expense-item__description">
                <h1>{props.title}</h1>
                <h2 className='expense-nodiscount' >{checkForDiscount()} </h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={() => { clickHandler()}}>
                Change Title

            </button>
        </Card>);
}
export default ExpenseItem;