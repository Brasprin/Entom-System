const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'', // replace w password to db
    database: 'entompestcontrol'

})

app.get('/', (e, res)=> {
    return res.json("from backend side");
})

app.get('/employee', (req, res) => {
    console.log('get employee');
    const sql = "SELECT * FROM employee";
    db.query(sql, (err, data)=> {
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.get('/payments/:employee_index_id', (req, res) => { 
    const id = req.params.employee_index_id; 
    console.log(`Get payment of employee ${id}`);
    const sql = "SELECT * FROM payments WHERE employee_index_id = ?";
    
    db.query(sql, [id], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.post('/getEmail', (req, res) => {
    const {employee_index_id} = req.body;
    console.log(`getting email of employee ${employee_index_id}`);
    const sql = "SELECT email FROM employee WHERE id = ?";

    db.query(sql, [employee_index_id], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
})


app.post('/addPayment', (req, res) => {
    console.log('add payment');
    const { employee_index_id, rate, basic, payrollInfo, deductions, results } = req.body; 
    const sql = `INSERT INTO payments (employee_index_id, payDate, rate, basic, overtimeDays, salaryIncrease, 
        mealAllowance, birthdayBonus, incentive, otherAdditions, sss, philHealth, pagIbig, 
        cashAdvance, healthCard, lateAbsent, otherDeductions, payroll, deductions, total, isDeleted) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    
    const values = [
        employee_index_id,
        payrollInfo.date, 
        rate, 
        basic, 
        payrollInfo.ot, 
        payrollInfo.salaryIncrease, 
        payrollInfo.mealAllow, 
        payrollInfo.bdayBonus, 
        payrollInfo.incentive, 
        payrollInfo.otherPayrollInfo, 
        deductions.sss, 
        deductions.philhealth, 
        deductions.pagibig, 
        deductions.cashAdvance, 
        deductions.healthCard, 
        deductions.absences, 
        deductions.otherDeductions, 
        results.payroll, 
        results.deductions, 
        results.total, 
        false
    ];

    console.log(values);

    db.query(sql, values , (err, data) => {
        if (err) return res.json(err);
        return res.status(201).json({ message: "Payment added successfully", id: data.insertId });
    });
});



app.listen(8000, ()=> {
    console.log("listening");
})