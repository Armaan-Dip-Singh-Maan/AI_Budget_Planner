import React, { useState } from 'react';

const ExpensePage = () => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');

  const handleExpenseSubmit = (e) => {
    e.preventDefault();
    // For now, just log or alert the data
    alert(`New Expense: ${expenseName} - $${expenseAmount}`);
    // In Day 3 or 4, you'll save to a database (e.g., Firestore).
    setExpenseName('');
    setExpenseAmount('');
  };

  return (
    <div className="container mt-5">
      <h2>Add Expense</h2>
      <form onSubmit={handleExpenseSubmit}>
        <div className="mb-3">
          <label>Expense Name:</label>
          <input
            type="text"
            className="form-control"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Amount:</label>
          <input
            type="number"
            className="form-control"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpensePage;
