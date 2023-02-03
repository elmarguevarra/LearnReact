import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);

    props.onAddExpenseData(expenseData);
  };

  const[isEditing, setEditing] = useState(false);
  
  const startEditingHandler = () =>{
    setEditing(true);
  }

  const stopEditingHandler = () => {
    setEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && <button type="button" onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
  );
};

export default NewExpense;
