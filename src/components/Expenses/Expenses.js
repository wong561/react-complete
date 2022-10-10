import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import './Expenses.css'

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020')


    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    }
    )





    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
        console.log("Expenses.js");
        console.log(selectedYear);
    }

    // function mappedExpenseItems(){
    //     return (expenses.map((item)=>(
    //       <ExpenseItem 
    //       name={item.title} 
    //       amount={item.amount} 
    //       date={item.date}
    //       testName={'hello world!'}
    //       discount={item.discountedAmount}

    //       ></ExpenseItem>
    //     )
    //     }
    let expensesContent = <h1><p>No Expenses Found</p></h1>


    return (
        <div>

            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses