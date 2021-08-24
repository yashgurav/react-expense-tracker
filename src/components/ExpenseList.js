import { useEffect, useState } from "react";
import { useBudgetContext } from "../context/budget-context";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const { expenses } = useBudgetContext();
  const [filteredList, setFilteredList] = useState(expenses || []);

  useEffect(() => {
    setFilteredList(expenses);
  }, [expenses]);

  const handleSearch = (value) => {
    const searchResults = expenses.filter((filteredExpense) =>
      filteredExpense.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredList(searchResults);
  };

  return (
    <>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Type to search..."
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      <ul className="list-group mt-3 mb-3">
        {filteredList.length >= 1 ? (
          filteredList.map((item) => {
            return <ExpenseItem key={item.id} {...item} />;
          })
        ) : (
          <div style={{ textAlign: "center" }}>
            Cannot find any expense item...{" "}
          </div>
        )}
      </ul>
    </>
  );
};

export default ExpenseList;
