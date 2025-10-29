"use client"

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200">
      <h3 className="text-lg font-semibold text-slate-900 mb-4">Filter by Category</h3>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onSelectCategory("All")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            selectedCategory === "All" ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === category
                ? getCategoryColor(category) + " text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

function getCategoryColor(category) {
  const colors = {
    Food: "bg-orange-500",
    Transport: "bg-blue-500",
    Bills: "bg-red-500",
    Entertainment: "bg-purple-500",
    Others: "bg-slate-500",
  }
  return colors[category] || "bg-slate-500"
}
