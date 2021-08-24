import { TiDelete } from "react-icons/ti";
import { useBudgetContext } from "../context/budget-context";
const ExpenseItem = ({ id, cost, name }) => {
  const { deleteFromList } = useBudgetContext();
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <div>
        <span className="badge bg-primary rounded-pill mr-3">Rs.{cost}</span>
        <TiDelete
          size="1.5em"
          onClick={() => {
            deleteFromList(id);
          }}
        />
      </div>
    </li>
  );
};

export default ExpenseItem;
