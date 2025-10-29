function formatCurrency(amount) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(amount)
}

export default function ExpenseStats({ expenses }) {
  const totalSpent = expenses.reduce((sum, exp) => sum + exp.amount, 0)
  const expenseCount = expenses.length
  const highestExpense = expenses.length > 0 ? Math.max(...expenses.map((exp) => exp.amount)) : 0

  const categoryTotals = expenses.reduce((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + exp.amount
    return acc
  }, {})

  const topCategory = Object.entries(categoryTotals).sort(([, a], [, b]) => b - a)[0]

  const stats = [
    {
      label: "Total Spent",
      value: formatCurrency(totalSpent),
      color: "bg-blue-50 border-blue-200",
      textColor: "text-blue-700",
    },
    {
      label: "Expenses",
      value: expenseCount,
      color: "bg-green-50 border-green-200",
      textColor: "text-green-700",
    },
    {
      label: "Highest Expense",
      value: formatCurrency(highestExpense),
      color: "bg-orange-50 border-orange-200",
      textColor: "text-orange-700",
    },
    {
      label: "Top Category",
      value: topCategory ? topCategory[0] : "N/A",
      color: "bg-purple-50 border-purple-200",
      textColor: "text-purple-700",
    },
  ]

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-slate-900">Statistics</h3>
      {stats.map((stat, index) => (
        <div key={index} className={`${stat.color} border rounded-lg p-4`}>
          <p className="text-sm text-slate-600 mb-1">{stat.label}</p>
          <p className={`text-2xl font-bold ${stat.textColor}`}>{stat.value}</p>
        </div>
      ))}
    </div>
  )
}
