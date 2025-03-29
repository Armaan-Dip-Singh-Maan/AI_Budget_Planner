// src/pages/ExpensePage.js
import React, { useState } from 'react';
import db from '../../firestore'; // Using absolute import as per jsconfig.json
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import ExpenseList from '../pages/ExpenseList';

const ExpensePage = () => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');

  const handleExpenseSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add expense to Firestore under the "expenses" collection
      await addDoc(collection(db, 'expenses'), {
        name: expenseName,
        amount: parseFloat(expenseAmount),
        createdAt: serverTimestamp(),
      });
      alert('Expense added successfully!');
      setExpenseName('');
      setExpenseAmount('');
    } catch (error) {
      console.error('Error adding expense: ', error);
      alert('Error adding expense');
    }
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
      <div className="mt-5">
        <h2>Expense List</h2>
        <ExpenseList />
      </div>
    </div>
  );
};

export default ExpensePage;
