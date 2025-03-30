// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import db from '../../firestore';
import { collection, query, getDocs } from 'firebase/firestore';

const Dashboard = () => {
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    const fetchTotals = async () => {
      // Calculate total expenses
      const expenseQuery = query(collection(db, 'expenses'));
      const expenseSnapshot = await getDocs(expenseQuery);
      let expenseSum = 0;
      expenseSnapshot.forEach(doc => {
        expenseSum += doc.data().amount;
      });
      setTotalExpenses(expenseSum);

      // Calculate total income
      const incomeQuery = query(collection(db, 'incomes'));
      const incomeSnapshot = await getDocs(incomeQuery);
      let incomeSum = 0;
      incomeSnapshot.forEach(doc => {
        incomeSum += doc.data().amount;
      });
      setTotalIncome(incomeSum);
    };

    fetchTotals();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Dashboard</h2>
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Total Income</h5>
          <p className="card-text">${totalIncome.toFixed(2)}</p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Total Expenses</h5>
          <p className="card-text">${totalExpenses.toFixed(2)}</p>
        </div>
      </div>
      <div className="mt-3">
        <h4>Net Savings: ${ (totalIncome - totalExpenses).toFixed(2) }</h4>
      </div>
    </div>
  );
};

export default Dashboard;
