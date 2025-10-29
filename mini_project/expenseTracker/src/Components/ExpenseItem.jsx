

function getCategoryColor(category) {
  const colors = {
    Food: "bg-orange-100 text-orange-800 border-orange-300",
    Transport: "bg-blue-100 text-blue-800 border-blue-300",
    Bills: "bg-red-100 text-red-800 border-red-300",
    Entertainment: "bg-purple-100 text-purple-800 border-purple-300",
    Others: "bg-slate-100 text-slate-800 border-slate-300",
  }
  return colors[category] || "bg-slate-100 text-slate-800 border-slate-300"
}

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(amount)
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-NG", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export default function ExpenseItem({ expense, onDelete, onEdit }) {
  return (
    <div className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <h4 className="font-semibold text-slate-900">{expense.description}</h4>
          <span className={`text-xs font-medium px-3 py-1 rounded-full border ${getCategoryColor(expense.category)}`}>
            {expense.category}
          </span>
        </div>
        <p className="text-sm text-slate-500">{formatDate(expense.date)}</p>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-lg font-bold text-slate-900">{formatCurrency(expense.amount)}</p>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(expense.id)}
            className="px-3 py-1 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg text-sm font-medium transition-colors"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(expense.id)}
            className="px-3 py-1 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg text-sm font-medium transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}
