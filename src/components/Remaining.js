import { useBudgetContext } from "../context/budget-context";

const Remaining = () => {
  const { expenses, budget } = useBudgetContext();

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className={`alert alert-success`}>
      <span>Remaining:Rs.{budget - totalExpenses}</span>
    </div>
  );
};

export default Remaining;
