
import db from '../connect/connect.js';

export const getAllPayments = (req, res) => {
    let sql = "SELECT * FROM mydb.payments";

    db.query(sql, (err, payments) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.render('payment', { payments });
        }
    });
};

export const getPaymentById = (req, res) => {
    const { id } = req.params;
    let sql = "SELECT * FROM mydb.payments WHERE studentID = ?";

    db.query(sql, [id], (err, payment) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(payment);
        }
    });
};

export const addPayment = (req, res) => {
    const { studentID, balance, debt, amount, paymentDate } = req.body;
    let sql = "INSERT INTO mydb.payments (studentID, balance, debt, amount, paymentDate) VALUES (?, ?, ?, ?, ?)";

    db.query(sql, [studentID, balance, debt, amount, paymentDate], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result);
        }
    });
};

export const updatePayment = (req, res) => {
    const { id } = req.params;
    const { balance, debt, amount, paymentDate } = req.body;
    let sql = "UPDATE mydb.payments SET balance = ?, debt = ?, amount = ?, paymentDate = ? WHERE studentID = ?";

    db.query(sql, [balance, debt, amount, paymentDate, id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result);
        }
    });
};

export const deletePayment = (req, res) => {
    const { id } = req.params;
    let sql = "DELETE FROM mydb.payments WHERE studentID = ?";

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result);
        }
    });
};
