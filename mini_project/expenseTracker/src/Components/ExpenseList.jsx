import ExpenseItem from "./expense-item"

export default function ExpenseList({ expenses, onDeleteExpense, onEditExpense }) {
  if (expenses.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-12 border border-slate-200 text-center">
        <p className="text-slate-500 text-lg">No expenses found. Add one to get started!</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden">
      <div className="divide-y divide-slate-200">
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} onDelete={onDeleteExpense} onEdit={onEditExpense} />
        ))}
      </div>
    </div>
  )
}
