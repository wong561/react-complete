import React from 'react';
import Expenses from './Expenses';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value)

  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>
          <h2>
            Filter by year
          </h2>
        </label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>

        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;