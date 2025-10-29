import { useState } from "react";
import Header from "components/Header";
import AddExpenseForm from "./Components/AddExpenseForm";
import CategoryFilter from "./Components/CategoryFilter";
import ExpenseList from "./Components/ExpenseList";
import ExpenseStats from "./Components/ExpenseStats";

const CATEGORIES = ["Food", "Transport", "Bills", "Entertainment", "Others"];

const SAMPLE_EXPENSES = [
  { id: 1, description: "Lunch at restaurant", amount: 5000, category: "Food", date: "2024-01-15" },
  { id: 2, description: "Uber ride", amount: 2500, category: "Transport", date: "2024-01-14" },
  { id: 3, description: "Electricity bill", amount: 15000, category: "Bills", date: "2024-01-13" },
  { id: 4, description: "Movie tickets", amount: 4000, category: "Entertainment", date: "2024-01-12" },
];

export default function ExpensesTracker() {
  const [expenses, setExpenses] = useState(SAMPLE_EXPENSES);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [editingId, setEditingId] = useState(null);

  const addExpense = expense => {
    const newExpense = {
      ...expense,
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
    };
    setExpenses([newExpense, ...expenses]);
  };

  const updateExpense = (id, updatedExpense) => {
    setExpenses(expenses.map(expense =>
      expense.id === id ? { ...expense, ...updatedExpense } : expense
    ));
    setEditingId(null);
  };

  const deleteExpense = id => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const filteredExpenses =
    selectedCategory === "All"
      ? expenses
      : expenses.filter(expense => expense.category === selectedCategory);

  return (
    <div className="app-container">
      <Header />
      <AddExpenseForm onAdd={addExpense} categories={CATEGORIES} />
      <CategoryFilter
        categories={CATEGORIES}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <ExpenseStats expenses={filteredExpenses} />
      <ExpenseList
        expenses={filteredExpenses}
        onDelete={deleteExpense}
        onEdit={setEditingId}
        editingId={editingId}
        onUpdate={updateExpense}
      />
    </div>
  );
}
