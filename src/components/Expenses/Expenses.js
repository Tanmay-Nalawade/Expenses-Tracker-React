import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [enteredExpenseFilter, setExpenseFilter] = useState("2023");

  const changeExpenseFilter = (expenseFilter) => {
    setExpenseFilter(expenseFilter);
  };

  const filteresExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredExpenseFilter;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={enteredExpenseFilter}
          onChangeExpenseFilter={changeExpenseFilter}
        />
        <ExpensesChart expenses={filteresExpenses} />
        <ExpenseList items={filteresExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
