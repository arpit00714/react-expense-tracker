import React from "react";


const ExpensesFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                </select>
            </div>

        </div>
    );
};

export default ExpensesFilter;