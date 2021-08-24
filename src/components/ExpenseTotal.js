import { useBudgetContext } from "../context/budget-context";

const ExpenseTotal = () => {
  const { expenses } = useBudgetContext();

  const total = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  return (
    <div className="alert alert-danger">
      <span>Expenditure: Rs.{total}</span>
    </div>
  );
};

export default ExpenseTotal;
