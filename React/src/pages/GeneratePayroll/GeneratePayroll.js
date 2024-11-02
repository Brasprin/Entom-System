import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../_header/Header';
import './GeneratePayroll.css'

//Audrey
const GeneratePayroll = () => {
    const { id, fname, lname } = useParams();
    //vars
    const [payrollInfo, setPayrollInfo] = useState({
        date: '',
        ot: 0,
        salaryIncrease: 0,
        mealAllow: 0, //not sure if I read this right?
        bdayBonus: 0,
        incentive: 0,
        otherPayrollInfo: 0
    });
    const [deductions, setDeductions] = useState({
        cashAdvance: 0,
        healthCard: 0,
        absences: 0,
        otherDeductions: 0
    });
    const [results, setResults] = useState({
        payroll: 0,
        deductions: 0,
        total: 0
    });
    //change logic
    const calculatePayroll = () => {
        const { ot, salaryIncrease, mealAllow, bdayBonus, incentive, otherPayrollInfo } = payrollInfo;
        const { cashAdvance, healthCard, absences, otherDeductions } = deductions;
        const payroll_total = 0;
        const deductions_total = 0;
        const total = 0;

        setResults({ payroll_total, deductions_total, total });
    };

    return (
        <div className="container">
            <h1>Generate Payroll for {fname} {lname}</h1>
            <Header></Header>

            <div className="form-section">
                <p>Input all the information needed</p>
                <div className="form-group">
                    <label>Date:</label>
                    <input
                        type="date" value={payrollInfo.date}
                        onChange={(e) => setPayrollInfo({ ...payrollInfo, date: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label>OT:</label>
                    <input
                        type="number" value={payrollInfo.ot}
                        onChange={(e) => setPayrollInfo({ ...payrollInfo, ot: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label>Salary Increase:</label>
                    <input
                        type="number" value={payrollInfo.salaryIncrease}
                        onChange={(e) => setPayrollInfo({ ...payrollInfo, salaryIncrease: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label>Meal Allow:</label>
                    <input
                        type="number" value={payrollInfo.mealAllow}
                        onChange={(e) => setPayrollInfo({ ...payrollInfo, mealAllow: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label>Birthday Bonus:</label>
                    <input
                        type="number" value={payrollInfo.bdayBonus}
                        onChange={(e) => setPayrollInfo({ ...payrollInfo, bdayBonus: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label>Incentive:</label>
                    <input
                        type="number" value={payrollInfo.incentive}
                        onChange={(e) => setPayrollInfo({ ...payrollInfo, incentive: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label>Others:</label>
                    <input
                        type="number" value={payrollInfo.otherPayrollInfo}
                        onChange={(e) => setPayrollInfo({ ...payrollInfo, otherPayrollInfo: e.target.value })}
                    />
                </div>
            </div>

            <div className="form-section">
                <p>Deductions</p>
                <div className="form-group">
                    <label>Cash Advance:</label>
                    <input
                        type="number" value={deductions.cashAdvance}
                        onChange={(e) => setDeductions({ ...deductions, cashAdvance: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label>Health Card:</label>
                    <input
                        type="number" value={deductions.healthCard}
                        onChange={(e) => setDeductions({ ...deductions, healthCard: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label>Absences:</label>
                    <input
                        type="number" value={deductions.absences}
                        onChange={(e) => setDeductions({ ...deductions, absences: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label>Others:</label>
                    <input
                        type="number" value={deductions.otherDeductions}
                        onChange={(e) => setDeductions({ ...deductions, otherDeductions: e.target.value })}
                    />
                </div>
                <div className="button-container">
                    <button onClick={calculatePayroll}>Calculate</button>
                </div>
            </div>

            <div className="result-section">
                <p>Results</p>
                <div>
                    <label>Payroll: </label>
                    <span>{results.payroll_total}</span>
                </div>
                <div>
                    <label>Deductions: </label>
                    <span>{results.deductions_total}</span>
                </div>
                <div>
                    <label>Total: </label>
                    <span>{results.total}</span>
                </div>
                <div className="button-container">
                    <button>Email to Employee</button>
                </div>
            </div>
        </div>
    );
};

export default GeneratePayroll;
