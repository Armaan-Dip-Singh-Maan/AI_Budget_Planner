// src/components/ExpenseList.js
import React, { useState, useEffect } from 'react';
import db from '../../firestore';
import { collection, query, orderBy, onSnapshot, deleteDoc, doc } from 'firebase/firestore';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'expenses'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const expensesData = [];
      querySnapshot.forEach((doc) => {
        expensesData.push({ ...doc.data(), id: doc.id });
      });
      setExpenses(expensesData);
    });
    return () => unsubscribe();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'expenses', id));
      alert('Expense deleted successfully!');
    } catch (error) {
      console.error('Error deleting expense: ', error);
      alert('Error deleting expense');
    }
  };

  return (
    <div className="mt-5">
      <h2>Expense List</h2>
      <ul className="list-group">
        {expenses.map(expense => (
          <li key={expense.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>
              {expense.name}: ${expense.amount}
            </span>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDelete(expense.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
