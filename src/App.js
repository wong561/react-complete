import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import React, { useState } from 'react'




const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    sub:"Charmin'",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
    
  {
    id: 'e2',
    title: 'New TV',
    sub:"Samsung",
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    sub:"GEICO",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    sub:"IKEA",
    amount: 450.01,
    date: new Date(2021, 5, 12),
  },
]

//const test=expenses.map((expense)=>expense.id)



const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);


  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
    console.log("in App.js");
    console.log(expense);
  }


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <h2>I'm mr. Meeseeks! Look at me!! </h2>
      <Expenses items={expenses} />
      <div className='centerImg'>
        <img src={'./Florida-Gators-Logo.png'} className="App-logo" alt="logo" />
      </div>
    </div>
  );

}
export default App;
