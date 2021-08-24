import { useState } from "react";
import { useBudgetContext } from "../context/budget-context";
import { v4 as uuidv4 } from "uuid";
const AddExpenseForm = () => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState(1);
  const { budget, expenses, addToList } = useBudgetContext();

  const Remaining =
    budget -
    expenses.reduce((total, item) => {
      return (total += item.cost);
    }, 0);

  const onSubmit = (e) => {
    e.preventDefault();
    if (name && cost) {
      if (parseInt(cost) > Remaining) {
        if (Remaining === 0) {
          alert("Already Out of Budget");
        } else {
          alert("Out of Budget, if you do this expenditure");
        }
      } else {
        const id = uuidv4();
        addToList(id, name, parseInt(cost));
        setCost("");
        setName("");
      }
    } else {
      alert("Enter valid expense details..");
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm col-lg-4">
          <label htmlFor="name">Name</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-sm col-lg-4">
          <label htmlFor="cost">Cost</label>
          <input
            type="number"
            required="required"
            className="form-control"
            id="cost"
            value={cost}
            min="1"
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};
export default AddExpenseForm;
