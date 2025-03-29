// src/components/ExpenseList.js
import React, { useState, useEffect } from 'react';
import db from '../../firestore';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

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

  return (
    <div className="container mt-5">
      <h2>Expenses</h2>
      <ul className="list-group">
        {expenses.map(expense => (
          <li key={expense.id} className="list-group-item">
            {expense.name}: ${expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
