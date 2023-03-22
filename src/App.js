import './App.css';
import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesChart from './components/Expenses/ExpensesChart';

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    locationOfExpenditure: "Local Mall",
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
    locationOfExpenditure: "Local Mall",
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    locationOfExpenditure: "car Repair",
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    locationOfExpenditure: "bike repair",
  },
];

const App = () => {
 const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) =>  {
      setExpenses((prevExpenses) => {
        return [expense, ...prevExpenses];
      });
    };

  return (
    <div className='App'>
      <NewExpense  onAddExpense={addExpenseHandler} ></NewExpense>
       <Expenses items={expenses} />
    </div>
  );
};


export default App;
