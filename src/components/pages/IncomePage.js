// src/pages/IncomePage.js
import React, { useState } from 'react';
import db from '../../firestore';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const IncomePage = () => {
  const [incomeSource, setIncomeSource] = useState('');
  const [incomeAmount, setIncomeAmount] = useState('');

  const handleIncomeSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'incomes'), {
        source: incomeSource,
        amount: parseFloat(incomeAmount),
        createdAt: serverTimestamp(),
      });
      alert('Income added successfully!');
      setIncomeSource('');
      setIncomeAmount('');
    } catch (error) {
      console.error('Error adding income: ', error);
      alert('Error adding income');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add Income</h2>
      <form onSubmit={handleIncomeSubmit}>
        <div className="mb-3">
          <label>Income Source:</label>
          <input
            type="text"
            className="form-control"
            value={incomeSource}
            onChange={(e) => setIncomeSource(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Amount:</label>
          <input
            type="number"
            className="form-control"
            value={incomeAmount}
            onChange={(e) => setIncomeAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Income</button>
      </form>
    </div>
  );
};

export default IncomePage;
